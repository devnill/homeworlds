const valid = {
  action: {
    player: 'player1',
    color: 'blue',
    system: { id: 1 }
  },
  state: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [2, 3, 3],
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
        { id: 4, color: 'blue', size: 1, owner: 'player2' },
        { id: 5, color: 'yellow', size: 1, owner: 'player2' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': []
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
    'activePlayer': 0,
    'history': [/*{
      'action': 'catastrophe',
      'args': {
        'color': 'blue',
        'system': {id: 1},
        'player': 'player1'
      },
      'systems': [{
        id: 1,
        name: 'Andoria',
        stars: [{ color: 'blue', size: 2 }],
        ships: [
          { id: 2, color: 'blue', size: 3, owner: 'player1' },
          { id: 3, color: 'blue', size: 2, owner: 'player2' },
          { id: 4, color: 'blue', size: 1, owner: 'player2' },
          { id: 5, color: 'yellow', size: 1, owner: 'player2' }
        ]
      }]
    }*/]
  }
};

const invalid = {
  action: {
    player: 'player1',
    color: 'blue',
    system: { id: 1 }
  },
  state: {
    'bank': {
      'red': [0, 0, 0],
      'yellow': [0, 0, 0],
      'green': [0, 0, 0],
      'blue': [0, 0, 0]
    },
    'board': [{
      id: 1,
      name: 'Sol',
      stars: [{ color: 'yellow', size: 2 }],
      ships: [
        { id: 2, color: 'blue', size: 3, owner: 'player1' },
        { id: 3, color: 'blue', size: 2, owner: 'player1' },
        { id: 4, color: 'blue', size: 2, owner: 'player2' },
        { id: 5, color: 'red', size: 1, owner: 'player2' },
        { id: 6, color: 'red', size: 1, owner: 'player2' },
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': []
  },
  result: {
    'bank': {
      'red': [2, 0, 0],
      'yellow': [0, 1, 0],
      'green': [0, 0, 0],
      'blue': [0, 2, 1]
    },
    'board': [{
      id: 1,
      name: 'Sol',
      stars: [{ color: 'yellow', size: 2 }],
      ships: [
        { id: 6, color: 'red', size: 1, owner: 'player2' },
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': []
  }
};

const starIntact = {
  action: {
    player: 'player1',
    'color': 'blue',
    system: { id: 1 }
  },
  state: {
    'bank': {
      'red': [0, 0, 0],
      'yellow': [0, 0, 0],
      'green': [0, 0, 0],
      'blue': [0, 0, 0]
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
      'red': [0, 0, 0],
      'yellow': [0, 0, 0],
      'green': [0, 0, 0],
      'blue': [2, 1, 1]
    },
    'board': [{
      id: 1,
      name: 'Sol',
      stars: [{ color: 'yellow', size: 2 }],
      ships: [
        { id: 6, color: 'red', size: 1, owner: 'player2' },
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': [/*{
      'action': 'catastrophe',
      'args': {
        'color': 'blue',
        'systemd': {id: 1},
        'player': 'player1'
      },
      'systems': [{
        id: 1,
        name: 'Sol',
        stars: [{ color: 'yellow', size: 2 }],
        ships: [
          { id: 2, color: 'blue', size: 3, owner: 'player1' },
          { id: 3, color: 'blue', size: 2, owner: 'player1' },
          { id: 4, color: 'blue', size: 1, owner: 'player2' },
          { id: 5, color: 'blue', size: 1, owner: 'player2' },
          { id: 6, color: 'red', size: 1, owner: 'player2' }
        ]
      }]
    }*/
    ]
  }
};

export default { valid, invalid, starIntact };
export { valid, invalid, starIntact };