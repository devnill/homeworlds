const action = require('./action');
const bank = require('./bank');
const find = require('./find');
const history = require('./history');
const normalize = require('./normalize');
const player = require('./player');


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
  action,
  player,
  bank,
  history,
  normalize,
  find

};
module.exports = util;