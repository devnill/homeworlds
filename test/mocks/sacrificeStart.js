const { ship, star } = require('../../types/')
const ship_b3 = ship('blue', 3, 'player1');
const ship_r2 = ship('red', 2, 'player1');
//const andoria = star('blue', 2, [ship_b3, ship_r2]);

const valid = {
  action: {
    shipId: 2,
    starId: 1
  },
  state: {
    "bank": {
      "red": [3, 2, 3],
      "yellow": [3, 3, 3],
      "green": [3, 3, 3],
      "blue": [3, 2, 2]
    },
    "board": [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 2 }],
      ships: [
        { id: 2, color: 'blue', size: 3, owner: 'player1' },
        { id: 3, color: 'red', size: 2, owner: 'player2' }
      ]
    }],
    "players": ["player1", "player2"],
    "activePlayer": 0,
    "history": []
  },
  result: {
    "bank": {
      "red": [3, 2, 3],
      "yellow": [3, 3, 3],
      "green": [3, 3, 3],
      "blue": [3, 2, 3]
    },
    "board": [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 2 }],
      ships: [
        { id: 3, color: 'red', size: 2, owner: 'player2' }
      ]
    }],
    "players": ["player1", "player2"],
    "activePlayer": 0,
    "turn": {
      sacrifice: {
        color: 'blue',
        count: 3
      }
    },
    "history": [{
      "action": "sacrificeStart",
      "args": {
        "shipId": 2,
        "starId": 1
      }
    }
    ]
  }
};

const starReturned = {
  action: {
    shipId: 2,
    starId: 1,
    systems: [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 2, color: 'blue', size: 1, owner: 'player1' }
      ]
    }]
  },
  state: {
    "bank": {
      "red": [3, 3, 3],
      "yellow": [3, 3, 3],
      "green": [3, 3, 3],
      "blue": [1, 3, 3]
    },
    "board": [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 2, color: 'blue', size: 1, owner: 'player1' }
      ]
    }],
    "players": ["player1", "player2"],
    "activePlayer": 0,
    "history": []
  },
  result: {
    "bank": {
      "red": [3, 3, 3],
      "yellow": [3, 3, 3],
      "green": [3, 3, 3],
      "blue": [3, 3, 3]
    },
    "board": [],
    "players": ["player1", "player2"],
    "activePlayer": 0,
    "turn": {
      sacrifice: {
        color: 'blue',
        count: 1
      }
    },
    "history": [{
      "action": "sacrificeStart",
      "args": {
        shipId: 2,
        starId: 1,
        systems: [{
          id: 1,
          name: 'Andoria',
          stars: [{ color: 'blue', size: 1 }],
          ships: [
            { id: 2, color: 'blue', size: 1, owner: 'player1' }
          ]
        }]
      }
    }]
  }
}
module.exports = { valid, starReturned };