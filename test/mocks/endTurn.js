const sacrificeInProgress = {
  action: {
    player: 'player1'
  },
  state: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [3, 3, 3]
    },
    'board': [],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': [],
    'turn': {
      sacrifice: {
        color: 'blue',
        count: 3
      }
    }
  },
  result: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [3, 3, 3]
    },
    'board': [],
    'players': ['player1', 'player2'],
    'activePlayer': 2,
    'history': [/*{
      action: 'endTurn',
      args: {
        player: 'player1'
      }
    }*/],
    'turn': {
      sacrifice: {
        color: 'blue',
        count: 3
      }
    }
  }
};

const valid = sacrificeInProgress;


module.exports = { sacrificeInProgress, valid };
