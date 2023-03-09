import build from "./build";
import move from "./move";
import attack from "./attack";
import transform from "./transform";
import catastrophe from "./catastrophe";
import sacrificeStart from "./sacrificeStart";
import sacrifice from "./sacrifice";
import concede from "./concede";
import endTurn from "./endTurn";
import chooseHomeworld from "./chooseHomeworld";
import { Action, ActionArgs, State } from "../types";

export default {
  BUILD: build,
  MOVE: move,
  ATTACK: attack,
  TRANSFORM: transform,
  CATASTROPHY: catastrophe,
  SACRIFICE_START: sacrificeStart,
  SACRIFICE: sacrifice,
  CONCEDE: concede,
  END_TURN: endTurn,
  CHOOSE_HOMEWORLD: chooseHomeworld,
} as Record<Action, (state: State, args: ActionArgs) => State>;
