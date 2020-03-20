
//todo move out of actions
const {isCurrentPlayer} = require('../validators/');
const {actionSuccess, actionFailure} = require('../util/').action;

function concede(state, args) {
  // check to see if its the players turn
  if (!isCurrentPlayer(state, args)) {
    return actionFailure(state, 'not your turn');
  }

  return actionSuccess({
    ...state
  });
}

module.exports = concede;