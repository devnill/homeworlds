/**
 * action: {
  system: {id: 1},
  color: 'blue',
  player: 'player1'
}, */
import util from '../util/';
const { findSystem } = util.find;
import { playerHasColorAbility }  from './player';

import { error } from ('../strings');
  
function build(state, args) {
  const { board, bank } = state;
  const { system, color, player } = args;
  const [targetSystem] = findSystem(board, system);

  //todo move to validators
  const smallestSize = (bank[color].findIndex((size) => size > 0)) + 1;
  if (smallestSize !== 0) {
    if (playerHasColorAbility(targetSystem, player, 'green')) {
      return null;
    } else {
      // player doesn't have color
      return error.invalidAbility;
    }
  } else {
    // not enough in bank
    return error.bankInsufficent;
  }
}
export default build;