import createPatch from 'json-patch-gen';
const jsonpatch = require('jsonpatch');
console.log(jsonpatch)
console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')
const applyPatch = jsonpatch.apply_patch;

import {omit} from 'lodash';

function add(initialState, updatedState, action, args) {
  const patch = createPatch(omit(updatedState, ['history']), omit(initialState,'history'));
  return {
    ...updatedState,
    history: [...initialState.history, {
      action,
      args,
      patch
    }]
  };
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

export default history;