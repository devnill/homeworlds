import basic from './basic';
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
  basic,
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

export default {
  ...validators,
  action
};