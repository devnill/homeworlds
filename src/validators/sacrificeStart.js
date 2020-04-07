import {
  find
} from '../util/';


const {
  findSystem,
  findShip,
} = find;

import {
  error
} from '../strings';

function sacrificeStart(state, args) {
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