import bank from "./bank";
import find from "./find";
import history from "./history";
import normalize from "./normalize";
import { State, PlayerId, Action, Turn, ActionArgs, TurnAction } from "../types";
import { compare } from "fast-json-patch";

function initState(players: [PlayerId, PlayerId]): State {
  return {
    bank: bank.createBank(),
    board: [],
    players: [players[0], players[1]],
    activePlayer: 0,
    history: [],
  };
}

function updateTurn(state: State, updatedState: State, turnAction: TurnAction){
  const turn: Turn = state.turn || {actions: []};
  const {action, args} = turnAction
  turn.actions=[...turn.actions, [action, args, compare(state, updatedState)]]
  return {
    ...updatedState, 
    turn
  }
}

const util = {
  initState,
  bank,
  history,
  normalize,
  find,
  updateTurn
};

export { initState, bank, history, normalize, find, updateTurn };

export default util;
