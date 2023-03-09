import { State } from "../../src/types";

const state: State = {
  bank: {
    RED: [3, 3, 3],
    YELLOW: [3, 3, 3],
    GREEN: [3, 3, 3],
    BLUE: [3, 3, 3],
  },
  board: [],
  players: ["player1", "player2"],
  activePlayer: 0,
  history: [],
  turn: {
    sacrifice: {
      color: "BLUE",
      count: 3,
    },
  },
};
const sacrificeInProgress = {
  action: {
    player: "player1",
  },
  state,
  result: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [3, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [3, 3, 3],
    },
    board: [],
    players: ["player1", "player2"],
    activePlayer: 2,
    history: [
      /*{
      action: 'endTurn',
      args: {
        player: 'player1'
      }
    }*/
    ],
    turn: {
      sacrifice: {
        color: "BLUE",
        count: 3,
      },
    },
  },
};

const valid = sacrificeInProgress;

export { sacrificeInProgress, valid };
export default { sacrificeInProgress, valid };
