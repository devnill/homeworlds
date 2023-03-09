import { State } from "../../src/types";
import { ActionTestFixture } from "../test_fixtures";

const valid: ActionTestFixture = {
  action: {
    system: { id: "1" },
    color: "BLUE",
    player: "player1",
  },
  state: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [3, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [1, 0, 0],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "GREEN", size: 1 }],
        ships: [{ id: "3", color: "BLUE", size: 1, owner: "player1" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [],
  } as State,
  result: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [3, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [0, 0, 0],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 1 }],
        ships: [
          { id: "3", color: "BLUE", size: 1, owner: "player1" },
          { id: "4", color: "BLUE", size: 1, owner: "player1" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [],
  },
};
const missingColorInSystem: ActionTestFixture = {
  action: {
    player: "player1",
    system: { id: "1" },
    color: "BLUE",
  },
  state: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [3, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [1, 0, 0],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 1 }],
        ships: [{ id: "3", color: "BLUE", size: 1, owner: "player1" }],
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
      BLUE: [1, 0, 0],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 1 }],
        ships: [{ id: "3", color: "BLUE", size: 1, owner: "player1" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [],
  },
};
const missingPieceInBank: ActionTestFixture = {
  action: {
    player: "player1",
    system: { id: "1" },
    color: "BLUE",
  },
  state: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [3, 3, 3],
      GREEN: [2, 3, 3],
      BLUE: [0, 0, 0],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "GREEN", size: 1 }],
        ships: [{ id: "3", color: "BLUE", size: 1, owner: "player1" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [
      /*{
      action: 'build',
      args: {
        system: {id: "1"},
        color: 'BLUE'
      }
    }, {
      player: 'player1',
      action: 'endTurn'
    }*/
    ],
  },
  result: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [3, 3, 3],
      GREEN: [2, 3, 3],
      BLUE: [0, 0, 0],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "GREEN", size: 1 }],
        ships: [{ id: "3", color: "BLUE", size: 1, owner: "player1" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [
      /*{
      action: 'build',
      args: {
        system: {id: "1"},
        color: 'BLUE'
      }
    }, {
      player: 'player1',
      action: 'endTurn'
    }*/
    ],
  },
};

export default {
  valid,
  missingColorInSystem,
  missingPieceInBank,
};

export { valid, missingColorInSystem, missingPieceInBank };
