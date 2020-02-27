
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
  }
}

module.exports=util;