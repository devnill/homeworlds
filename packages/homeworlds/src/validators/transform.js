const {
  find,
} = require('../util/');

const {
  findSystem,
  findShip
} = find;

const { error } = require('../strings');

function transform(state, args) {
  const { board, bank } = state;
  const { ship, system, color } = args;
  const [targetSystem] = findSystem(board, system);
  if (!targetSystem) {
    return error.invalidSystem;
  }
  const [targetShip] = findShip(targetSystem.ships, ship);
  if (!targetShip) {
    return error.invalidShip;
  }
  // todo is player correct?
  if (bank[color][targetShip.size - 1] < 1) {
    return error.insufficentPieces;
  }
  return null;
}
module.exports = transform;