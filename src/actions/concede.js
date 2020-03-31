
function concede(state, args) {
  const updatedState = history.add(state, state, 'concede', args); 
  return updatedState;
}

module.exports = concede;