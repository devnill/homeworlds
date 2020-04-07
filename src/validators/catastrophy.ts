import {Error, State, ActionArgs} from '../types/index.d';
import { find } from '../util/';

const {
  findPiecesByColor,
  findSystem
} = find;

import { error } from '../strings';

function build(state: State, args: ActionArgs): Error{
  const { board } = state;
  const { system, color } = args;
  const [targetSystem] = findSystem(board, system);

  if (!targetSystem) {
    return error.invalidSystem;
  }

  const piecesToCount = [
    ...targetSystem.ships,
    ...targetSystem.stars
  ];

  if (findPiecesByColor(piecesToCount, color) < 4) {
    return error.catastrophyFailed;
  } else {
    return null;
  }
}
export default build;