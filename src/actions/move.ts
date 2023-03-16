import { find, bank, updateTurn } from "../util/index";
import { State, ActionArgs, Board } from "../types";

const { returnPiecesToBank, createSystem } = bank;

const { findSystem, findShip } = find;

function move(state: State, args: ActionArgs): State {
  // validate if move can be made
  const { board, bank } = state;
  const { from, to, ship } = args;
  if (!from || !to || !ship) {
    return state;
  }
  const [startSystem, otherSystems] = findSystem(board, from);
  if (!startSystem) {
    return state;
  }
  let updatedBank = bank;

  // find the ship we are trying to move
  const [targetShip, otherShips] = findShip(startSystem.ships, ship);
  if (!targetShip) {
    return state;
  }
  // see if we can find the destination system
  const [targetEndSystem, remainingSystems] = findSystem(otherSystems, to);
  let endSystem = targetEndSystem;

  // if not, attempt to create one
  if (endSystem === null) {
    const [newSystem, newBank] = createSystem(bank, to);
    if (!newSystem) {
      return state;
    }
    endSystem = newSystem;
    updatedBank = newBank;
  }

  // check to see if starting system is still occupied
  if (otherShips.length) {
    const updatedBoard: Board = [
      ...remainingSystems,
      {
        ...endSystem,
        ships: [...endSystem.ships, targetShip],
      },
      {
        ...startSystem,
        ships: [...otherShips],
      },
    ];
    
    return updateTurn(state, { ...state, bank: updatedBank, board: updatedBoard }, {action: 'MOVE', args}) 

  } else {
    // otherwise, return system to bank
    const updatedBank = returnPiecesToBank(bank, startSystem.stars);
    if (!updatedBank) {
      return state;
    }
    const updatedBoard = [
      ...remainingSystems,
      {
        ...endSystem,
        ships: [...endSystem.ships, targetShip],
      },
    ];
    //const updatedState = history.add(
    //  state,
    //  { ...state, bank: updatedBank, board: updatedBoard },
    //  "MOVE",
    //  args
    //);
    const updatedState = { ...state, bank: updatedBank, board: updatedBoard };

    //return updatedState;
    return updateTurn(state, updatedState, {action: 'MOVE', args}) 

  }
}

export default move;
