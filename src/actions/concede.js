
function concede(state, args) {
  const updatedState = history.add(state, state, 'concede', args); 
  return updatedState;
}

export default concede;