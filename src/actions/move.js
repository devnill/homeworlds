
//{
// player: 'player1',
// from: System
// to: System,
// ship: Ship
//}
const { findSystem, findShip, actionFailure, actionSuccess, getStarFromBank } = require('../util');
const { error } = require('../strings');
function move(state, args) {
  // validate if move can be made
  const { board, bank } = state;
  const { from, to, ship } = args;
  const [startSystem, otherSystems] = findSystem(board, from);
  
  // validate starting system exists 
  // todo move validation
  if (!startSystem) {
    return actionFailure(state, error.invalidSystem);
  }

  let [endSystem, remainingSystems] = findSystem(otherSystems, to);  
  endSystem = endSystem || getStarFromBank();

  const [targetShip, otherShips] = findShip(startSystem.ships, ship);
  if (!targetShip) {
    return actionFailure(state, error.invalidShip);
  }
  const startStarSizes = startSystem.stars.map((star) => star.size);
  const endStarSizes = endSystem.stars.map((star) => star.size);
  
  // cast star object to bool if existant.
  const starsHaveCommonSize = !!startStarSizes.find((star) => {
    return endStarSizes.find((target) => target.size === star.size);
  });

  if (starsHaveCommonSize) {
    return actionFailure(state, error.invalidMove);
  }


  // check to see if starting system is still occupied
  if (otherShips.length) {
    const updatedBoard = [
      ...remainingSystems,
      {
        ...startSystem,
        ships: [...otherShips]
      },
      {
        ...endSystem,
        ships: [
          ...endSystem.ships,
          targetShip
        ]
      }
    ];
    const updatedState = { ...state, board: updatedBoard };
  }
  // otherwise, return system to bank
  const updatedBank = returnSystemToBank(bank, {
    ...startingSystem,
    ships: []
  });
  const updatedSystems = [
    ...remainingSystems,
    {
      ...startingSystem,
      ships: [...otherShips]
    },
    {
      ...targetSystem,
      ships: [
        ...targetSystem.ships,
        targetShip
      ]
    }
  ];
    
  // pull out relevant systems from board object
  // remove ship from first system and add to targed
  // remove target system if empty and not homeworld

}

module.exports = move;