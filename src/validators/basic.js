// Generic validation rules for basic actions
const util = require('../util/');
const { error } = require('../strings');

function basic(state, args) {
  // Is the player making this action currently playing accoring to the state?
  if(args.player != state.players[state.activePlayer]) {
    return error.invalidTurn;
  }

  return null;
}

module.exports = basic;
