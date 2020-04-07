import { history } from '../util';
import red from './attack';
import blue from './transform';
import green from './build';
import yellow from './move';

const colorActions = {
  red,
  blue,
  green,
  yellow
};

function sacrifice(state, args) {
  
  const sacrificeState = state.turn.sacrifice;
  const result = colorActions[args.color](state, args);
  const updatedState = history.add(state, Object.assign({}, result, {
    turn: {
      sacrifice: {
        count: sacrificeState.count - 1,
        color: sacrificeState.color,
      }
    }
  }), 'sacrifice', args);
  return updatedState;
}

export default sacrifice;