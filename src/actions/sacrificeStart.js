const {
  standardValidation,
  countPieces,
  findSystem,
  findShip,
  getUpdatedBank,
  actionSuccess,
  actionFailure
} = require('../util.js');

const { error } = require('../strings.js');

function sacrificeStart(state, args) {
  // todo move validation
  const validationError = standardValidation(state, args);
  if (validationError) {
    return actionFailure(state, validationError);
  }
  const { board } = state;
  const { ship, system } = args;
  const [targetSystem, otherSystems] = findSystem(board, system);
  if (!targetSystem) {
    return actionFailure(state, error.invalidSystem);
  }
  const [targetShip, otherShips] = findShip(targetSystem.ships, ship);
  if (!targetShip) {
    return actionFailure(state, error.invalidShip);
  }
  // empty systems should be immediately returned to the bank unless it is a homeworld.
  if (!otherShips.length && typeof targetSystem.homeworldFor != 'number') {
    // this is an empty, non-homeworld system
    // todo create util.returnToBank?
    const piecesToReturn = countPieces([...targetSystem.stars, ...targetSystem.ships]);
    const updatedBank = getUpdatedBank(state, piecesToReturn);
    // const updatedHistory = [...state.history, { systems: [targetSystem], args, action: 'sacrificeStart' }];
    // create new state;
    return actionSuccess(Object.assign({}, state, {
      board: otherSystems,
      bank: updatedBank,
      //history: updatedHistory,
      turn: {
        sacrifice: {
          color: targetShip.color,
          count: targetShip.size
        }
      }
    }));

  } else {
    // just the ship
    const piecesToReturn = countPieces([targetShip]);
    const updatedBank = getUpdatedBank(state, piecesToReturn);
    const updatedSystem = Object.assign({},targetSystem, {
      ships: targetSystem.ships.filter((targetShip) => targetShip.id !== ship.id)
    });
    // const updatedHistory = [...state.history, { systems: [targetSystem], args, action: 'sacrificeStart' }];
    // create new state;
    return actionSuccess(Object.assign({}, state, {
      board: [...otherSystems, updatedSystem],
      bank: updatedBank,
      //history: updatedHistory,
      turn: {
        sacrifice: {
          color: targetShip.color,
          count: targetShip.size
        }
      }
    }));
  }

}
module.exports = sacrificeStart;