// Generic validation rules for basic actions
const util = require('../util/');
const { error } = require('../strings');

function basic(state, args) {
  // check to see if it's the players turn
  if (!util.player.isCurrentPlayer(state, args)) {
    return error.invalidTurn;
  }

  return null;
}

module.exports = basic;
