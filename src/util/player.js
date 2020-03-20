const _ = require('lodash');



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


const player = {
  colorsAvailableToPlayer,
  playerHasColorAbility,

};

module.exports = player;