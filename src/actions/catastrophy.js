
const {
  find,
  bank,
  history
} = require('../util/');

const {
  findSystem
} = find;

const {
  returnPiecesToBank,
} = bank;


const _ = require('lodash');


function catastrophy(state, args) {

  const { board, bank } = state;
  const { system, color } = args;
  const [targetSystem, otherSystems] = findSystem(board, system);


  // we can catastrophy. remove pieces from system
  const [removedStars, remainingStars] = _.partition(targetSystem.stars, (star) => star.color === color);
  const [removedShips, remainingShips] = _.partition(targetSystem.ships, (ship) => ship.color === color);
  if (remainingStars.length === 0 || remainingShips.length === 0) {
    // remove all pieces and return to bank
    const updatedBank = returnPiecesToBank(bank, [...targetSystem.stars, ...targetSystem.ships]);
    // const updatedHistory = [...state.history, { systems: [targetSystem], args, action: 'catastrophy' }];
    // create new state;
    const updatedState = history.add(state, Object.assign({}, state, {
      board: otherSystems,
      bank: updatedBank
    }), 'catastrophy', args);
    return updatedState;
  } else {
    const updatedBank = returnPiecesToBank(bank, [...removedStars, ...removedShips]);
    const updatedSystem = Object.assign({}, targetSystem, {
      stars: remainingStars,
      ships: remainingShips
    });
    const updatedBoard = [...otherSystems, updatedSystem];
    // const updatedHistory = [...state.history, { args, action: 'catastrophy', systems: [targetSystem] }];

    const updatedState = history.add(state, Object.assign({}, state, {
      board: updatedBoard,
      bank: updatedBank,
    }), 'catastrophy', args);

    return updatedState;
    //system is not destroyed. handle it.
    //const piecesToReturn = countPieces([...targetSystem.stars, ...targetSystem.ships]);
    //updatedBank = returnToBank(bank, piecesToReturn);
    //updatedBoard = state.board.filter((targetSystem) => targetSystem.id !== system.id)
  }
}

module.exports = catastrophy;