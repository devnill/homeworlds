import {System, Player, Color, State, ActionArgs} from '../types/index.d';

import {uniq} from 'lodash';

function colorsAvailableToPlayer(system, player):Color[] {
  const playerShips = system.ships.filter((ship) => ship.owner === player);
  const shipColors = playerShips.map((ship) => ship.color);
  const starColors = system.stars.map((star) => star.color);
  return uniq([
    ...shipColors,
    ...starColors    
  ]);
}

function playerHasColorAbility(system: System, player: Player, color: Color): Boolean {
  return colorsAvailableToPlayer(system, player).indexOf(color) !== -1;
}
function isCurrentPlayer(state: State, args: ActionArgs): Boolean {
  return args.player === state.players[state.activePlayer];
}

const player = {
  colorsAvailableToPlayer,
  playerHasColorAbility,
  isCurrentPlayer
};
export {
  colorsAvailableToPlayer,
  playerHasColorAbility,
  isCurrentPlayer
};
export default player;
