const createPatch = require('json-patch-gen');
const applyPatch = require('jsonpatch').apply_patch;
const _ = require('lodash');

function add(initialState, updatedState, action, args) {
  const patch = createPatch(_.omit(updatedState, ['history']), _.omit(initialState,'history'));
  return [...initialState.history, {
    action,
    args,
    patch
  }];
}

function revert(state) {
  const lastAction = state.history[state.history.length - 1];
  const previousHistory = state.history.slice(0, -1);
  const previousState = applyPatch(state, lastAction.patch);
  return {
    ...previousState,
    history: previousHistory,
  };
}


const history = {
  add,
  revert
};

module.exports = history;