import { uniq } from 'lodash';

function colorsAvailableToPlayer(system, player) {
  return uniq([
    ...system.ships
      .filter((ship) => ship.owner === player)
      .map((ship) => ship.color),
    ...system.stars.map((star) => star.color)
  ]);
}

function playerHasColorAbility(system, player, color) {
  return colorsAvailableToPlayer(system, player).indexOf(color) !== -1;
}
function isCurrentPlayer(state, args) {
  return args.player === state.players[state.activePlayer];
}

const player = {
  colorsAvailableToPlayer,
  playerHasColorAbility,
  isCurrentPlayer
};

export default player;