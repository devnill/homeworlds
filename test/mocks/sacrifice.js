const blue = {
  action: {
    player: 'player1',
    system: { id: 1 },
    ship: { id: 3 },
    color: 'blue', // transforms ship to blue system 1
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
    'history': [/*
      {
      'action': 'sacrificeStart',
      'args': {
        ship: {id:2},
        system: {id: 1}
      },
      systems: [{
        id: 1,
        name: 'Andoria',
        stars: [{ color: 'blue', size: 1 }],
        ships: [
          { id: 2, color: 'blue', size: 1, owner: 'player1' },
          { id: 3, color: 'yellow', size: 1, owner: 'player1' }]
      }]
    }*/]
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
    'history': [/*{
      'action': 'sacrificeStart',
      'args': {
        ship: {id: 2},
        system: {id: 1}
      },
      systems: [{
        id: 1,
        name: 'Andoria',
        stars: [{ color: 'blue', size: 1 }],
        ships: [
          { id: 2, color: 'blue', size: 1, owner: 'player1' },
          { id: 3, color: 'yellow', size: 1, owner: 'player1' }
        ]
      }]
  },
  {
    action: 'transform',
    args: {
      ship: {id: 3},
      system: {id: 1},
      color: 'blue',
      player: 'player1',
    },
    isSacrifice: true,
    systems: [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 3, color: 'yellow', size: 1, owner: 'player1' }
      ]
    }]
  }*/]
  }
};

const green = {
  action: {
    system: { id: 1 },
    color: 'yellow' //builds a yellow ship in system 1 
  }
};

const red = {
  action: {
    player: 'player1',
    system: { id: 1 },
    ship: { id: 3 },
    color: 'red' //captures ship 3 in system 1 
  }
};

const yellow = {
  action: {
    player: 'player1',
    from: { id: 1 },
    to: { id: 2 },
    ship: { id: 3 },
    color: 'yellow' //moves ship 3 from system 1 to system 2 
  }
};


const valid = blue;
module.exports = { valid, blue, yellow, red, green };