
const util = {
    
  performAction(action, state, args){
      console.log(action, validate)
      
    const err = validate[action](state, args);
    if(err){
      console.error(err)
      return actionFailure(state, err);
    }
    return actionSuccess(actions[action](state, args));
  },
  isCurrentPlayer(state, args){
    return args.player === state.players[state.activePlayer];
  },
  countPieces(pieces){
    return pieces.reduce((requiredPieces, piece)=>{
      const size = piece.size - 1;
      const {color} = piece; 
      requiredPieces[color][size]++;
      return requiredPieces;
    }, {
      red    : [0,0,0],
      blue   : [0,0,0],
      green  : [0,0,0],
      yellow : [0,0,0]
    });
  }
}

module.exports=util;