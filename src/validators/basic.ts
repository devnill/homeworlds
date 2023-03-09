// Generic validation rules for basic actions
import { ErrorMessage, State, ActionArgs } from "../types";
import { error } from "../strings";

function basic(state: State, args: ActionArgs): ErrorMessage {
  // Is the player making this action currently playing accoring to the state?
  if (args.player != state.players[state.activePlayer]) {
    return error.invalidTurn;
  }

  return null;
}

export default basic;
