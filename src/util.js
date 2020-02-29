let counter = 1;
function id() { 
    return counter++;
} 

function isCurrentPlayer(state, args){
    return args.player === state.players[state.activePlayer];
}

function countPieces(pieces){
    return pieces.reduce((requiredPieces, piece) => {
        const size = piece.size - 1;
        const { color } = piece;
        requiredPieces[color][size]++;
        return requiredPieces;
    }, {
        red: [0, 0, 0],
        blue: [0, 0, 0],
        green: [0, 0, 0],
        yellow: [0, 0, 0]
    });
}
module.exports = { id, isCurrentPlayer, countPieces};