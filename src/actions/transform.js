const {
  getUpdatedBank,
  actionSuccess,
  actionFailure, 
  getEmptyBank
} = require('../util.js');
const _ = require('lodash');
const { error } = require('../strings.js');


function transform(state, args) {

  const { shipId, systemId, color, player } = args;

  const [targetSystems, otherSystems] = _.partition(state.board, (system)=>system.id === systemId);
  if (!targetSystems.length) {
    return actionFailure(state, error.invalidSystem);
  }
  const targetSystem = targetSystems[0];
  const [targetShips, otherShips] = _.partition(targetSystem.ships, (ship) => (ship.id === shipId && ship.owner === player));
  if (!targetShips.length) {
    return actionFailure(state, error.invalidShip);
  }
  const targetShip = targetShips[0];

  if (state.bank[color][targetShip.size - 1]<1) {
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