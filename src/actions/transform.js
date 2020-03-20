const {
  bank,
  find,
  action,
  history
} = require('../util/');

const {
  returnToBank,
  getEmptyBank
} = bank;

const {
  findSystem,
  findShip
} = find;

const {
  actionSuccess,
  actionFailure
} = action;

const _ = require('lodash');
const { error } = require('../strings');


function transform(state, args) {
  const { board, bank } = state;
  const { ship, system, color, player } = args;

  const [targetSystem, otherSystems] = findSystem(board, system);
  if (!targetSystem) {
    return actionFailure(state, error.invalidSystem);
  }

  const [targetShip, otherShips] = findShip(targetSystem.ships, ship);
  if (!targetShip) {
    return actionFailure(state, error.invalidShip);
  }

  if (state.bank[color][targetShip.size - 1] < 1) {
    return actionFailure(state, error.insufficentPieces);
  }

  const bankDelta = getEmptyBank();
  bankDelta[targetShip.color][targetShip.size - 1]++;
  bankDelta[color][targetShip.size - 1]--;
  const updatedBank = returnToBank(bank, bankDelta);

  const transformedShip = Object.assign({}, targetShip, { color });
  const updatedSystem = Object.assign({}, targetSystem, {
    ships: [...otherShips, transformedShip],
  });
  
  const updatedState = history.add(state, Object.assign({}, state, {
    bank: updatedBank,
    board: [...otherSystems, updatedSystem]
  }), '', args);
  return actionSuccess(updatedState);
}
module.exports = transform;