import { ActionTestFixture } from "../test_fixtures";

const valid: ActionTestFixture = {
  action: {
    player: "player1",
    stars: [
      {
        size: 3,
        color: "BLUE",
      },
      {
        size: 2,
        color: "YELLOW",
      },
    ],
    ships: [
      {
        size: 3,
        color: "GREEN",
        owner: "player1",
      },
    ],
  },
  state: {
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
  },
  result: {
    bank: {
      RED: [3, 3, 3],
      BLUE: [3, 3, 2],
      GREEN: [3, 3, 2],
      YELLOW: [3, 2, 3],
    },
    board: [
      {
        id: "1",
        name: "player1",
        isHomeworldFor: "player1",
        stars: [
          {
            id: "1",
            size: 3,
            color: "BLUE",
          },
          {
            id: "2",
            size: 2,
            color: "YELLOW",
          },
        ],
        ships: [
          {
            id: "3",
            size: 3,
            color: "GREEN",
            owner: "player1",
          },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [
      /*{
        'action': 'chooseHomeworld',
        'args': {
          'player': 'player1',
          'stars': [
            {
              'size': 3,
              'color': 'BLUE'
            },
            {
              'size': 2,
              'color': 'YELLOW'
            }
          ],
          'ships': [
            {
              'size': 3,
              'color': 'GREEN'
            }
          ]
        }
      }*/
    ],
  },
};

const insufficentPieces: ActionTestFixture = {
  action: {
    player: "player1",
    stars: [
      {
        size: 3,
        color: "BLUE",
        id: "1",
      },
      {
        size: 2,
        color: "BLUE",
        id: "2",
      },
    ],
    ships: [
      {
        size: 3,
        color: "BLUE",
        id: "3",
        owner: "4",
      },
    ],
  },
  state: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [3, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [0, 0, 0],
    },
    board: [],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [],
  },
  result: {
    bank: {
      RED: [3, 3, 3],
      YELLOW: [3, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [0, 0, 0],
    },
    board: [],
    players: ["player1", "player2"],
    activePlayer: 0,
    history: [],
  },
};

export { valid, insufficentPieces };
export default { valid, insufficentPieces };
