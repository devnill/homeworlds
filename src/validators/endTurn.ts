
//todo move out of actions
import { player } from '../util/';
import {State, ActionArgs} from '../types/index.d';

function endTurn(state: State, args: ActionArgs): Error {
  // check to see if its the players turn
  if (!player.isCurrentPlayer(state, args)) {
    return 'not your turn';
  }
  return null;
}

export default endTurn;