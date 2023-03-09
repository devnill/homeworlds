import { State, ActionArgs } from "../types";
import { normalize } from "../util/index";

import util from "../util/index";
const { history } = util;
const { findSystem } = util.find;
const { takeFromBank, countPieces } = util.bank;

function build(state: State, args: ActionArgs): State {
  const { board, bank } = state;
  const { system, color, player } = args;
  if (!system || !color || !player) {
    return state;
  }
  const [targetSystem, otherSystems] = findSystem(board, system);
  if (!targetSystem) {
    return state;
  }
  //todo move to validators
  const smallestSize = bank[color].findIndex((size) => size > 0) + 1;
  const ship = normalize.ship({
    owner: player,
    color,
    size: smallestSize,
  });
  const updatedBank = takeFromBank(bank, countPieces([ship]));
  if (!updatedBank) {
    return state;
  }
  const updatedBoard = [
    ...otherSystems,
    {
      ...targetSystem,
      ships: [...targetSystem.ships, ship],
    },
  ];
  const updatedState = history.add(
    state,
    {
      ...state,
      board: updatedBoard,
      bank: updatedBank,
    },
    "ATTACK",
    args
  );
  return updatedState;
}
export default build;
