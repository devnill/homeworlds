const _ = require('lodash');
const {
  history
} = require('../util/');

function endTurn(state, args) {
  const updatedState = history.add(state, Object.assign({}, _.omit(state, ['turn']), {
    activePlayer: (state.activePlayer + 1) % state.players.length,
  }), 'endTurn', args);
  return updatedState;
}

module.exports = endTurn;