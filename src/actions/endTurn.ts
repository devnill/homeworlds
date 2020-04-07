import {
  omit
} from 'lodash';
import {
  history
} from '../util/';
import {
  State,
  ActionArgs
} from '../types/index.d';

function endTurn(state: State, args: ActionArgs): State {
  const updatedState = history.add(state, Object.assign({}, omit(state, ['turn']), {
    activePlayer: (state.activePlayer + 1) % state.players.length,
  }), 'endTurn', args);
  return updatedState;
}

export default endTurn;