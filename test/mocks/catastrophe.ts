import { Bank, Star } from "../../src/types";
import { ActionTestFixture } from "../test_fixtures";
const valid: ActionTestFixture = {
  action: {
    player: "player1",
    color: "BLUE",
    system: {
      id: "1",
      ships: [],
      stars: [],
      name: "",
    },
  },
  state: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [2, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [2, 1, 2],
    } as Bank,
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 2 }],
        ships: [
          { id: "2", color: "BLUE", size: 3, owner: "player1" },
          { id: "3", color: "BLUE", size: 2, owner: "player2" },
          { id: "4", color: "BLUE", size: 1, owner: "player2" },
          { id: "5", color: "YELLOW", size: 1, owner: "player2" },
        ],
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
    history: [
      /*{
      'action': 'catastrophe',
      'args': {
        'color': 'BLUE',
        'system': {id: "1"},
        'player': 'player1'
      },
      'systems': [{
        id: "1",
        name: 'Andoria',
        stars: [{ color: 'BLUE', size: 2 }],
        ships: [
          { id: "2", color: 'BLUE', size: 3, owner: 'player1' },
          { id: "3", color: 'BLUE', size: 2, owner: 'player2' },
          { id: "4", color: 'BLUE', size: 1, owner: 'player2' },
          { id: "5", color: 'YELLOW', size: 1, owner: 'player2' }
        ]
      }]
    }*/
    ],
  },
};

const invalid: ActionTestFixture = {
  action: {
    player: "player1",
    color: "BLUE",
    system: { id: "1", stars: [], ships: [], name: "" },
  },
  state: {
    bank: {
      RED: [0, 0, 0],
      YELLOW: [0, 0, 0],
      GREEN: [0, 0, 0],
      BLUE: [0, 0, 0],
    },
    board: [
      {
        id: "1",
        name: "Sol",
        stars: [{ color: "YELLOW", size: 2 }],
        ships: [
          { id: "2", color: "BLUE", size: 3, owner: "player1" },
          { id: "3", color: "BLUE", size: 2, owner: "player1" },
          { id: "4", color: "BLUE", size: 2, owner: "player2" },
          { id: "5", color: "RED", size: 1, owner: "player2" },
          { id: "6", color: "RED", size: 1, owner: "player2" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [],
  },
  result: {
    bank: {
      RED: [2, 0, 0],
      YELLOW: [0, 1, 0],
      GREEN: [0, 0, 0],
      BLUE: [0, 2, 1],
    },
    board: [
      {
        id: "1",
        name: "Sol",
        stars: [{ color: "YELLOW", size: 2 }],
        ships: [{ id: "6", color: "RED", size: 1, owner: "player2" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [],
  },
};

const starIntact: ActionTestFixture = {
  action: {
    player: "player1",
    color: "BLUE",
    system: { id: "1", stars: [], ships: [], name: "" },
  },
  state: {
    bank: {
      RED: [0, 0, 0],
      YELLOW: [0, 0, 0],
      GREEN: [0, 0, 0],
      BLUE: [0, 0, 0],
    } as Bank,
    board: [
      {
        id: "1",
        name: "Sol",
        stars: [{ color: "YELLOW", size: 2 } as Star],
        ships: [
          { id: "2", color: "BLUE", size: 3, owner: "player1" },
          { id: "3", color: "BLUE", size: 2, owner: "player1" },
          { id: "4", color: "BLUE", size: 1, owner: "player2" },
          { id: "5", color: "BLUE", size: 1, owner: "player2" },
          { id: "6", color: "RED", size: 1, owner: "player2" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [],
  },
  result: {
    bank: {
      RED: [0, 0, 0],
      YELLOW: [0, 0, 0],
      GREEN: [0, 0, 0],
      BLUE: [2, 1, 1],
    },
    board: [
      {
        id: "1",
        name: "Sol",
        stars: [{ color: "YELLOW", size: 2 }],
        ships: [{ id: "6", color: "RED", size: 1, owner: "player2" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [
      /*{
      'action': 'catastrophe',
      'args': {
        'color': 'BLUE',
        'system': {id: "1"},
        'player': 'player1'
      },
      'systems': [{
        id: "1",
        name: 'Sol',
        stars: [{ color: 'YELLOW', size: 2 }],
        ships: [
          { id: "2", color: 'BLUE', size: 3, owner: 'player1' },
          { id: "3", color: 'BLUE', size: 2, owner: 'player1' },
          { id: "4", color: 'BLUE', size: 1, owner: 'player2' },
          { id: "5", color: 'BLUE', size: 1, owner: 'player2' },
          { id: "6", color: 'RED', size: 1, owner: 'player2' }
        ]
      }]
    }*/
    ],
  },
};

export default { valid, invalid, starIntact };
