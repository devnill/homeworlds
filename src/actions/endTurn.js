import {omit} from 'lodash';
import { history } from '../util/';

function endTurn(state, args) {
  const updatedState = history.add(state, Object.assign({}, omit(state, ['turn']), {
    activePlayer: (state.activePlayer + 1) % state.players.length,
  }), 'endTurn', args);
  return updatedState;
}

export default endTurn;