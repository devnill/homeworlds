// Generic validation rules for basic actions
import {Error, State, ActionArgs} from '../types/index.d';
import { error } from '../strings';

function basic(state: State, args: ActionArgs): Error {
  // Is the player making this action currently playing accoring to the state?
  if(args.player != state.players[state.activePlayer]) {
    return error.invalidTurn;
  }

  return null;
}

export default basic;
