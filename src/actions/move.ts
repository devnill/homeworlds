import { find, bank, history } from '../util/index';
import {State, ActionArgs} from '../types/index.d';

const {
  returnPiecesToBank,
  createSystem
} = bank;

const { findSystem,
  findShip,
} = find;

function move(state: State, args: ActionArgs): State{
  // validate if move can be made
  const { board, bank } = state;
  const { from, to, ship } = args;
  const [startSystem, otherSystems] = findSystem(board, from);
  let updatedBank = bank;


  // find the ship we are trying to move
  const [targetShip, otherShips] = findShip(startSystem.ships, ship);

  // see if we can find the destination system
  let [endSystem, remainingSystems] = findSystem(otherSystems, to);

  // if not, attempt to create one
  if(!endSystem){
    const [newSystem, newBank] = createSystem(bank, to);
    endSystem = newSystem;
    updatedBank = newBank;
  }

  // check to see if starting system is still occupied
  if (otherShips.length) {
    const updatedBoard = [
      ...remainingSystems,
      {
        ...endSystem,
        ships: [
          ...endSystem.ships,
          targetShip
        ]
      },
      {
        ...startSystem,
        ships: [...otherShips]
      }
    ];
    const updatedState = history.add(state, { ...state, bank: updatedBank, board: updatedBoard }, 'move', args);
    return updatedState;
  } else {
    // otherwise, return system to bank
    const updatedBank = returnPiecesToBank(bank, startSystem.stars);
    const updatedBoard = [
      ...remainingSystems,
      {
        ...endSystem,
        ships: [
          ...endSystem.ships,
          targetShip
        ]
      }
    ];
    const updatedState = history.add(state, updatedState, 'move', args);
    return { ...state, bank: updatedBank, board: updatedBoard };
  }
}

export default move;
