import { ActionTestFixture } from "../test_fixtures";

const blue: ActionTestFixture = {
  action: {
    player: "player1",
    system: {
      id: "1",
      name: "",
      ships: [{ id: "3", color: "YELLOW", size: 3, owner: "player1" }],
      stars: [],
    },
    ship: { id: "3", color: "YELLOW", size: 3, owner: "player1" },
    color: "BLUE", // transforms ship to blue system 1
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
        ships: [{ id: "3", color: "YELLOW", size: 1, owner: "player1" }],
      },
    ],
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
      /*
      {
      'action': 'sacrificeStart',
      'args': {
        ship: {id:2},
        system: {id: "1"}
      },
      systems: [{
        id: "1",
        name: 'Andoria',
        stars: [{ color: 'blue', size: 1 }],
        ships: [
          { id: "2", color: 'blue', size: 1, owner: 'player1' },
          { id: "3", color: 'yellow', size: 1, owner: 'player1' }]
      }]
    }*/
    ],
  },
  result: {
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
        ships: [{ id: "3", color: "BLUE", size: 1, owner: "player1" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: {
      sacrifice: {
        color: "BLUE",
        count: 0,
      },
      actions:[]
    },
    history: [
      /*{
      'action': 'sacrificeStart',
      'args': {
        ship: {id: "2"},
        system: {id: "1"}
      },
      systems: [{
        id: "1",
        name: 'Andoria',
        stars: [{ color: 'blue', size: 1 }],
        ships: [
          { id: "2", color: 'blue', size: 1, owner: 'player1' },
          { id: "3", color: 'yellow', size: 1, owner: 'player1' }
        ]
      }]
  },
  {
    action: 'transform',
    args: {
      ship: {id: "3"},
      system: {id: "1"},
      color: 'blue',
      player: 'player1',
    },
    isSacrifice: true,
    systems: [{
      id: "1",
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: "3", color: 'yellow', size: 1, owner: 'player1' }
      ]
    }]
  }*/
    ],
  },
};

const green = {
  action: {
    system: { id: "1" },
    color: "GREEN", //builds a green ship in system 1
  },
};

const red = {
  action: {
    player: "player1",
    system: { id: "1" },
    ship: { id: "3" },
    color: "RED", //captures ship 3 in system 1
  },
};

const yellow = {
  action: {
    player: "player1",
    from: { id: "1" },
    to: { id: "2" },
    ship: { id: "3" },
    color: "YELLOW", //moves ship 3 from system 1 to system 2
  },
};

const valid = blue;
export { valid, blue, yellow, red, green };
export default { valid, blue, yellow, red, green };
