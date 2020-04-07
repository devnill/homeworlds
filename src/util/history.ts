import {State, ActionName, ActionArgs, History} from '../types/index.d';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const createPatch = require('json-patch-gen');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonpatch = require('jsonpatch');
const applyPatch = jsonpatch.apply_patch;

import {omit} from 'lodash';

function add(initialState: State, updatedState: State, action: ActionName, args: ActionArgs): History {
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

function revert(state: State): State {
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