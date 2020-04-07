import {State, Error, ActionArgs} from '../types/index.d';
import basic from './basic';
import {find} from '../util/index';

const {
  findSystem,
  findShip
} = find;

const { error } = require('../strings');

function transform(state, args) {
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
