const _ = require('lodash');
let counter = 1;
function id() {
  return counter++;
}

function isCurrentPlayer(state, args) {
  return args.player === state.players[state.activePlayer];
}

function countPieces(pieces) {
  return pieces.reduce((requiredPieces, piece) => {
    const size = piece.size - 1;
    const { color } = piece;
    requiredPieces[color][size]++;
    return requiredPieces;
  }, {
    red: [0, 0, 0],
    blue: [0, 0, 0],
    green: [0, 0, 0],
    yellow: [0, 0, 0]
  });
}
function countPiecesOfColor(pieces, color) {
  return pieces.filter((piece) => piece.color === color).length;
}
function actionSuccess(state) {
  return {
    err: null,
    state
  };
}

function colorsAvailableToPlayer(system, player) {
  return _.uniq([
    ...system.ships
      .filter((ship) => ship.owner === player)
      .map((ship) => ship.color),
    ...system.stars.map((star) => star.color)
  ]);
}

function playerHasColorAbility(system, player, color) {
  return colorsAvailableToPlayer(system, player).indexOf(color) !== -1;
}

function actionFailure(state, reason) {
  return {
    err: reason || true,
    state
  };
}
function getUpdatedBank(state, delta) {
  const updatedCounts = ['red', 'blue', 'green', 'yellow']
    .map((color) => {
      // for each color iterate over the bank sizes and add the delta
      return {
        [color]: state.bank[color].map((pieceCount, size) => {
          return pieceCount + delta[color][size];

        })
      };
    });
  return (Object.assign({}, ...updatedCounts));
}

function standardValidation(state, args) {
  // check to see if its the players turn
  if (!isCurrentPlayer(state, args)) {
    return 'not your turn';
  }

  // check to see if the player has played yet
  if (state.history.filter((actionObj) => actionObj.player === args.player && actionObj.action !== 'endTurn') > 1) {
    return 'already player';
  }
  return null;
}
function getEmptyBank() {
  return Object.assign({}, ...[
    'red',
    'yellow',
    'green',
    'blue'
  ].map((color) => {
    return { [color]: [0,0,0] };
  }));
}

function createBank() {
  return Object.assign({}, ...[
    'red',
    'yellow',
    'green',
    'blue'
  ].map((color) => {
    return { [color]: [3, 3, 3] };
  }));
}

function initState() {
  return {
    bank: createBank(),
    board: [],
    players: ['player1', 'player2'],
    activePlayer: 0,
    history: []
  };
}
function findShip(ships, id) {
  const [targetShips, otherShips] = _.partition(ships, (ship) => ship.id === id);
  const targetShip = targetShips.length ? targetShips[0] : null;
  return [targetShip, otherShips];
}

function findSystem(board, id) {
  const [targetSystems, otherSystems] = _.partition(board, (system) => system.id === id);
  const targetSystem = targetSystems.length ? targetSystems[0] : null;
  return [targetSystem, otherSystems];
}

function largestShipInSystem(system, player=null) {
  const { ships = [] } = system;
  const shipsToSearch = player === null ? ships : ships.filter((ship) => ship.owner === player); 
  let largest = 0;
  for (let i = 0; i < shipsToSearch.length; i++) { 
    if (shipsToSearch[i].size >= largest) { 
      largest = shipsToSearch[i].size;
    }
    if (largest === 3) {
      // we can bail early because nothing is bigger than 3
      return largest;
    }
  }
  return largest;
}

module.exports = {
  id,
  initState,
  getEmptyBank,
  isCurrentPlayer,
  countPieces,
  countPiecesOfColor,
  actionSuccess,
  actionFailure,
  standardValidation,
  getUpdatedBank,
  playerHasColorAbility,
  colorsAvailableToPlayer,
  // these should be refactored
  findSystem,
  findShip,
  largestShipInSystem
};