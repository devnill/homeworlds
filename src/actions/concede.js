function concede(state, args) {
  // check to see if its the players turn
  if (!isCurrentPlayer(state, args)) {
    return actionFailure(state, 'not your turn');
  }
  const updatedHistory = [...state.history, Object.assign({ action: 'endTurn', args })];
  const updatedState = { history: updatedHistory };
  return actionSuccess(Object.assign({}, state/*, updatedState*/));
}

module.exports = concede;