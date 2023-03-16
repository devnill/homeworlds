import { State, ActionArgs, Turn } from "../types";

import { history, updateTurn } from "../util/index";
import RED from "./attack";
import BLUE from "./transform";
import GREEN from "./build";
import YELLOW from "./move";

const colorActions = {
  RED,
  BLUE,
  GREEN,
  YELLOW,
};

function sacrifice(state: State, args: ActionArgs): State {
  const { color } = args;
  if (!color) {
    return state;
  }
  const sacrificeState = state.turn?.sacrifice;
  if (!sacrificeState) {
    return state;
  }
  const result = colorActions[color](state, args);
  //const updatedState = history.add(
  //  state,
  //  Object.assign({}, result, {
  //    turn: {
  //      sacrifice: {
  //        count: sacrificeState.count - 1,
  //        color: sacrificeState.color,
  //      },
  //    },
  //  }),
  //  "SACRIFICE",
  //  args
  //);
  const turn: Turn = state.turn || {actions: []}
  const updatedState = Object.assign({}, result, {
    turn: {
      ...turn,
      sacrifice: {
        count: sacrificeState.count - 1,
        color: sacrificeState.color,
      },
    },
  });
  //return updatedState;
  return updateTurn(state, updatedState, {action: 'SACRIFICE', args}) 

}

export default sacrifice;
