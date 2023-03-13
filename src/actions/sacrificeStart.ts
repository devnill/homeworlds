import { State, ActionArgs } from "../types";
import { find, bank, history } from "../util/index";

const { returnPiecesToBank } = bank;

const { findSystem, findShip } = find;

function sacrificeStart(state: State, args: ActionArgs): State {
  const { board, bank } = state;
  const { ship, system } = args;
  if (!system || !ship) {
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
  if (!otherShips.length && typeof targetSystem.isHomeworldFor != "number") {
    // this is an empty, non-homeworld system
    const updatedBank = returnPiecesToBank(bank, [
      ...targetSystem.stars,
      ...targetSystem.ships,
    ]);
    // create new state;
    const updatedState = history.add(
      state,
      Object.assign({}, state, {
        board: otherSystems,
        bank: updatedBank,
        turn: {
          sacrifice: {
            color: targetShip.color,
            count: targetShip.size,
          },
        },
      }),
      "SACRIFICE_START",
      args
    );
    return updatedState;
  } else {
    // just the ship
    const updatedBank = returnPiecesToBank(bank, [targetShip]);
    const updatedSystem = Object.assign({}, targetSystem, {
      ships: targetSystem.ships.filter(
        (targetShip) => targetShip.id !== ship.id
      ),
    });
    // create new state;
    //const updatedState = history.add(
    //  state,
    //  Object.assign({}, state, {
    //    board: [...otherSystems, updatedSystem],
    //    bank: updatedBank,
    //    turn: {
    //      sacrifice: {
    //        color: targetShip.color,
    //        count: targetShip.size,
    //      },
    //    },
    //  }),
    //  "SACRIFICE_START",
    //  args
    //);
    const updatedState = Object.assign({}, state, {
      board: [...otherSystems, updatedSystem],
      bank: updatedBank,
      turn: {
        sacrifice: {
          color: targetShip.color,
          count: targetShip.size,
        },
      },
    });
    return updatedState;
  }
}
export default sacrificeStart;
