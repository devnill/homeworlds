const {
  find,
  action,
  bank,
  history
} = require('../util/');

//todo this should be outside actions
const {  standardValidation }= require('../validators'); 

const {  actionSuccess,
  actionFailure
} = action;

const {
  returnPiecesToBank,
} = bank;

const {  findSystem,
  findShip,
} = find;

const { error } = require('../strings');

function sacrificeStart(state, args) {
  // todo move validation
  const validationError = standardValidation(state, args);
  if (validationError) {
    return actionFailure(state, validationError);
  }
  const { board, bank } = state;
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
    
    const updatedBank = returnPiecesToBank(bank, [...targetSystem.stars, ...targetSystem.ships]);
    // const updatedHistory = [...state.history, { systems: [targetSystem], args, action: 'sacrificeStart' }];
    // create new state;
    const updatedState = history.add(state, Object.assign({}, state, {
      board: otherSystems,
      bank: updatedBank,
      //history: updatedHistory,
      turn: {
        sacrifice: {
          color: targetShip.color,
          count: targetShip.size
        }
      }
    }), 'sacrificeStart', args);

    return actionSuccess(updatedState);

  } else {
    // just the ship
    const updatedBank = returnPiecesToBank(bank, [targetShip]);
    const updatedSystem = Object.assign({},targetSystem, {
      ships: targetSystem.ships.filter((targetShip) => targetShip.id !== ship.id)
    });
    // const updatedHistory = [...state.history, { systems: [targetSystem], args, action: 'sacrificeStart' }];
    // create new state;
    const updatedState = history.add(state, Object.assign({}, state, {
      board: [...otherSystems, updatedSystem],
      bank: updatedBank,
      //history: updatedHistory,
      turn: {
        sacrifice: {
          color: targetShip.color,
          count: targetShip.size
        }
      }
    }), 'sacrificeStart', args);
    
    return actionSuccess(updatedState);
  }

}
module.exports = sacrificeStart;