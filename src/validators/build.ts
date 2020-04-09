import {ErrorMessage, State, ActionArgs, Bank} from '../types/index.d';
import basic from './basic';
import util from '../util/index';
const { findSystem } = util.find;
import { playerHasColorAbility } from './player';

import { error } from '../strings';

function build(state: State, args: ActionArgs): ErrorMessage {
  const basicValidationError = basic(state, args);

  if (basicValidationError) {
    return basicValidationError;
  }

  const { board, bank } = state;
  const { system, color, player } = args;
  const [targetSystem] = findSystem(board, system);

  //todo move to validators
  
  const smallestSize = (bank[color].findIndex((size) => size > 0)) + 1;
  if (smallestSize !== 0) {
    if (playerHasColorAbility(targetSystem, player, color)) {
      return null;
    } else {
      // player doesn't have color
      return error.invalidAbility;
    }
  } else {
    // not enough in bank
    return error.bankInsufficent;
  }
}
export default build;
