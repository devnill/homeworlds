const {isCurrentPlayer} = require('./util.js');
  function actionSuccess(state){
    return {
      err: null,
      state
    }
  }
  function actionFailure(state, reason){
    return {
      err: reason || true,
      state
    }
  }
const actions = {
    build(state, args){},
    move(state, args){},
    attack(state, args){},
    transform(state, args){},
    catastrophy(state, args){},
    sacrificeStart(state, args){},
    sacrifice(state, args){},
    concede(state, args){},
    endTurn(state, args){
  
    },
    chooseHomeworld(state, args){
      const updatedBank  = {
        red    : [...state.bank.red],
        blue   : [...state.bank.blue],
        green  : [...state.bank.green],
        yellow : [...state.bank.yellow]
      };
      
      function getRequiredPieces(pieces){
        return pieces.reduce((requiredPieces, piece)=>{
          const size = piece.size - 1;
          const {color} = piece; 
          requiredPieces[color][size]++
          return requiredPieces;
        }, {
          red    : [0,0,0],
          blue   : [0,0,0],
          green  : [0,0,0],
          yellow : [0,0,0]
        });
      }

      // check to see if its the players turn
      if(!isCurrentPlayer(state, args)){
        return actionFailure(state, 'not your turn');
      }

      // check to see if the player has played yet
      if(state.history.filter((actionObj)=>actionObj.player===args.player && actionObj.action !== 'endTurn') > 1){
        return actionFailure(state, 'already player');
      }


      
      const requiredPieces = getRequiredPieces([...args.star, ...args.ship])
      for(const color in updatedBank){
        for(let size = 0; size < updatedBank[color].length; size++){
          updatedBank[color][size] -= requiredPieces[color][size];
          if(updatedBank[color][size] < 0){
            return actionFailure(state, 'insufficent resources in bank to perform action')
          }
        }
      }


      const updatedBoard = [...state.board, {
        name: 'player1',
        star: [{
          size: 3,
          color: 'blue'
        },{
          size: 2,
          color: 'yellow'
        }],
        ships: [{
          size: 3,
          color: 'green'
        }]
      }];
     
      const updatedHistory = [...state.history, Object.assign({action: 'chooseHomeworld', args})];
      
      return actionSuccess(Object.assign({}, state, {
        board   : updatedBoard, 
        bank    : updatedBank,
        history : updatedHistory
      }));
    }
  };
module.exports = actions;