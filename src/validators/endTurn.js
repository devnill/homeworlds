
//todo move out of actions
import { player } from '../util/';

function endTurn(state, args) {
  // check to see if its the players turn
  if (!player.isCurrentPlayer(state, args)) {
    return 'not your turn';
  }
  return null;
}

export default endTurn;