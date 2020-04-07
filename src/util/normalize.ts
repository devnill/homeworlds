import {HistoryItem, System, Star, Ship, System} from '../types/index';
import { v4 as uuid } from 'uuid';

//todo figure out any
function historyItem(historyArgs: any): HistoryItem {
  const { action, args, delta, isSacrifice } = historyArgs;
  return {
    action,
    args,
    delta,
    isSacrifice
  };
}
function system(system: any): System{
  const { name, ships, stars } = system;
  return {
    name,
    id: uuid(),
    ships,
    stars,
    isHomeworldFor
  };
}
function star(star: any): Star {
  const { color, size, ships, isHomeworldFor = null } = star;
  return {
    color,
    size,
    ships
  };
}
function ship(ship): Ship {
  const ship = { color, size, owner } = ship;
  return {
    id: uuid(),
    color,
    size,
    owner
  };
}


const normalize = {
  historyItem,
  system,
  star,
  ship
};

export default normalize;
