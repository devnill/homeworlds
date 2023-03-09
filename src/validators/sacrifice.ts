import { State, ErrorMessage, ActionArgs } from "../types";

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

import { error } from "../strings";

function sacrifice(state: State, args: ActionArgs): ErrorMessage {
  const { color } = args;
  if (!color) {
    return error.invalidActionArguments;
  }
  if (["red", "blue", "green", "yellow"].indexOf(color) === -1) {
    return error.invalidAction;
  }
  // TODO make this a little less awful.
  const sacrificeState = state.turn?.sacrifice;
  if (!sacrificeState) {
    return error.invalidAction;
  }
  if (sacrificeState.count <= 0) {
    return error.sacrificeCountExceeded;
  }
  if (sacrificeState.color !== color) {
    return error.wrongSacrificeType;
  }

  //validate other moves
  const err = colorActions[color](state, args);
  if (err) {
    return err;
  }
  return null;
}

export default sacrifice;
