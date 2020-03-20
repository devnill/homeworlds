
//{
// player: 'player1',
// from: System
// to: System,
// ship: Ship
//}

const {
  find,
  bank,
  action
} = require('../util/');

const {
  returnPiecesToBank,
  createSystem
} = bank;

const {
  actionFailure,
  actionSuccess
} = action;

const { findSystem,
  findShip,
} = find;

const { error } = require('../strings');

function move(state, args) {
  // validate if move can be made
  const { board, bank } = state;
  const { from, to, ship } = args;
  const [startSystem, otherSystems] = findSystem(board, from);
  let updatedBank = bank;

  // validate starting system exists
  // todo move validation
  if (!startSystem) {
    return actionFailure(state, error.invalidSystem);
  }

  // find the ship we are trying to move
  const [targetShip, otherShips] = findShip(startSystem.ships, ship);

  // fail if target ship is not in the starting system
  if (!targetShip) {
    return actionFailure(state, error.invalidShip);
  }

  // see if we can find the destination system
  let [endSystem, remainingSystems] = findSystem(otherSystems, to);

  // if not, attempt to create one
  if(!endSystem){
    let [newSystem, newBank] = createSystem(bank, to)

    if(!newSystem) {
      return actionFailure(state, error.invalidSystem);
    } else {
      endSystem = newSystem;
      updatedBank = newBank;
    }
  }

  const startStarSizes = startSystem.stars.map((star) => star.size);
  const endStarSizes = endSystem.stars.map((star) => star.size);

  // cast star object to bool if existant.
  const starsHaveCommonSize = !!startStarSizes.find((startStarSize) => {
    return endStarSizes.find((targetSize) => targetSize === startStarSize);
  });

  if (starsHaveCommonSize) {
    return actionFailure(state, error.invalidMove);
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
    return actionSuccess({ ...state, bank: updatedBank, board: updatedBoard });
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

    return actionSuccess({ ...state, bank: updatedBank, board: updatedBoard });
  }
}

module.exports = move;
