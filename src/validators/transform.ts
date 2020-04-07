import {State, Error, ActionArgs} from '../types/index.d';

import util from '../util/index';
import {error} from '../strings';



function transform(state: State, args: ActionArgs): Error {
  const { board, bank } = state;
  const { ship, system, color } = args;
  const [targetSystem] = util.find.findSystem(board, system);
  if (!targetSystem) {
    return error.invalidSystem;
  }
  const [targetShip] = util.find.findShip(targetSystem.ships, ship);
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