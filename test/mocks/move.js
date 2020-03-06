const valid = {
  action: {
    player: 'player1',
    systemId: 2,
    targetSystemId: 1,
    shipId: 3
    //moves ship 3 from system 1 to system 2
  },
  state: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [2, 3, 3],
      'green': [3, 3, 3],
      'blue': [2, 3, 3]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 5, color: 'yellow', size: 1, owner: 'player2' }
      ]
    },
    {
      id: 2,
      name: 'Sol',
      stars: [{ color: 'yellow', size: 2 }],
      ships: [
        { id: 4, color: 'yellow', size: 1, owner: 'player2' },
        { id: 3, color: 'red', size: 1, owner: 'player1' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'turn': null,
    'history': [{
      action: 'move',
      args: {
        player: 'player1',
        systemId: 2,
        targetSystemId: 1,
        shipId: 3
      },
      systems: []
    }]
  },
  results: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [2, 3, 3],
      'green': [3, 3, 3],
      'blue': [2, 3, 3]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 5, color: 'yellow', size: 1, owner: 'player2' },
        { id: 3, color: 'red', size: 1, owner: 'player1' }
      ]
    },
    {
      id: 2,
      name: 'Sol',
      stars: [{ color: 'yellow', size: 2 }],
      ships: [
        { id: 4, color: 'yellow', size: 1, owner: 'player2' },
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'turn': null,
    'history': [{
      action: 'move',
      args: {
        player: 'player1',
        systemId: 2,
        targetSystemId: 1,
        shipId: 3
      },
      systems: [{
        id: 1,
        name: 'Andoria',
        stars: [{ color: 'blue', size: 1 }],
        ships: [
          { id: 5, color: 'yellow', size: 1, owner: 'player2' }
        ]
      },
      {
        id: 2,
        name: 'Sol',
        stars: [{ color: 'yellow', size: 2 }],
        ships: [
          { id: 4, color: 'yellow', size: 1, owner: 'player2' },
          { id: 3, color: 'red', size: 1, owner: 'player1' }
        ]
      }]
    }]
  }
};

module.exports = { valid };