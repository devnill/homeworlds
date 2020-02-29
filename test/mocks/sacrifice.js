const valid = {
  action: {
    shipId: 3,
    color: 'blue',
    systems: [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 3, color: 'yellow', size: 1, owner: 'player1' }
      ]
    }]
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
        { id: 3, color: 'yellow', size: 1, owner: 'player1' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'turn': {
      sacrifice: {
        color: 'blue',
        count: 1
      }
    },
    'history': [{
      'action': 'sacrificeStart',
      'args': {
        shipId: 2,
        starId: 1,
        systems: [{
          id: 1,
          name: 'Andoria',
          stars: [{ color: 'blue', size: 1 }],
          ships: [
            { id: 2, color: 'blue', size: 1, owner: 'player1' },
            { id: 3, color: 'yellow', size: 1, owner: 'player1' }
          ]
        }]
      }
    }]
  },
  result: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [1, 3, 3]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 3, color: 'blue', size: 1, owner: 'player1' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'turn': {
      sacrifice: {
        color: 'blue',
        count: 0
      }
    },
    'history': [{
      'action': 'sacrificeStart',
      'args': {
        shipId: 2,
        starId: 1,
        systems: [{
          id: 1,
          name: 'Andoria',
          stars: [{ color: 'blue', size: 1 }],
          ships: [
            { id: 2, color: 'blue', size: 1, owner: 'player1' },
            { id: 3, color: 'yellow', size: 1, owner: 'player1' }
          ]
        }]
      }
    },
    {
      action: 'sacrifice',
      args: {
        shipId: 3,
        color: 'blue',
        systems: [{
          id: 1,
          name: 'Andoria',
          stars: [{ color: 'blue', size: 1 }],
          ships: [
            { id: 3, color: 'yellow', size: 1, owner: 'player1' }
          ]
        }]
      }
    }]
  }
};

module.exports = { valid };