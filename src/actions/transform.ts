import { bank, find, history } from "../util/index";
import { State, ActionArgs } from "../types";

const { returnToBank, getEmptyBank } = bank;

const { findSystem, findShip } = find;

function transform(state: State, args: ActionArgs): State {
  const { board, bank } = state;
  const { ship, system, color } = args;
  if (!color || !system || !ship) {
    return state;
  }

  const [targetSystem, otherSystems] = findSystem(board, system);

  if (!targetSystem) {
    return state;
  }

  const [targetShip, otherShips] = findShip(targetSystem.ships, ship);

  if (!targetShip) {
    return state;
  }

  // update bank
  const bankDelta = getEmptyBank();
  bankDelta[targetShip.color][targetShip.size - 1]++;
  bankDelta[color][targetShip.size - 1]--;
  const updatedBank = returnToBank(bank, bankDelta);

  // update system
  const transformedShip = Object.assign({}, targetShip, { color });
  const updatedSystem = Object.assign({}, targetSystem, {
    ships: [...otherShips, transformedShip],
  });

  // update state
  const updatedState = history.add(
    state,
    Object.assign({}, state, {
      bank: updatedBank,
      board: [...otherSystems, updatedSystem],
    }),
    "TRANSFORM",
    args
  );
  return updatedState;
}
export default transform;
