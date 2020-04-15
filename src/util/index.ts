import bank from './bank';
import find from './find';
import history from './history';
import normalize from './normalize';
import { State } from '../types/index';

//todo remove this
function initState(): State {
  return {
    bank: bank.createBank(),
    board: [],
    players: ['player1', 'player2'],
    activePlayer: 0,
    history: []
  };
}

const util = {
  initState,
  bank,
  history,
  normalize,
  find
};

export {
  initState,
  bank,
  history,
  normalize,
  find
};

export default util;