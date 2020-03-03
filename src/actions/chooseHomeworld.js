const {
  isCurrentPlayer,
  countPieces,
  actionSuccess,
  actionFailure
} = require('../util.js');

function chooseHomeworld(state, args) {
  const updatedBank = {
    red: [...state.bank.red],
    blue: [...state.bank.blue],
    green: [...state.bank.green],
    yellow: [...state.bank.yellow]
  };

  // check to see if its the players turn
  if (!isCurrentPlayer(state, args)) {
    return actionFailure(state, 'not your turn');
  }

  // check to see if the player has played yet
  if (state.history.filter((actionObj) => actionObj.player === args.player && actionObj.action !== 'endTurn') > 1) {
    return actionFailure(state, 'already player');
  }

  const requiredPieces = countPieces([...args.stars, ...args.ships]);

  for (const color in updatedBank) {
    for (let size = 0; size < updatedBank[color].length; size++) {
      updatedBank[color][size] -= requiredPieces[color][size];
      if (updatedBank[color][size] < 0) {
        return actionFailure(state, 'insufficent resources in bank to perform action');
      }
    }
  }

  const updatedBoard = [...state.board, {
    name: 'player1',
    star: [{
      size: 3,
      color: 'blue'
    }, {
      size: 2,
      color: 'yellow'
    }],
    ships: [{
      size: 3,
      color: 'green',
      owner: 'player1'
    }]
  }];

  const updatedHistory = [...state.history, Object.assign({ action: 'chooseHomeworld', args })];

  return actionSuccess(Object.assign({}, state, {
    board: updatedBoard,
    bank: updatedBank,
    history: updatedHistory
  }));
}

module.exports = chooseHomeworld;