import {partition} from 'lodash';
import {Board, System, Ship, Player, Piece, Color} from '../types/index.d';

function findSystem(board: Board, system: System): [System, Board] {
  if(!system){
    return [null, [...board]];
  }
  const [targetSystems, otherSystems] = partition(board, (s) => s.id === system.id);
  const targetSystem = targetSystems.length ? targetSystems[0] : null;
  return [targetSystem, otherSystems];
}
function findShip(ships: Ship[], ship: Ship): [Ship, Ship[]] {
  const [targetShips, otherShips] = partition(ships, (s) => s.id === ship.id);
  const targetShip = targetShips.length ? targetShips[0] : null;
  return [targetShip, otherShips];
}

function largestShipInSystem(system: System, player?: Player): number {
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

function findPiecesByColor(pieces: Piece[], color: Color): number {
  return pieces.filter((piece) => piece.color === color).length;
}

const find = {
  findPiecesByColor,
  largestShipInSystem,
  findShip,
  findSystem
};

export default find;