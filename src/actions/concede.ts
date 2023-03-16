import { State, ActionArgs } from "../types";
import {  updateTurn } from "../util/index";

function concede(state: State, args: ActionArgs): State {
  //const updatedState = history.add(state, state, "CONCEDE", args);
  //todo
  const updatedState = {
    ...state,
  };

  return updateTurn(state, updatedState, {action: 'CONCEDE', args}) 

  //return updatedState;
}

export default concede;
