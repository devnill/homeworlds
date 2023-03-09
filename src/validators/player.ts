import { System, PlayerId, Color, State, ActionArgs } from "../types";

import { uniq } from "lodash";

function colorsAvailableToPlayer(system: System, player: PlayerId): Color[] {
  const playerShips = system.ships.filter((ship) => ship.owner === player);
  const shipColors = playerShips.map((ship) => ship.color);
  const starColors = system.stars.map((star) => star.color);
  return uniq([...shipColors, ...starColors]);
}

function playerHasColorAbility(
  system: System,
  player: PlayerId,
  color: Color
): boolean {
  return colorsAvailableToPlayer(system, player).indexOf(color) !== -1;
}
function isCurrentPlayer(state: State, args: ActionArgs): boolean {
  return args.player === state.players[state.activePlayer];
}

const player = {
  colorsAvailableToPlayer,
  playerHasColorAbility,
  isCurrentPlayer,
};
export { colorsAvailableToPlayer, playerHasColorAbility, isCurrentPlayer };
export default player;
