import {State, ActionArgs, ErrorMessage} from '../types/index.d';

import { intersection } from 'lodash';

import basic from './basic';
import {
  find,
  bank,
} from '../util/index';

const {
  createSystem
} = bank;

const { 
  findSystem,
  findShip,
} = find;

import { error } from '../strings';

function move(state: State, args: ActionArgs): ErrorMessage {
  const basicValidationError = basic(state, args);

  if (basicValidationError) {
    return basicValidationError;
  }

  // validate if move can be made
  const { board, bank } = state;
  const { from, to, ship } = args;
  const [startSystem, otherSystems] = findSystem(board, from);

  // validate starting system exists
  // todo move validation
  if (!startSystem) {
    return error.invalidSystem;
  }

  // find the ship we are trying to move
  const [targetShip] = findShip(startSystem.ships, ship);

  // fail if target ship is not in the starting system
  if (!targetShip) {
    return error.invalidShip;
  }

  // see if we can find the destination system
  let [endSystem] = findSystem(otherSystems, to);

  // if not, attempt to create one
  if(!endSystem){
    const [newSystem] = createSystem(bank, to);

    if(!newSystem) {
      return error.invalidSystem;
    } else {
      endSystem = newSystem;
    }
  }

  const startStarSizes = startSystem.stars.map((star) => star.size);
  const endStarSizes = endSystem.stars.map((star) => star.size);

  const commonStarSizes = intersection(startStarSizes, endStarSizes);
  
  if (commonStarSizes.length > 0) {
    return error.invalidMove;
  }
  return null;

}
export default move;
