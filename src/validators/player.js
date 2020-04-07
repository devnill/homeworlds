import _ from 'lodash';

function colorsAvailableToPlayer(system, player) {
  const playerShips = system.ships.filter((ship) => ship.owner === player);
  const shipColors = playerShips.map((ship) => ship.color);
  const starColors = system.stars.map((star) => star.color);
  return _.uniq([
    ...shipColors,
    ...starColors    
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
