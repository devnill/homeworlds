const validate = require('./validate');
const pieces = require('./pieces');
const action = require('./action');
const board = require('./board');
const ship = require('./ship');
const player = require('./player');
const system = require('./system');
const bank = require('./bank');
const history = require('./history');
const normalize = require('./normalize');


function initState() {
  return {
    bank: bank.createBank(),
    board: [],
    players: ['player1', 'player2'],
    activePlayer: 0,
    history: []
  };
}

const util = {
  initState,  
  validate,
  // standardValidation,
  pieces,
  // countPieces,
  // countPiecesOfColor,
  action,
  // actionSuccess,
  // actionFailure,
  board,
  // findSystem,// these should be refactored
  ship,
  //findShip,
  player,
  // isCurrentPlayer,
  // playerHasColorAbility,
  // colorsAvailableToPlayer,
  // isPlayersTurn,
  system,
  // largestShipInSystem,
  bank,
  // createSystem,
  // returnSystemToBank,
  // getEmptyBank,
  // returnToBank,
  // takeFromBank,
  // getUpdatedBank,
  history,
  // getHistoryItem,
  // getPreviousState
  normalize
};
module.exports = util;