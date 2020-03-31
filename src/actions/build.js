/**
 * action: {
    system: {id: 1},
    color: 'blue',
    player: 'player1'
  }, */
const { v4: uuid } = require('uuid');
const util = require('../util/');
const { history, action } = util;
const { findSystem } = util.find;
const { takeFromBank, countPieces } = util.bank;
const { playerHasColorAbility } = util.player;

const {
  actionFailure,
  actionSuccess
} = action;

const { error } = require('../strings');

function build(state, args) {
  const { board, bank } = state;
  const { system, color, player } = args;


  const [targetSystem, otherSystems] = findSystem(board, system);

  //todo move to validators
  const smallestSize = (bank[color].findIndex((size) => size > 0)) + 1;
  if (smallestSize !== 0) {
    if (playerHasColorAbility(targetSystem, player, 'green')) {
      // action can be made
      const ship = {
        owner: player,
        color,
        size: smallestSize,
        id: uuid()
      };
      const updatedBank = takeFromBank(bank, countPieces([ship]));
      const updatedBoard = [
        ...otherSystems,
        {
          ...targetSystem,
          ships: [...targetSystem.ships, ship]
        }
      ];

      const updatedState = history.add(state, {
        ...state,
        board: updatedBoard,
        bank: updatedBank,
      },'attack', args);
      return actionSuccess(updatedState);
    } else {
      // player doesn't have color
      return actionFailure(state, error.invalidAbility);
    }
  } else {
    // not enough in bank
    return actionFailure(state, error.bankInsufficent);
  }
}
module.exports = build;