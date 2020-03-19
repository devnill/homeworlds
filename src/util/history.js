const createPatch = require('json-patch-gen');
const applyPatch = require('jsonpatch').apply_patch;

function getHistoryItem(initialState, updatedState, action, args) {
  const patch = createPatch(updatedState, initialState);
  return {
    action,
    args,
    patch
  };
}
function getPreviousState(state) {
  const lastAction = state.history[state.history.length - 1];
  const previousHistory = state.history.slice(0, -1);
  const previousState = applyPatch(state, lastAction.patch);
  return {
    ...previousState,
    history: previousHistory,
  };
}


const history = {
  getHistoryItem,
  getPreviousState
};

module.exports = history;