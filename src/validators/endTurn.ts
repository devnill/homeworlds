import { player } from "./index";
import { State, ActionArgs, ErrorMessage } from "../types";

function endTurn(state: State, args: ActionArgs): ErrorMessage {
  // check to see if its the players turn
  if (!player.isCurrentPlayer(state, args)) {
    return "not your turn";
  }
  return null;
}

export default endTurn;
