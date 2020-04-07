import { find, bank, history } from '../util/';

const {
  returnPiecesToBank,
} = bank;

const {  findSystem,
  findShip,
} = find;

function sacrificeStart(state, args) {
  const { board, bank } = state;
  const { ship, system } = args;
  const [targetSystem, otherSystems] = findSystem(board, system);
  const [targetShip, otherShips] = findShip(targetSystem.ships, ship);
  if (!otherShips.length && typeof targetSystem.homeworldFor != 'number') {
    // this is an empty, non-homeworld system    
    const updatedBank = returnPiecesToBank(bank, [...targetSystem.stars, ...targetSystem.ships]);
    // create new state;
    const updatedState = history.add(state, Object.assign({}, state, {
      board: otherSystems,
      bank: updatedBank,
      turn: {
        sacrifice: {
          color: targetShip.color,
          count: targetShip.size
        }
      }
    }), 'sacrificeStart', args);
    return updatedState;

  } else {
    // just the ship
    const updatedBank = returnPiecesToBank(bank, [targetShip]);
    const updatedSystem = Object.assign({},targetSystem, {
      ships: targetSystem.ships.filter((targetShip) => targetShip.id !== ship.id)
    });
    // create new state;
    const updatedState = history.add(state, Object.assign({}, state, {
      board: [...otherSystems, updatedSystem],
      bank: updatedBank,
      turn: {
        sacrifice: {
          color: targetShip.color,
          count: targetShip.size
        }
      }
    }), 'sacrificeStart', args);
    return updatedState;
  }

}
export default sacrificeStart;