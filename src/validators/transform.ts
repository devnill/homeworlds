import {State, Error, ActionArgs} from '../types/index';
import basic from './basic';
import {find} from '../util/index';
import { error } from '../strings';

const {
  findSystem,
  findShip
} = find;


function transform(state:State, args:ActionArgs):Error {
  const basicValidationError = basic(state, args);

  if (basicValidationError) {
    return basicValidationError;
  }

  const { board, bank } = state;
  const { ship, system, color } = args;
  const [targetSystem] = findSystem(board, system);
  if (!targetSystem) {
    return error.invalidSystem;
  }
  const [targetShip] = findShip(targetSystem.ships, ship);
  if (!targetShip) {
    return error.invalidShip;
  }
  // todo is player correct?
  if (bank[color][targetShip.size - 1] < 1) {
    return error.insufficentPieces;
  }
  return null;
}
export default transform;
