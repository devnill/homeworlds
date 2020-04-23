import {/*HistoryItem, */ System, Star, Ship} from '../types/index';
import { v4 as uuid } from 'uuid';

//todo figure out any
/*
function historyItem(historyArgs: any): jos {
  const { action, args, delta, isSacrifice } = historyArgs;
  return {
    action,
    args,
    delta,
    isSacrifice
  };
}*/

function system(system: any): System{
  const { name, ships, stars, isHomeworldFor } = system;
  return {
    name,
    id: uuid(),
    ships,
    stars,
    isHomeworldFor
  };
}
function star(star: any): Star {
  const { color, size } = star;
  return {
    color,
    size
  };
}
function ship(ship: any): Ship {
  const { color, size, owner } = ship;
  return {
    id: uuid(),
    color,
    size,
    owner
  };
}


const normalize = {
  //historyItem,
  system,
  star,
  ship
};

export default normalize;
