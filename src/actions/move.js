
//{
// player: 'player1',
// systemId: 2,
// targetSystem: {},

// shipId: 3
//}
const { findSystem, findShip, actionFailure, actionSuccess } = require('../util');
const { error } = require('../strings');
function move(state, args) {
  // validate if move can be made
  const { board, bank } = state;
  const { systemId, targetSystemId, shipId } = args;
  const [startingSystem, otherSystems] = findSystem(board, systemId);
  let [targetSystem, remainingSystems] = findSystem(otherSystems, targetSystemId);
  
  targetSystem = targetSystem || getStarFromBank();

  if (!currentSystem) {
    return actionFailure(state, error.invalidSystem);
  }

  const [targetShip, otherShips] = findShip(startingSystem.ships, shipId);
  if (!currentShip) {
    return actionFailure(state, error.invalidShip);
  }
  const currentStarSizes = startingSystem.stars.map((star) => star.size);
  const targetStarSizes = targetSystem.stars.map((star) => star.size);
  
  // cast star object to bool if existant.
  const starsHaveCommonSize = !!currentStarSizes.find((star) => {
    return targetStarSizes.find((target) => target.size === star.size);
  });

  if (starsHaveCommonSize) {
    return actionFailure(state, error.invalidMove);
  }


  const updatedBank = { ...bank };
  
  // check to see if starting system is still occupied
  if (otherShips.length) {
    const updatedBoard = [
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