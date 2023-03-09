import { ActionTestFixture } from "../test_fixtures";

const valid: ActionTestFixture = {
  action: {
    player: "player1",
    system: { id: "1" },
    ship: { id: "3" },
    color: "YELLOW", //transforms ship 3 to YELLOW
  },
  state: {
    bank: {
      RED: [2, 3, 3],
      YELLOW: [3, 3, 3],
      GREEN: [0, 0, 0],
      BLUE: [2, 3, 3],
    },
    board: [
      {
        id: "1",
        name: "vulcan",
        ships: [{ id: "3", size: 1, color: "BLUE", owner: "player1" }],
        stars: [{ size: 1, color: "RED" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [],
    turn: null,
  },
  result: {
    bank: {
      RED: [2, 3, 3],
      YELLOW: [2, 3, 3],
      GREEN: [0, 0, 0],
      BLUE: [3, 3, 3],
    },
    board: [
      {
        id: "1",
        name: "vulcan",
        ships: [{ id: "3", size: 1, color: "YELLOW", owner: "player1" }],
        stars: [{ size: 1, color: "RED" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [
      /*{
      action: 'transform',
      args: {
        player: 'player1',
        system: {id: "1"},
        ship: {id: "3"},
        color: 'YELLOW'
      },
      systems: [{
        id: "1",
        name: 'vulcan',
        ships: [{ id: "3", size: 1, color: 'BLUE', owner: 'player1' }],
        stars: [{ size: 1, color: 'RED' }]
      }]
    }*/
    ],
    turn: null,
  },
};

export { valid };
export default { valid };
