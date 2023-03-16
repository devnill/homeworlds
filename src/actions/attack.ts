import { State, ActionArgs, System, Ship, Turn } from "../types";
import { find, updateTurn } from "../util/index";
import {compare as diff} from "fast-json-patch"

const { findSystem, findShip } = find;

function attack(state: State, args: ActionArgs): State {
  const { board } = state;
  const { system, ship, player } = args;
  if (ship === undefined || system === undefined) {
    return state;
  }
  const [targetSystem, otherSystems] = findSystem(board, system);
  if (targetSystem === null) {
    return state;
  }
  const [targetShip, otherShips] = findShip(targetSystem.ships, ship);
  if (!targetShip) {
    return state;
  }
  const updatedShip: Ship = { ...targetShip, owner: player };
  const updatedSystem: System = {
    ...targetSystem,
    ships: [...otherShips, updatedShip],
  };

  //const updatedState = history.add(
  //  state,
  //  {
  //    ...state,
  //    board: [...otherSystems, updatedSystem],
  //  },
  //  "ATTACK",
  //  args
  //);
  const updatedBoard = [...otherSystems, updatedSystem];
  const updatedState = {...state, board: updatedBoard}
  return updateTurn(state, updatedState, {action: 'ATTACK', args}) 
  
}

export default attack;
