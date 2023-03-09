import { State } from "../../src/types";
const valid = {
  action: {
    player: "player1",
    system: { id: "1" },
    ship: { id: "3" }, //captures ship 3 in system 1
  },
  state: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [2, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [2, 3, 3],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 1 }],
        ships: [
          { id: "3", color: "YELLOW", size: 1, owner: "player2" },
          { id: "4", color: "RED", size: 1, owner: "player1" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [],
  } as State,
  result: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [2, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [2, 3, 3],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 1 }],
        ships: [
          { id: "4", color: "RED", size: 1, owner: "player1" },
          { id: "3", color: "YELLOW", size: 1, owner: "player1" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [
      /*{
      'action': 'attack',
      'args':{
        player: 'player1',
        system: {id: "1"},
        ship: {id: "3"},
        color: 'RED'
      },
      systems: [{
        id: "1",
        name: 'Andoria',
        stars: [{ color: 'BLUE', size: 1 }],
        ships: [
          { id: "3", color: 'YELLOW', size: 1, owner: 'player2' },
          { id: "3", color: 'RED', size: 1, owner: 'player1' }
        ]
      }]
    }*/
    ],
  },
};

const tooSmall = {
  action: {
    player: "player1",
    system: { id: "1" },
    ship: { id: "3" }, //captures ship 3 in system 1
  },
  state: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [2, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [2, 3, 3],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 1 }],
        ships: [
          { id: "3", color: "YELLOW", size: 2, owner: "player2" },
          { id: "4", color: "RED", size: 1, owner: "player1" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [],
  } as State,
  result: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [2, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [2, 3, 3],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 1 }],
        ships: [
          { id: "3", color: "YELLOW", size: 2, owner: "player2" },
          { id: "4", color: "RED", size: 1, owner: "player1" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [
      /*{
      'action': 'attack',
      'args':{
        player: 'player1',
        system: {id: "1"},
        ship: {id: "3"},
        color: 'RED'
      },
      systems: [{
        id: "1",
        name: 'Andoria',
        stars: [{ color: 'BLUE', size: 1 }],
        ships: [
          { id: "3", color: 'YELLOW', size: 1, owner: 'player2' },
          { id: "3", color: 'RED', size: 1, owner: 'player1' }
        ]
      }]
    }*/
    ],
  },
};
export { valid, tooSmall };
export default { valid, tooSmall };
