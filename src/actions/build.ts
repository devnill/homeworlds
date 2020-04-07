import { State, ActionArgs } from '../types/index';
import {normalize}  from '../util/';

import util from '../util/';
const { history} = util;
const { findSystem } = util.find;
const { takeFromBank, countPieces } = util.bank;


function build(state: State, args: ActionArgs): State {
  const { board, bank } = state;
  const { system, color, player } = args;
  const [targetSystem, otherSystems] = findSystem(board, system);

  //todo move to validators
  const smallestSize = (bank[color].findIndex((size) => size > 0)) + 1;
  const ship = normalize.ship({
    owner: player,
    color,
    size: smallestSize
  });
  const updatedBank = takeFromBank(bank, countPieces([ship]));
  const updatedBoard = [
    ...otherSystems,
    {
      ...targetSystem,
      ships: [...targetSystem.ships, ship]
    }
  ];
  const updatedState = history.add(state, {
    ...state,
    board: updatedBoard,
    bank: updatedBank,
  },'attack', args);
  return updatedState;  
}
export default build;