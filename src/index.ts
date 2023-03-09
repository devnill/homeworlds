import {
  State,
  Star,
  System,
  Ship,
  ActionArgs,
  ErrorMessage,
  Action,
} from "./types";

import { normalize, initState } from "./util/index";
import validate from "./validators/index";
import actions from "./actions/index";

function performAction(
  state: State,
  action: Action,
  args: ActionArgs
): { err: ErrorMessage; state: State } {
  const err = validate.action(state, action, args);
  if (err) {
    return {
      err,
      state,
    };
  }
  return {
    err: null,
    state: actions[action](state, args),
  };
}

const create = {
  ship(args: Ship): Ship {
    return normalize.ship(args);
  },
  star(args: Star): Star {
    return normalize.star(args);
  },
  system(args: System): System {
    return normalize.system(args);
  },
  state: initState,
};

export {
  create,
  validate,
  performAction, //,
  // util
};
