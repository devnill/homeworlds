import { State, ActionArgs } from '../types/index';
import { find, history } from '../util/';


const {
  findSystem,
  findShip
} = find;


function attack(state: State, args: ActionArgs): State {
  const { board } = state;
  const { system, ship, player} = args;
  const [targetSystem, otherSystems] = findSystem(board, system);
  const [targetShip, otherShips] = findShip(targetSystem.ships, ship);
  const updatedShip = { ...targetShip, owner: player };
  const updatedSystem = {
    ...targetSystem,
    ships: [...otherShips, updatedShip]
  };
  
  const updatedState = history.add(state, { 
    ...state, 
    board: [...otherSystems, updatedSystem]
  },'attack', args);
  return updatedState;
}

export default attack;