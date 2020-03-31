const {
  find,
  history
} = require('../util/');


const {
  findSystem,
  findShip
} = find;


function attack(state, args) {
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

module.exports = attack;