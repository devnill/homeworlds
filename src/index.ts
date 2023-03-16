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

function prepareState(state: State): State {
  const turn = {
    actions:[]
  }
  return {
    ...state,
    turn
  }
}

function performAction(
  state: State,
  action: Action,
  args: ActionArgs
): { err: ErrorMessage; state: State } {

  // TODO- Unhandled cases:
  // Concede on other players turn
  // Switching turn to other player
  // taking multiple actions in a turn (sacrifices, action+catastrophy, etc)
  // win conditions
  const err = validate.action(state, action, args);
  if (err) {
    return {
      err,
      state,
    };
  }
  const preparedState = prepareState(state)
  const resultingState = actions[action](preparedState, args)
  return {
    err: null,
    state: resultingState,
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
