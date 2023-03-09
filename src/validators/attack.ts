import { ErrorMessage, State, ActionArgs, Color } from "../types";
import { playerHasColorAbility } from "./player";

import basic from "./basic";
import util from "../util/index";

const { findSystem, largestShipInSystem, findShip } = util.find;

import { error } from "../strings";

function attack(state: State, args: ActionArgs): ErrorMessage {
  const basicValidationError = basic(state, args);

  if (basicValidationError) {
    return basicValidationError;
  }

  const { board } = state;
  const { system, ship, player, color } = args;
  if (!system || !ship || !player || !color) {
    return error.invalidActionArguments;
  }
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
