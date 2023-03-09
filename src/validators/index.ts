import { State, Action, ActionArgs, ErrorMessage } from "../types";
import basic from "./basic";
import attack from "./attack";
import build from "./build";
import catastrophe from "./catastrophe";
import chooseHomeworld from "./chooseHomeworld";
import concede from "./concede";
import endTurn from "./endTurn";
import move from "./move";
import sacrifice from "./sacrifice";
import sacrificeStart from "./sacrificeStart";
import transform from "./transform";
import player from "./player";

const validators: Record<
  string,
  (state: State, args: ActionArgs) => ErrorMessage
> = {
  basic,
  attack,
  build,
  catastrophe,
  chooseHomeworld,
  concede,
  endTurn,
  move,
  sacrifice,
  sacrificeStart,
  transform,
  //player,
};

const types = [
  "attack",
  "build",
  "catastrophe",
  "chooseHomeworld",
  "concede",
  "endTurn",
  "move",
  "sacrifice",
  "sacrificeStart",
  "transform",
];

// todo
function action(state: State, action: Action, args: ActionArgs): ErrorMessage {
  //if (types.indexOf(action) === -1) {
  //  return "invalid action";
  //}
  if (
    !validators.hasOwnProperty(action) ||
    typeof validators[action] !== "function"
  ) {
    return "invalid action";
  }
  return validators[action](state, args);
}

export {
  basic,
  attack,
  build,
  catastrophe,
  chooseHomeworld,
  concede,
  endTurn,
  move,
  sacrifice,
  sacrificeStart,
  transform,
  action,
  player,
};

export default {
  ...validators,
  action,
};
