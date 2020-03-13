const {
  getUpdatedBank,
  findSystem,
  findShip,
  actionSuccess,
  actionFailure,
  getEmptyBank
} = require('../util.js');
const _ = require('lodash');
const { error } = require('../strings.js');


function transform(state, args) {
  const { board } = state;
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
  const updatedBank = getUpdatedBank(state, bankDelta);

  const transformedShip = Object.assign({}, targetShip, { color });
  const updatedSystem = Object.assign({}, targetSystem, {
    ships: [...otherShips, transformedShip],
  });
  const updatedState = Object.assign({}, state, {
    bank: updatedBank,
    board: [...otherSystems, updatedSystem],
    /*history: [...state.history, {
      action: 'transform',
      args,
      systems:[targetSystem]
    }]*/
  });
  return actionSuccess(updatedState);
}
module.exports = transform;