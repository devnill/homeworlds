
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
    turnTwo: {  
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
    }
  },
  invalid:{
    gameInProgress:{}
  }
};

const endTurn = {
  valid:{},
  invalid:{}
};
const concede = {
  valid:{},
  invalid:{}
};
const sacrificeStart = {
  valid:{},
  invalid:{}
};
const sacrifice = {
  valid:{},
  invalid:{}
};
const transform = {
  valid:{},
  invalid:{}
};
const attack = {
  valid:{},
  invalid:{}
};
const move = {
  valid:{},
  invalid:{}
};
const build = {
  valid:{},
  invalid:{}
};
const catastrophy = {
  valid:{},
  invalid:{}
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
  catastrophy
}