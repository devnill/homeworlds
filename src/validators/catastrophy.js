const {
  find,
} = require('../util/');

const {
  findPiecesByColor,
  findSystem
} = find;

const { error } = require('../strings');

function build(state, args){
  const { board } = state;
  const { system, color } = args;
  const [targetSystem] = findSystem(board, system);

  if (!targetSystem) {
    return error.invalidSystem;
  }

  const piecesToCount = [
    ...targetSystem.ships,
    ...targetSystem.stars
  ];

  if (findPiecesByColor(piecesToCount, color) < 4) {
    return error.catastrophyFailed;
  } else {
    return null;
  }
}
module.exports = build;