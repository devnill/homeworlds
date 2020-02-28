
const chooseHomeworld = {
  valid:{
    initial: {
      "bank": {
        "red": [3,3,3],
        "yellow": [3,3,3],
        "green": [3,3,3],
        "blue": [3,3,3]
      },
      "board": [],
      "players": ["player1", "player2"],
      "activePlayer": 0,
      "history": []
    },
  },
  insufficentPieces:{  
    "bank": {
    "red": [3,3,3],
    "yellow": [3,3,3],
    "green": [3,3,3],
    "blue": [0,0,0]
  },
  "board": [],
  "players": ["player1", "player2"],
  "activePlayer": 0,
  "history": []
  }
};

const endTurn = {
  valid:{
    sacrificeInProgress: {  
      "bank": {
      "red": [3,3,3],
      "yellow": [3,3,3],
      "green": [3,3,3],
      "blue": [3,3,3]
      },
      "board": [],
      "players": ["player1", "player2"],
      "activePlayer": 0,
      "history": [],
      "turn":{
        sacrifice:{
          color: 'blue',
          count: 3
      }
    }
  }
  }
};
const concede = {
  valid:{}
};
const sacrificeStart = {
  valid:{}
};
const sacrifice = {
  valid:{}
};
const transform = {
  valid:{}
};
const attack = {
  valid:{}
};
const move = {
  valid:{}
};
const build = {
  valid:{}
};
const catastrophy = {
  valid:{}
};

const initial = {
  bank: {
    red: [ 3, 3, 3 ],
    yellow: [ 3, 3, 3 ],
    green: [ 3, 3, 3 ],
    blue: [ 3, 3, 3 ]
  },
  board: [],
  players: [ 'player1', 'player2' ],
  activePlayer: 0,
  history: []
};

module.exports = {
  chooseHomeworld,
  endTurn,
  concede,
  sacrificeStart,
  sacrifice,
  transform,
  attack,
  move,
  build,
  catastrophy,
  initial
}