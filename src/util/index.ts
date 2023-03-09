import bank from "./bank";
import find from "./find";
import history from "./history";
import normalize from "./normalize";
import { State, PlayerId } from "../types";

function initState(players: [PlayerId, PlayerId]): State {
  return {
    bank: bank.createBank(),
    board: [],
    players: [players[0], players[1]],
    activePlayer: 0,
    history: [],
  };
}

const util = {
  initState,
  bank,
  history,
  normalize,
  find,
};

export { initState, bank, history, normalize, find };

export default util;
