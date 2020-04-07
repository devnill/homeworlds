
const {
  playerHasColorAbility,
} = require('./player');

const basic = require('./basic');
const util = require('../util/');
const {
  findSystem,
  largestShipInSystem,
  findShip
} = util.find;

const { error } = require('../strings');

function attack(state, args) {
  const basicValidationError = basic(state, args);

  if (basicValidationError) {
    return basicValidationError;
  }

  const { board } = state;
  const { system, ship, player, color } = args;
  const [targetSystem] = findSystem(board, system);
  if (targetSystem === null) {
    return error.invalidSystem;
  }
  const [targetShip] = findShip(targetSystem.ships, ship);
  if (!targetShip) {
    return error.invalidShip;
  }
  if (playerHasColorAbility(targetSystem, player, color)) {
    return error.invalidAbility;
  }
  if (largestShipInSystem(targetSystem, player) < targetShip.size) {
    return error.shipAttackSize;
  }
  return null;
}

module.exports = attack;
