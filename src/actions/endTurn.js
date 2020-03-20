const _ = require('lodash');
const {
action
} = require('../util/');


const {
  actionSuccess,
  actionFailure
} = action;

//todo move out of actions
const {isCurrentPlayer} = require('../validators/');

function endTurn(state, args) {
  // check to see if its the players turn
  if (!isCurrentPlayer(state, args)) {
    return actionFailure(state, 'not your turn');
  }
  // todo evaluate if homeworld should go away
  const updatedHistory = [...state.history, Object.assign({ action: 'endTurn', args })];
  const updatedState = Object.assign({}, _.omit(state, ['turn']), {
    activePlayer: (state.activePlayer + 1) % state.players.length,
    //history: updatedHistory
  });

  
  return actionSuccess(updatedState);
}

module.exports = endTurn;