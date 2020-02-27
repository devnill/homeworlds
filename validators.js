const util = require('./util.js');
const validate = { 
    build(state, args) {},
    move(state, args) {},
    attack(state, args) {},
    transform(state, args) {},
    catastrophy(state, args){},
    sacrificeStart(state, args){},
    sacrifice(state, args){},
    concede(state, args){},
    endTurn(state, args){},
    chooseHomeworld(state, args){
      if(state.history.filter((action)=>action.player===args.player) > 1){
        return 'cannot build a homeworld.';
      } else if (!isCurrentPlayer(state, args)){
        return 'not your turn.';
      }
      return null;
      
    },
    a:1
  };
module.exports = validate;  

  