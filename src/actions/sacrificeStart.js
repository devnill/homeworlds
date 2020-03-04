const {
  standardValidation,
  countPieces,
  //  countPiecesOfColor,
  getUpdatedBank,
  actionSuccess,
  actionFailure
} = require('../util.js');
const _ = require('lodash');
const { error } = require('../strings.js');

function sacrificeStart(state, args) {

  const validationError = standardValidation(state, args);
  if (validationError) {
    return actionFailure(state, validationError);
  }

  const { shipId, systemId } = args;
  const [otherSystems, targetSystems] = _.partition(state.board, (system) => system.id !== systemId);
  if (targetSystems.length !== 1) {
    return actionFailure(state, error.invalidSystem);
  }

  const targetSystem = targetSystems[0];
  const targetShip = targetSystem.ships.find((ship) => ship.id === shipId);
  if (!targetShip) {
    return actionFailure(state, error.invalidShip);
  }
  if (targetSystem.ships.length === 1 && typeof targetSystem.homeworldFor != 'number') {
    // kill the star too

    const piecesToReturn = countPieces([...targetSystem.stars, ...targetSystem.ships]);
    const updatedBank = getUpdatedBank(state, piecesToReturn);

    const updatedHistory = [...state.history, { systems: [targetSystem], args, action: 'sacrificeStart' }];
    // create new state;
    return actionSuccess(Object.assign({}, state, {
      board: otherSystems,
      bank: updatedBank,
      history: updatedHistory,
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
      ships: targetSystem.ships.filter((ship) => ship.id !== shipId)
    });
    const updatedHistory = [...state.history, { systems: [targetSystem], args, action: 'sacrificeStart' }];
    // create new state;
    return actionSuccess(Object.assign({}, state, {
      board: [...otherSystems, updatedSystem],
      bank: updatedBank,
      history: updatedHistory,
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