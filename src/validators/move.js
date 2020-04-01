
//{
// player: 'player1',
// from: System
// to: System,
// ship: Ship
//}

const {
  find,
  bank,
} = require('../util/');

const {
  createSystem
} = bank;

const { findSystem,
  findShip,
} = find;

const { error } = require('../strings');

function move(state, args) {
  // validate if move can be made
  const { board, bank } = state;
  const { from, to, ship } = args;
  const [startSystem, otherSystems] = findSystem(board, from);
  
  // validate starting system exists
  // todo move validation
  if (!startSystem) {
    return error.invalidSystem;
  }

  // find the ship we are trying to move
  const [targetShip] = findShip(startSystem.ships, ship);

  // fail if target ship is not in the starting system
  if (!targetShip) {
    return error.invalidShip;
  }

  // see if we can find the destination system
  let [endSystem] = findSystem(otherSystems, to);

  // if not, attempt to create one
  if(!endSystem){
    const [newSystem] = createSystem(bank, to);

    if(!newSystem) {
      return error.invalidSystem;
    } else {
      endSystem = newSystem;
    }
  }

  const startStarSizes = startSystem.stars.map((star) => star.size);
  const endStarSizes = endSystem.stars.map((star) => star.size);

  // cast star object to bool if existant.
  const starsHaveCommonSize = !!startStarSizes.find((startStarSize) => {
    return endStarSizes.find((targetSize) => targetSize === startStarSize);
  });

  if (starsHaveCommonSize) {
    return error.invalidMove;
  }
  return null;
  
}

module.exports = move;
