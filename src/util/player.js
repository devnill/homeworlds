const player = {
  isCurrentPlayer(state, args) {
    return args.player === state.players[state.activePlayer];
  },
  colorsAvailableToPlayer(system, player) {
    return _.uniq([
      ...system.ships
        .filter((ship) => ship.owner === player)
        .map((ship) => ship.color),
      ...system.stars.map((star) => star.color)
    ]);
  },
  playerHasColorAbility(system, player, color) {
    return player.colorsAvailableToPlayer(system, player).indexOf(color) !== -1;
  },
  isPlayersTurn({ players, activePlayer }, { player }) {
    return player === players[activePlayer];
  }
};