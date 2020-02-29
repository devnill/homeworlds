const _ = require('lodash');
const {
  isCurrentPlayer,
  countPieces,
  actionSuccess,
  actionFailure
} = require('./util.js');

function build(state, args) { }
function move(state, args) { }
function attack(state, args) { }
function transform(state, args) { }
function catastrophy(state, args) { }
function sacrificeStart(state, args) { }
function sacrifice(state, args) { }
function concede(state, args) {
  // check to see if its the players turn
  if (!isCurrentPlayer(state, args)) {
    return actionFailure(state, 'not your turn');
  }
  const updatedHistory = [...state.history, Object.assign({ action: 'endTurn', args })];
  const updatedState = { history: updatedHistory };
  return actionSuccess(Object.assign({}, state, updatedState));
}
function endTurn(state, args) {
  // check to see if its the players turn
  if (!isCurrentPlayer(state, args)) {
    return actionFailure(state, 'not your turn');
  }

  const updatedHistory = [...state.history, Object.assign({ action: 'endTurn', args })];
  const updatedState = Object.assign({}, _.omit(state, ['turn']), {
    activePlayer: (state.activePlayer + 1) % state.players.length,
    history: updatedHistory
  });
  return actionSuccess(updatedState);
}
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

module.exports = {
  build,
  move,
  attack,
  transform,
  catastrophy,
  sacrificeStart,
  sacrifice,
  concede,
  endTurn,
  chooseHomeworld
};