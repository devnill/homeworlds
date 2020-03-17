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
  }, getEmptyBank());
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

function actionFailure(state, reason) {
  return {
    err: reason || true,
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


function getUpdatedBank(bank, delta, operator = 1) {
  const updatedCounts = ['red', 'blue', 'green', 'yellow']
    .map((color) => {
      // for each color iterate over the bank sizes and add the delta
      return {
        [color]: bank[color].map((pieceCount, size) => {
          return pieceCount + (delta[color][size] * operator);
        })
      };
    });
  return (Object.assign({}, ...updatedCounts));
}

function returnToBank(bank, delta) {
  return getUpdatedBank(bank, delta, 1);
}

function takeFromBank(bank, delta){
  return getUpdatedBank(bank, delta, -1);
};

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

function validateBank(bank){
  const invalidBankSection = ['green', 'red', 'yellow', 'blue']
    .find((color)=>{
      return bank[color].find((size)=>{
        return bank[color][size]<0;
      });
    });
  return !!invalidBankSection;
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

function findShip(ships, ship) {
  const [targetShips, otherShips] = _.partition(ships, (s) => s.id === ship.id);
  const targetShip = targetShips.length ? targetShips[0] : null;
  return [targetShip, otherShips];
}

function findSystem(board, system) {
  const [targetSystems, otherSystems] = _.partition(board, (s) => s.id === system.id);
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

function getStarFromBank (bank, star){

}

function createSystem (bank, system){
  const {ships, stars} = system;
  const requiredPieces = countPieces([...ships, ...stars]);
  const updatedBank = takeFromBank(bank, requiredPieces);
  const bankInvalid = validateBank(updatedBank);
  if(bankInvalid){
    return [null, bank];
  }
  return [{...system}, updatedBank];
  
}

function returnSystemToBank(bank, system){
  const piecesToReturn = countPieces([...system.ships, system.stars]);
  const updatedBank = returnToBank(bank, piecesToReturn);
  return updatedBank;
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
  returnToBank,
  takeFromBank,
  getUpdatedBank,
  playerHasColorAbility,
  colorsAvailableToPlayer,
  // these should be refactored
  findSystem,
  findShip,
  largestShipInSystem,
  getStarFromBank,
  createSystem,
  returnSystemToBank
};