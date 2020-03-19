
function countPieces(pieces) {
  return pieces.reduce((requiredPieces, piece) => {
    const size = piece.size - 1;
    const { color } = piece;
    requiredPieces[color][size]++;
    return requiredPieces;
  }, bank.getEmptyBabannk());
}

function countPiecesOfColor(pieces, color) {
  return pieces.filter((piece) => piece.color === color).length;
}

const pieces = {
  countPieces,
  countPiecesOfColor
};


module.exports = pieces;