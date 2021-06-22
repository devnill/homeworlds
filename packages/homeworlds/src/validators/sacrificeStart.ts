import {State, ErrorMessage, ActionArgs} from '../types/index.d';

import {
  find
} from '../util/index';


const {
  findSystem,
  findShip,
} = find;

import {
  error
} from '../strings';

function sacrificeStart(state: State, args: ActionArgs): ErrorMessage {
  const {
    board
  } = state;
  const {
    ship,
    system
  } = args;
  const [targetSystem] = findSystem(board, system);
  if (!targetSystem) {
    return error.invalidSystem;
  }
  const [targetShip] = findShip(targetSystem.ships, ship);
  if (!targetShip) {
    return error.invalidShip;
  }
  return null;
}
export default sacrificeStart;