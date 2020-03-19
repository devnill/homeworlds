const utils = {
  pieces: require('./pieces')
};

function getUpdatedBank(bank, delta, operator = 1) {
  const updatedCounts = ['red', 'blue', 'green', 'yellow']
    .map((color) => {
      // for each color iterate over the bank sizes and add the delta
      return {
        [color]: bank[color].map((pieceCount, size) => {
          return pieceCount + (delta[color][size] * operator);
        })
      };
    });
  return (Object.assign({}, ...updatedCounts));
}

function returnToBank(bank, delta) {
  return bank.getUpdatedBank(bank, delta, 1);
}

function takeFromBank(bank, delta) {
  return bank.getUpdatedBank(bank, delta, -1);
}

function getEmptyBank() {
  return Object.assign({}, ...[
    'red',
    'yellow',
    'green',
    'blue'
  ].map((color) => {
    return { [color]: [0, 0, 0] };
  }));
}

function createBank() {
  return Object.assign({}, ...[
    'red',
    'yellow',
    'green',
    'blue'
  ].map((color) => {
    return { [color]: [3, 3, 3] };
  }));
}

function createSystem(bank, system) {
  const { ships, stars } = system;
  const requiredPieces = utils.pieces.countPieces([...ships, ...stars]);
  const updatedBank = bank.takeFromBank(bank, requiredPieces);
  const bankInvalid = bank.validateBank(updatedBank);
  if (bankInvalid) {
    return [null, bank];
  }
  return [{ ...system }, updatedBank];

}

function returnSystemToBank(bank, system) {
  const piecesToReturn = util.pieces.countPieces([...system.ships, system.stars]);
  const updatedBank = bank.returnToBank(bank, piecesToReturn);
  return updatedBank;
}

const bank = {
  getUpdatedBank,
  returnToBank,
  takeFromBank,
  getEmptyBank,
  createBank,
  createSystem,
  returnSystemToBank
};

module.exports = bank;