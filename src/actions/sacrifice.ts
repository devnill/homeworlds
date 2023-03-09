import { State, ActionArgs } from "../types";

import { history } from "../util/index";
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
  const updatedState = history.add(
    state,
    Object.assign({}, result, {
      turn: {
        sacrifice: {
          count: sacrificeState.count - 1,
          color: sacrificeState.color,
        },
      },
    }),
    "SACRIFICE",
    args
  );
  return updatedState;
}

export default sacrifice;