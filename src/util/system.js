
function largestShipInSystem(system, player = null) {
  const { ships = [] } = system;
  const shipsToSearch = player === null ? ships : ships.filter((ship) => ship.owner === player);
  let largest = 0;
  for (let i = 0; i < shipsToSearch.length; i++) {
    if (shipsToSearch[i].size >= largest) {
      largest = shipsToSearch[i].size;
    }
    if (largest === 3) {
      // we can bail early because nothing is bigger than 3
      return largest;
    }
  }
  return largest;
}


const system = {
  largestShipInSystem
};

module.exports = system;