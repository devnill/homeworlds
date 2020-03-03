const valid = {
  action: {
    'color': 'blue',
    'starId': 1
  },
  state: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [2, 1, 2]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 2 }],
      ships: [
        { id: 2, color: 'blue', size: 3, owner: 'player1' },
        { id: 3, color: 'blue', size: 2, owner: 'player2' },
        { id: 4, color: 'blue', size: 1, owner: 'player2' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': []
  },
  result: {
    'bank': {
      'red': [3, 2, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [3, 3, 3]
    },
    'board': [],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': [{
      'action': 'catastrophy',
      'args': {
        'color': 'blue',
        'starId': 1
      },
      'systems': [{
        id: 1,
        name: 'Andoria',
        stars: [{ color: 'blue', size: 2 }],
        ships: [
          { id: 2, color: 'blue', size: 3, owner: 'player1' },
          { id: 3, color: 'blue', size: 2, owner: 'player2' },
          { id: 4, color: 'blue', size: 1, owner: 'player2' }
        ]
      }]
    }]
  }
};

const starIntact = {
  action: {
    'color': 'blue',
    'starId': 1
  },
  state: {
    'bank': {
      'red': [2, 3, 3],
      'yellow': [3, 2, 3],
      'green': [3, 3, 3],
      'blue': [1, 1, 2]
    },
    'board': [{
      id: 1,
      name: 'Sol',
      stars: [{ color: 'yellow', size: 2 }],
      ships: [
        { id: 2, color: 'blue', size: 3, owner: 'player1' },
        { id: 3, color: 'blue', size: 2, owner: 'player1' },
        { id: 4, color: 'blue', size: 1, owner: 'player2' },
        { id: 5, color: 'blue', size: 1, owner: 'player2' },
        { id: 6, color: 'red', size: 1, owner: 'player2' },
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': []
  },
  result: {
    'bank': {
      'red': [3, 2, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [3, 3, 3]
    },
    'board': [],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': [{
      'action': 'catastrophy',
      'args': {
        'color': 'blue',
        'starId': 1
      },
      'systems': [{
        id: 1,
        name: 'Sol',
        stars: [{ color: 'blue', size: 2 }],
        ships: [
          { id: 2, color: 'blue', size: 3, owner: 'player1' },
          { id: 3, color: 'blue', size: 2, owner: 'player2' },
          { id: 4, color: 'blue', size: 1, owner: 'player2' },
          { id: 5, color: 'red', size: 1, owner: 'player2' },
          { id: 6, color: 'red', size: 1, owner: 'player2' }
        ]
      }]
    }]
  }
};

module.exports = { valid, starIntact };