import { ErrorMessage, State, ActionArgs } from "../types";
import { find } from "../util/index";

const { findPiecesByColor, findSystem } = find;

import { error } from "../strings";

function build(state: State, args: ActionArgs): ErrorMessage {
  const { board } = state;
  const { system, color } = args;
  if (!system || !color) {
    return error.invalidActionArguments;
  }
  const [targetSystem] = findSystem(board, system);

  if (!targetSystem) {
    return error.invalidSystem;
  }

  const piecesToCount = [...targetSystem.ships, ...targetSystem.stars];

  if (findPiecesByColor(piecesToCount, color) < 4) {
    return error.catastropheFailed;
  } else {
    return null;
  }
}
export default build;
