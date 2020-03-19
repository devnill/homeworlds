
const ship = {
  findShip(ships, ship) {
    const [targetShips, otherShips] = _.partition(ships, (s) => s.id === ship.id);
    const targetShip = targetShips.length ? targetShips[0] : null;
    return [targetShip, otherShips];
  }
};