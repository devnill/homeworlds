
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
      
      const requiredPieces = getRequiredPieces([...args.star, ...args.ship])
      let sufficentResources = true;
      for(const color in updatedBank){
        for(let size = 0; size < updatedBank[color].length; size++){
          updatedBank[color][size] -= requiredPieces[color][size];
          if(updatedBank[color][size] < 0){
            sufficentResources = false;
            break;
          }
        }
        if(!sufficentResources){
          break;
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