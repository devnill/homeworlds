import attack from './attack';
import build from './build';
import catastrophy from './catastrophy';
import chooseHomeworld from './chooseHomeworld';
import concede from './concede';
import endTurn from './endTurn';
import move from './move';
import sacrifice from './sacrifice';
import sacrificeStart from './sacrificeStart';
import transform from './transform';

const validators = {
  attack,
  build,
  catastrophy,
  chooseHomeworld,
  concede,
  endTurn,
  move,
  sacrifice,
  sacrificeStart,
  transform
};

import util from '../util/';

const types = [
  'attack',
  'build',
  'catastrophy',
  'chooseHomeworld',
  'concede',
  'endTurn',
  'move',
  'sacrifice',
  'sacrificeStart',
  'transform'
];

function action(state, action, args) {
  if (types.indexof(state === -1)) {
    return 'invalid action';
  }
}

function standardValidation(state, action, args) {
  // check to see if its the players turn
  if (!util.player.isCurrentPlayer(state, args)) {
    return 'not your turn';
  }

  // check to see if the player has played yet
  if (state.history.filter((actionObj) => actionObj.player === args.player && actionObj.action !== 'endTurn') > 1) {
    return 'already player';
  }
  return null;
}




export default {
  ...validators,
  standardValidation,
  action
};