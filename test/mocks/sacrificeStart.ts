import { ActionTestFixture } from "../test_fixtures";

const valid: ActionTestFixture = {
  action: {
    ship: { id: "2", owner: "player1", color: "GREEN", size: 3 },
    system: { id: "1" },
    player: "player1",
  },
  state: {
    bank: {
      RED: [3, 2, 3],
      YELLOW: [3, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [3, 2, 2],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 2 }],
        ships: [
          { id: "2", color: "BLUE", size: 3, owner: "player1" },
          { id: "3", color: "RED", size: 2, owner: "player2" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [],
  },
  result: {
    bank: {
      RED: [3, 2, 3],
      YELLOW: [3, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [3, 2, 3],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 2 }],
        ships: [{ id: "3", color: "RED", size: 2, owner: "player2" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: {
      sacrifice: {
        color: "BLUE",
        count: 3,
      },
      actions:[]
    },
    history: [
      /*{
      'action': 'sacrificeStart',
      'args': {
        'ship': {id: "2"},
        'system': {id: "1"},
        'player': 'player1',
      },
      'systems': [{
        id: "1",
        name: 'Andoria',
        stars: [{ color: 'blue', size: 2 }],
        ships: [
          { id: "2", color: 'blue', size: 3, owner: 'player1' },
          { id: "3", color: 'red', size: 2, owner: 'player2' }
        ]
      }]
    }*/
    ],
  },
};

const starReturned: ActionTestFixture = {
  action: {
    ship: { id: "2" },
    system: { id: "1" },
    player: "player1",
  },
  state: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [3, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [1, 3, 3],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 1 }],
        ships: [{ id: "2", color: "BLUE", size: 1, owner: "player1" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [],
  },
  result: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [3, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [3, 3, 3],
    },
    board: [],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: {
      sacrifice: {
        color: "BLUE",
        count: 1,
      },
      actions:[]
    },
    history: [
      /*{
      'action': 'sacrificeStart',
      'args': {
        player: 'player1',
        ship: {id: "2"},
        system: {id: "1"}
      },
      systems: [{
        id: "1",
        name: 'Andoria',
        stars: [{ color: 'blue', size: 1 }],
        ships: [
          { id: "2", color: 'blue', size: 1, owner: 'player1' }
        ]
      }]
    }*/
    ],
  },
};
export { valid, starReturned };
export default { valid, starReturned };
