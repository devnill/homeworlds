//import { State, Action, ActionArgs } from "../types";
//import createPatch from "json-patch-gen";
//import jsonpatch from "jsonpatch";
//
//const applyPatch = jsonpatch.apply_patch;
//
//import { omit } from "lodash";
//
//function add(
//  initialState: State,
//  updatedState: State,
//  action: Action,
//  args: ActionArgs
//): State {
//  const patch = createPatch(
//    omit(updatedState, ["history"]),
//    omit(initialState, "history")
//  );
//  return {
//    ...updatedState,
//    history: [
//      ...initialState.history,
//      {
//        action,
//        args,
//        patch,
//      },
//    ],
//  };
//}
//
//function revert(state: State): State {
//  const lastAction = state.history[state.history.length - 1];
//  const previousHistory = state.history.slice(0, -1);
//  const previousState = applyPatch(state, lastAction[2]);
//  return {
//    ...previousState,
//    history: previousHistory,
//  };
//}
//
//const history = {
//  add,
//  revert,
//};
//
//export default history;
