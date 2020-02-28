const valid = {
  action: {
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
  },
  state: {
    initial: {
      "bank": {
        "red": [3, 3, 3],
        "yellow": [3, 3, 3],
        "green": [3, 3, 3],
        "blue": [3, 3, 3]
      },
      "board": [],
      "players": ["player1", "player2"],
      "activePlayer": 0,
      "history": []
    }
  }
};

const insufficentPieces = {
  action: {
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
  },
  state: {
    "bank": {
      "red": [3, 3, 3],
      "yellow": [3, 3, 3],
      "green": [3, 3, 3],
      "blue": [0, 0, 0]
    },
    "board": [],
    "players": ["player1", "player2"],
    "activePlayer": 0,
    "history": []
  }
};


module.exports = {valid, insufficentPieces};