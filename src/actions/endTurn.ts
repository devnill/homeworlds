import { omit } from "lodash";
import { history, updateTurn } from "../util/index";
import { State, ActionArgs } from "../types";

function endTurn(state: State, args: ActionArgs): State {
  //const updatedState = history.add(
  //  state,
  //  Object.assign({}, omit(state, ["turn"]), {
  //    activePlayer: (state.activePlayer + 1) % state.players.length,
  //  }),
  //  "END_TURN",
  //  args
  //);
  //todo
  const updatedState = Object.assign({}, omit(state, ["turn"]), {
    activePlayer: (state.activePlayer + 1) % state.players.length,
  });
  //return updatedState;
  return updateTurn(state, updatedState, {action: 'END_TURN', args}) 

}

export default endTurn;
