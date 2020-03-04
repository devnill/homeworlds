const valid = {
  action: {
    systemId: 1,
    color: 'blue'
  }
};
const missingColorInSystem = {
  action: {
    player: 'playerOne',
    systemId: 1,
    color: 'blue'
  }, 
  state: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [0, 0, 0]
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
    'history': []
  },
  result: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [1, 0, 0]
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
    'history': []
  }
};
const missingPieceInBank = {
  action: {
    player: 'player1',
    systemId: 1,
    color: 'blue'
  },
  state: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [1, 0, 0]
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
    'activePlayer': 1,
    'history': [{
      action: 'build',
      args: {
        systemId: 1,
        color: 'blue'
      }
    }, {
      player: 'player1',
      action: 'endTurn'
    }]
  },
  result: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [1, 0, 0]
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
    'activePlayer': 1,
    'history': [{
      action: 'build',
      args: {
        systemId: 1,
        color: 'blue'
      }
    }, {
      player: 'player1',
      action: 'endTurn'
    }]
  }
};

module.exports = {
  valid,
  missingColorInSystem,
  missingPieceInBank
};
