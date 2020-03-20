
function standardValidation(state, args) {
  // check to see if its the players turn
  if (!isCurrentPlayer(state, args)) {
    return 'not your turn';
  }

  // check to see if the player has played yet
  if (state.history.filter((actionObj) => actionObj.player === args.player && actionObj.action !== 'endTurn') > 1) {
    return 'already player';
  }
  return null;
}

function isCurrentPlayer(state, args) {
  return args.player === state.players[state.activePlayer];
}

const validators = {
  isCurrentPlayer,
  standardValidation
};

module.exports=validators;