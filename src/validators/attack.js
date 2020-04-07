
import { playerHasColorAbility } from './player';

import util from '../util/';

const {
  findSystem,
  largestShipInSystem,
  findShip
} = util.find;

import { error } from '../strings';

function attack(state, args) {
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

export default attack;