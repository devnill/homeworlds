const game = {
  initState(){
    return {
      bank: createBank(),
      board:[],
      players:['player1', 'player2'],
      activePlayer: 0,
      history: []
    };

    function createBank(){
      return Object.assign({}, ...[
        'red',
        'yellow',
        'green',
        'blue'
      ].map((color)=>{
        return {[color]: [3,3,3]};  
      }));
    }
        
  }
};

module.exports = game;