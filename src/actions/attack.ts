import { State, ActionArgs, System, Ship } from "../types";
import { find, history } from "../util/index";

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

  const updatedState = history.add(
    state,
    {
      ...state,
      board: [...otherSystems, updatedSystem],
    },
    "ATTACK",
    args
  );
  return updatedState;
}

export default attack;
