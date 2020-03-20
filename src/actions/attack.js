const {
  player,
  action,
  find,
  history
} = require('../util/');

const {
  actionFailure,
  actionSuccess
} = action;

const {
  playerHasColorAbility,
} = player;

const {
  findSystem,
  largestShipInSystem,
  findShip
} = find;

const { error } = require('../strings');

function attack(state, args) {
  const { board } = state;
  const { system, ship, player, color } = args;
  const [targetSystem, otherSystems] = findSystem(board, system);
  if (targetSystem === null) {
    actionFailure(state, error.invalidSystem);
  }
  const [targetShip, otherShips] = findShip(targetSystem.ships, ship);
  if (!targetShip) {
    return actionFailure(state, error.invalidShip);
  }
  if (playerHasColorAbility(targetSystem, player, color)) {
    return actionFailure(state, error.invalidAccessRed);
  }
  if (largestShipInSystem(targetSystem, player) < targetShip.size) {
    return actionFailure(state, error.shipAttackSize);
  }
  const updatedShip = { ...targetShip, owner: player };
  const updatedSystem = {
    ...targetSystem,
    ships: [...otherShips, updatedShip]
  };
  //todo update history

   
  const updatedState = history.add(state, { 
    ...state, 
    board: [...otherSystems, updatedSystem]
  },'attack', args);
  return actionSuccess(updatedState);
}

module.exports = attack;