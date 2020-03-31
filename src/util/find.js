const _ = require('lodash');
function findSystem(board, system) {
  if(!system){
    return [null, [...board]];
  }
  const [targetSystems, otherSystems] = _.partition(board, (s) => s.id === system.id);
  const targetSystem = targetSystems.length ? targetSystems[0] : null;
  return [targetSystem, otherSystems];
}
function findShip(ships, ship) {
  const [targetShips, otherShips] = _.partition(ships, (s) => s.id === ship.id);
  const targetShip = targetShips.length ? targetShips[0] : null;
  return [targetShip, otherShips];
}

function largestShipInSystem(system, player = null) {
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

function findPiecesByColor(pieces, color) {
  return pieces.filter((piece) => piece.color === color).length;
}

const find = {
  findPiecesByColor,
  largestShipInSystem,
  findShip,
  findSystem
};

module.exports = find;