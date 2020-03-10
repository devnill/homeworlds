const valid = {
  action: {
    shipId: 2,
    systemId: 1,
    player: 'player1'
  },
  state: {
    'bank': {
      'red': [3, 2, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [3, 2, 2]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 2 }],
      ships: [
        { id: 2, color: 'blue', size: 3, owner: 'player1' },
        { id: 3, color: 'red', size: 2, owner: 'player2' }
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
      'blue': [3, 2, 3]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 2 }],
      ships: [
        { id: 3, color: 'red', size: 2, owner: 'player2' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'turn': {
      sacrifice: {
        color: 'blue',
        count: 3
      }
    },
    'history': [/*{
      'action': 'sacrificeStart',
      'args': {
        'shipId': 2,
        'systemId': 1,
        'player': 'player1',
      },
      'systems': [{
        id: 1,
        name: 'Andoria',
        stars: [{ color: 'blue', size: 2 }],
        ships: [
          { id: 2, color: 'blue', size: 3, owner: 'player1' },
          { id: 3, color: 'red', size: 2, owner: 'player2' }
        ]
      }]
    }*/]
  }
};

const starReturned = {
  action: {
    shipId: 2,
    systemId: 1,
    player: 'player1'
  },
  state: {
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
        { id: 2, color: 'blue', size: 1, owner: 'player1' }
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
    'turn': {
      sacrifice: {
        color: 'blue',
        count: 1
      }
    },
    'history': [/*{
      'action': 'sacrificeStart',
      'args': {
        player: 'player1',
        shipId: 2,
        systemId: 1
      },
      systems: [{
        id: 1,
        name: 'Andoria',
        stars: [{ color: 'blue', size: 1 }],
        ships: [
          { id: 2, color: 'blue', size: 1, owner: 'player1' }
        ]
      }]
    }*/]
  }
};
module.exports = { valid, starReturned };