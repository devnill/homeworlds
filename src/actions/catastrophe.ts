import { State, ActionArgs } from "../types";
import { partition } from "lodash";
import { find, bank, history } from "../util/index";

const { findSystem } = find;

const { returnPiecesToBank } = bank;

function catastrophe(state: State, args: ActionArgs): State {
  const { board, bank } = state;
  const { system, color } = args;
  if (!system || !color) {
    return state;
  }
  const [targetSystem, otherSystems] = findSystem(board, system);
  if (!targetSystem) {
    return state;
  }
  // we can catastrophe. remove pieces from system
  const [removedStars, remainingStars] = partition(
    targetSystem.stars,
    (star) => star.color === color
  );
  const [removedShips, remainingShips] = partition(
    targetSystem.ships,
    (ship) => ship.color === color
  );
  if (remainingStars.length === 0 || remainingShips.length === 0) {
    // remove all pieces and return to bank
    const updatedBank = returnPiecesToBank(bank, [
      ...targetSystem.stars,
      ...targetSystem.ships,
    ]);
    // const updatedHistory = [...state.history, { systems: [targetSystem], args, action: 'catastrophe' }];
    // create new state;
    const updatedState = history.add(
      state,
      Object.assign({}, state, {
        board: otherSystems,
        bank: updatedBank,
      }),
      "CATASTROPHY",
      args
    );
    return updatedState;
  } else {
    const updatedBank = returnPiecesToBank(bank, [
      ...removedStars,
      ...removedShips,
    ]);
    const updatedSystem = Object.assign({}, targetSystem, {
      stars: remainingStars,
      ships: remainingShips,
    });
    const updatedBoard = [...otherSystems, updatedSystem];
    // const updatedHistory = [...state.history, { args, action: 'catastrophe', systems: [targetSystem] }];

    //const updatedState = history.add(
    //  state,
    //  Object.assign({}, state, {
    //    board: updatedBoard,
    //    bank: updatedBank,
    //  }),
    //  "CATASTROPHY",
    //  args
    //);

    const updatedState = Object.assign({
      ...state,
      board: updatedBoard,
      bank: updatedBank,
    });
    return updatedState;
    // TODO:
    ///system is not destroyed. handle it.
    //const piecesToReturn = countPieces([...targetSystem.stars, ...targetSystem.ships]);
    //updatedBank = returnToBank(bank, piecesToReturn);
    //updatedBoard = state.board.filter((targetSystem) => targetSystem.id !== system.id)
  }
}

export default catastrophe;
