import { ActionTestFixture } from "../test_fixtures";

const valid: ActionTestFixture = {
  action: {
    player: "player1",
    from: { id: "2", name: "", ships: [], stars: [] },
    to: { id: "1", name: "", ships: [], stars: [] },
    ship: { id: "3", owner: "player1", color: "GREEN", size: 3 }, //moves ship 3 from system 1 to system 2
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
        ships: [{ id: "5", color: "YELLOW", size: 1, owner: "player2" }],
      },
      {
        id: "2",
        name: "Sol",
        stars: [{ color: "YELLOW", size: 2 }],
        ships: [
          { id: "4", color: "YELLOW", size: 1, owner: "player2" },
          { id: "3", color: "RED", size: 1, owner: "player1" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [
      /*{
      action: 'MOVE',
      args: {
        player: 'player1',
        from: {id: "2"},
        to: {id: "1"},
        ship: {id: "3"}
      },
      systems: []
    }*/
    ],
  },
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
          { id: "5", color: "YELLOW", size: 1, owner: "player2" },
          { id: "3", color: "RED", size: 1, owner: "player1" },
        ],
      },
      {
        id: "2",
        name: "Sol",
        stars: [{ color: "YELLOW", size: 2 }],
        ships: [{ id: "4", color: "YELLOW", size: 1, owner: "player2" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [
      /*{
      action: 'move',
      args: {
        player: 'player1',
        from: {id: "2"},
        to: {id: "1"},
        ship: {id: "3"}
      },
      systems: [{
        id: "1",
        name: 'Andoria',
        stars: [{ color: 'BLUE', size: 1 }],
        ships: [
          { id: "5", color: 'YELLOW', size: 1, owner: 'player2' }
        ]
      },
      {
        id: "2",
        name: 'Sol',
        stars: [{ color: 'YELLOW', size: 2 }],
        ships: [
          { id: "4", color: 'YELLOW', size: 1, owner: 'player2' },
          { id: "3", color: 'RED', size: 1, owner: 'player1' }
        ]
      }]
    }*/
    ],
  },
};

const invalidSize: ActionTestFixture = {
  action: {
    player: "player1",
    from: { id: "2" },
    to: { id: "1", ships: [], stars: [], name: "" },
    ship: { id: "3" }, //moves ship 3 from system 1 to system 2
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
        stars: [{ color: "BLUE", size: 2 }],
        ships: [{ id: "5", color: "YELLOW", size: 1, owner: "player2" }],
      },
      {
        id: "2",
        name: "Sol",
        stars: [{ color: "YELLOW", size: 2 }],
        ships: [
          { id: "4", color: "YELLOW", size: 1, owner: "player2" },
          { id: "3", color: "RED", size: 1, owner: "player1" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [
      /*{
      action: 'MOVE',
      args: {
        player: 'player1',
        from: {id: "2"},
        to: {id: "1"},
        ship: {id: "3"}
      },
      systems: []
    }*/
    ],
  },
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
        stars: [{ color: "BLUE", size: 2 }],
        ships: [{ id: "5", color: "YELLOW", size: 1, owner: "player2" }],
      },
      {
        id: "2",
        name: "Sol",
        stars: [{ color: "YELLOW", size: 2 }],
        ships: [
          { id: "4", color: "YELLOW", size: 1, owner: "player2" },
          { id: "3", color: "RED", size: 1, owner: "player1" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [
      /*{
      action: 'MOVE',
      args: {
        player: 'player1',
        from: {id: "2"},
        to: {id: "1"},
        ship: {id: "3"}
      },
      systems: []
    }*/
    ],
  },
};

const newSystem: ActionTestFixture = {
  action: {
    player: "player1",
    from: {
      id: "2",
      ships: [{ id: "3", owner: "player1", color: "GREEN", size: 3 }],
      stars: [],
      name: "",
    },
    to: {
      id: "6",
      name: "Newberg",
      stars: [{ id: "7", color: "BLUE", size: 3 }],
      ships: [],
    },
    ship: { id: "3", owner: "player1", color: "GREEN", size: 3 },
  },
  state: {
    bank: {
      RED: [2, 2, 3],
      YELLOW: [2, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [3, 2, 3],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 2 }],
        ships: [{ id: "5", color: "YELLOW", size: 1, owner: "player2" }],
      },
      {
        id: "2",
        name: "Sol",
        stars: [{ color: "RED", size: 2 }],
        ships: [
          { id: "4", color: "YELLOW", size: 1, owner: "player2" },
          { id: "3", color: "RED", size: 1, owner: "player1" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [
      /*{
      action: 'move',
      args: {
        player: 'player1',
        from: {id: "2"},
        to: {id: "1"},
        ship: {id: "3"}
      },
      systems: []
    }*/
    ],
  },
  result: {
    bank: {
      RED: [2, 2, 3],
      YELLOW: [2, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [3, 2, 2],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 2 }],
        ships: [{ id: "5", color: "YELLOW", size: 1, owner: "player2" }],
      },
      {
        id: "6",
        name: "Newberg",
        stars: [{ id: "7", color: "BLUE", size: 3 }],
        ships: [{ id: "3", color: "RED", size: 1, owner: "player1" }],
      },
      {
        id: "2",
        name: "Sol",
        stars: [{ color: "RED", size: 2 }],
        ships: [{ id: "4", color: "YELLOW", size: 1, owner: "player2" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [
      /*{
      action: 'move',
      args: {
        player: 'player1',
        from: {id: "2"},
        to: {id: "1"},
        ship: {id: "3"}
      },
      systems: []
    }*/
    ],
  },
};

const invalidSystem: ActionTestFixture = {
  action: {
    player: "player1",
    from: {
      id: "2",
      ships: [{ id: "3", owner: "", color: "GREEN", size: 3 }],
    },
    to: {
      id: "6",
      name: "Newberg",
      stars: [{ id: "7", color: "BLUE", size: 3 }],
      ships: [],
    },
    ship: { id: "3" },
  },
  state: {
    bank: {
      RED: [2, 2, 3],
      YELLOW: [2, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [3, 2, 0],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 2 }],
        ships: [{ id: "5", color: "YELLOW", size: 1, owner: "player2" }],
      },
      {
        id: "2",
        name: "Sol",
        stars: [{ color: "RED", size: 2 }],
        ships: [
          { id: "4", color: "YELLOW", size: 1, owner: "player2" },
          { id: "3", color: "RED", size: 1, owner: "player1" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [
      /*{
      action: 'move',
      args: {
        player: 'player1',
        from: {id: "2"},
        to: {id: "1"},
        ship: {id: "3"}
      },
      systems: []
    }*/
    ],
  },
  result: {
    bank: {
      RED: [2, 2, 3],
      YELLOW: [2, 3, 3],
      GREEN: [3, 3, 3],
      BLUE: [3, 2, 0],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 2 }],
        ships: [{ id: "5", color: "YELLOW", size: 1, owner: "player2" }],
      },
      {
        id: "2",
        name: "Sol",
        stars: [{ color: "RED", size: 2 }],
        ships: [
          { id: "4", color: "YELLOW", size: 1, owner: "player2" },
          { id: "3", color: "RED", size: 1, owner: "player1" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [
      /*{
      action: 'move',
      args: {
        player: 'player1',
        from: {id: "2"},
        to: {id: "1"},
        ship: {id: "3"}
      },
      systems: []
    }*/
    ],
  },
};

const systemLost: ActionTestFixture = {
  action: {
    player: "player1",
    from: { id: "2" },
    to: { id: "1", stars: [], ships: [], name: "" },
    ship: { id: "4" }, //moves ship 3 from system 1 to system 2
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
        name: "Andoria",
        stars: [{ color: "BLUE", size: 1 }],
        ships: [{ id: "5", color: "YELLOW", size: 1, owner: "player2" }],
      },
      {
        id: "2",
        name: "Sol",
        stars: [{ color: "YELLOW", size: 2 }],
        ships: [{ id: "4", color: "YELLOW", size: 1, owner: "player2" }],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [],
  },
  result: {
    bank: {
      RED: [0, 0, 0],
      YELLOW: [0, 1, 0],
      GREEN: [0, 0, 0],
      BLUE: [0, 0, 0],
    },
    board: [
      {
        id: "1",
        name: "Andoria",
        stars: [{ color: "BLUE", size: 1 }],
        ships: [
          { id: "5", color: "YELLOW", size: 1, owner: "player2" },
          { id: "4", color: "YELLOW", size: 1, owner: "player2" },
        ],
      },
    ],
    players: ["player1", "player2"],
    activePlayer: 0,
    turn: null,
    history: [],
  },
};

export { valid, invalidSize, newSystem, invalidSystem, systemLost };
export default { valid, invalidSize, newSystem, invalidSystem, systemLost };
