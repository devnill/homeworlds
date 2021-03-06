const valid = {
  action: {
    system: {id: 1},
    color: 'blue',
    player: 'player1'
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
      stars: [{ color: 'green', size: 1 }],
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
      'blue': [0, 0, 0]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 3, color: 'blue', size: 1, owner: 'player1' },
        { id: 4, color: 'blue', size: 1, owner: 'player1' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': []
  }
};
const missingColorInSystem = {
  action: {
    player: 'player1',
    system: {id: 1},
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
    system: {id: 1},
    color: 'blue'
  },
  state: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [3, 3, 3],
      'green': [2, 3, 3],
      'blue': [0, 0, 0]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'green', size: 1 }],
      ships: [
        { id: 3, color: 'blue', size: 1, owner: 'player1' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': [/*{
      action: 'build',
      args: {
        system: {id: 1},
        color: 'blue'
      }
    }, {
      player: 'player1',
      action: 'endTurn'
    }*/]
  },
  result: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [3, 3, 3],
      'green': [2, 3, 3],
      'blue': [0, 0, 0]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'green', size: 1 }],
      ships: [
        { id: 3, color: 'blue', size: 1, owner: 'player1' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': [/*{
      action: 'build',
      args: {
        system: {id: 1},
        color: 'blue'
      }
    }, {
      player: 'player1',
      action: 'endTurn'
    }*/]
  }
};

export default {
  valid,
  missingColorInSystem,
  missingPieceInBank
};

export {
  valid,
  missingColorInSystem,
  missingPieceInBank
};
