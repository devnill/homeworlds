/**
 * action: {
    system: {id: 1},
    color: 'blue',
    player: 'player1'
  }, */
const {normalize} = require('../util/');

const util = require('../util/');
const { history} = util;
const { findSystem } = util.find;
const { takeFromBank, countPieces } = util.bank;


function build(state, args) {
  const { board, bank } = state;
  const { system, color, player } = args;
  const [targetSystem, otherSystems] = findSystem(board, system);

  //todo move to validators
  const smallestSize = (bank[color].findIndex((size) => size > 0)) + 1;
  const ship = normalize.ship({
    owner: player,
    color,
    size: smallestSize
  });
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
  return updatedState;  
}
module.exports = build;