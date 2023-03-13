import validate from "../validators/";
import actions from "../actions/";
import { Action, ActionArgs, PlayerId, State, System, Piece } from "../types";

interface ActionResult {
  err?: string | null;
  state: State;
}

export function performAction(
  state: State,
  action: Action,
  args: ActionArgs
): ActionResult {
  const err = validate.action(state, action, args);
  const result = {
    err: err || null,
    state: err ? state : actions[action](state, args),
  };
  return result;
}

function canPlay(state: State): boolean {
  const userId = state.user?.id;
  const activePlayer = state.players[state.activePlayer];
  return userId === activePlayer;
}

export function canMove(state: State): boolean {
  // find a system with the yellow ability + system with
  return false;
}

export function getValidActions(state: State): Record<Action, boolean> {
  const actions: Record<Action, boolean> = {
    MOVE: canMove(state),
    ATTACK: false,
    BUILD: false,
    CATASTROPHY: false,
    CHOOSE_HOMEWORLD: false,
    CONCEDE: false,
    END_TURN: false,
    SACRIFICE: false,
    SACRIFICE_START: false,
    TRANSFORM: false,
  };
  return actions;
}

//canBuild,
//canMove,
//canAttack,
//canTransform,
//canCatastrophe,
//canSacrificeStart,
//canSacrifice,
//canConcede,
//canEndTurn,
//canChooseHomeworld()

export default {
  performAction,
};
