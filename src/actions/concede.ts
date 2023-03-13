import { State, ActionArgs } from "../types";
import { history } from "../util/index";

function concede(state: State, args: ActionArgs): State {
  //const updatedState = history.add(state, state, "CONCEDE", args);
  //todo
  const updatedState = {
    ...state,
  };
  return updatedState;
}

export default concede;
