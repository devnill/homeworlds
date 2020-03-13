
const valid = {
  action: {
    player: 'player1',
    system: {id: 1},
    ship: {id: 3},
    color: 'yellow' //transforms ship 3 to yellow 
  },
  state: {
    'bank': {
      'red': [2, 3, 3],
      'yellow': [3, 3, 3],
      'green': [0, 0, 0],
      'blue': [2, 3, 3]
    },
    'board': [{
      id: 1,
      name: 'vulcan',
      ships: [{ id: 3, size: 1, color: 'blue', owner: 'player1' }],
      stars: [{ size: 1, color: 'red' }]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': [],
    'turn': null
  },
  result: {
    'bank': {
      'red': [2, 3, 3],
      'yellow': [2, 3, 3],
      'green': [0, 0, 0],
      'blue': [3, 3, 3]
    },
    'board': [{
      id: 1,
      name: 'vulcan',
      ships: [{ id: 3, size: 1, color: 'yellow', owner: 'player1' }],
      stars: [{ size: 1, color: 'red' }]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': [/*{
      action: 'transform',
      args: {
        player: 'player1',
        system: {id: 1},
        ship: {id: 3},
        color: 'yellow'
      },
      systems: [{
        id: 1,
        name: 'vulcan',
        ships: [{ id: 3, size: 1, color: 'blue', owner: 'player1' }],
        stars: [{ size: 1, color: 'red' }]
      }]
    }*/],
    'turn': null
  }
};


module.exports = { valid };