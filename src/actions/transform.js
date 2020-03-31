const {
  bank,
  find,
  history
} = require('../util/');

const {
  returnToBank,
  getEmptyBank
} = bank;

const {
  findSystem,
  findShip
} = find;



function transform(state, args) {
  const { board, bank } = state;
  const { ship, system, color } = args;
  const [targetSystem, otherSystems] = findSystem(board, system);
  const [targetShip, otherShips] = findShip(targetSystem.ships, ship);

  // update bank
  const bankDelta = getEmptyBank();
  bankDelta[targetShip.color][targetShip.size - 1]++;
  bankDelta[color][targetShip.size - 1]--;
  const updatedBank = returnToBank(bank, bankDelta);
  
  // update system
  const transformedShip = Object.assign({}, targetShip, { color });
  const updatedSystem = Object.assign({}, targetSystem, {
    ships: [...otherShips, transformedShip],
  });
  
  // update state
  const updatedState = history.add(state, Object.assign({}, state, {
    bank: updatedBank,
    board: [...otherSystems, updatedSystem]
  }), 'transform', args);
  return updatedState;
}
module.exports = transform;