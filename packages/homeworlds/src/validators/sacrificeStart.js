const {
  find
} = require('../util/');


const {  findSystem,
  findShip,
} = find;

const { error } = require('../strings');

function sacrificeStart(state, args) {
  const { board } = state;
  const { ship, system } = args;
  const [targetSystem] = findSystem(board, system);
  if (!targetSystem) {
    return error.invalidSystem;
  }
  const [targetShip] = findShip(targetSystem.ships, ship);
  if (!targetShip) {
    return error.invalidShip;
  }
  return null;
}
module.exports = sacrificeStart;