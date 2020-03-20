const _ = require('lodash');
const {
  action,
  history
} = require('../util/');


const {
  actionSuccess,
  actionFailure
} = action;

//todo move out of actions
const { isCurrentPlayer } = require('../validators/');

function endTurn(state, args) {
  // check to see if its the players turn
  if (!isCurrentPlayer(state, args)) {
    return actionFailure(state, 'not your turn');
  }

  const updatedState = history.add(state, Object.assign({}, _.omit(state, ['turn']), {
    activePlayer: (state.activePlayer + 1) % state.players.length,
  }), 'endTurn', args);

  return actionSuccess(updatedState);
}

module.exports = endTurn;