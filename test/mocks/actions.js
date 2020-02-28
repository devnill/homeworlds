

const chooseHomeworld = {
  valid: {
    B3Y2SG3:{
      player: 'player1',
      star: [{
        size: 3,
        color: 'blue'
      },{
        size: 2,
        color: 'yellow'
      }],
      ship: [{
        size: 3,
        color: 'green'
      }]
    }
  },
  insufficentPieces: {
    player: 'player1',
    star: [{
      size: 3,
      color: 'blue'
    },{
      size: 2,
      color: 'blue'
    }],
    ship: [{
      size: 3,
      color: 'blue'
    }]
  }
}

module.exports = {chooseHomeworld}
