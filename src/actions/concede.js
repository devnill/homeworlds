
//todo move out of actions
const {isCurrentPlayer} = require('../validators/');
const {actionSuccess, actionFailure} = require('../util/').action;

function concede(state, args) {
  // check to see if its the players turn
  if (!isCurrentPlayer(state, args)) {
    return actionFailure(state, 'not your turn');
  }

  const updatedState = history.add(state, state, 'concede', args);
  
  return actionSuccess(updatedState);
}

module.exports = concede;