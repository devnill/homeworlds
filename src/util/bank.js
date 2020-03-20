function countPieces(pieces) {
  return pieces.reduce((requiredPieces, piece) => {
    const size = piece.size - 1;
    const { color } = piece;
    requiredPieces[color][size]++;
    return requiredPieces;
  }, getEmptyBank());
}

function createSystem(bank, system) {
  const { ships, stars } = system;
  const requiredPieces = countPieces([...ships, ...stars]);
  const updatedBank = takeFromBank(bank, requiredPieces);
  if (!updatedBank) {
    // couldn't create the system
    return [null, bank];
  }
  return [{ ...system }, updatedBank];

}

function returnSystemToBank(bank, system) {
  const piecesToReturn = countPieces([...system.ships, system.stars]);
  const updatedBank = returnToBank(bank, piecesToReturn);
  return updatedBank;
}



function returnPiecesToBank(bank, pieces) {
  const piecesToReturn = countPieces(pieces);
  const updatedBank = returnToBank(bank, piecesToReturn);
  return updatedBank;
}

///////////////////////////////////////

function getUpdatedBank(bank, delta, operator = 1) {
  //const updatedCounts = ['red', 'blue', 'green', 'yellow']
  //  .map((color) => {
  //    // for each color iterate over the bank sizes and add the delta
  //    return {
  //      [color]: bank[color].map((pieceCount, size) => {
  //        return pieceCount + (delta[color][size] * operator);
  //      })
  //    };
  //  });
  //  
  const updatedBank = getEmptyBank();
  const colors = ['red', 'blue', 'green', 'yellow'];
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    for (let size = 0; size < 3; size++) {
      updatedBank[color][size] = bank[color][size] + (delta[color][size] * operator);

      if (updatedBank[color][size] < 0) {
        return null;
      }
    }
  }
  return updatedBank;
  //return (Object.assign({}, ...updatedCounts));
}

function returnToBank(bank, delta) {
  return getUpdatedBank(bank, delta, 1);
}

function takeFromBank(bank, delta) {
  return getUpdatedBank(bank, delta, -1);
}

function getEmptyBank() {
  return createBank(3);
}

function createBank(size = 3) {
  return {
    'red': [size, size, size],
    'yellow': [size, size, size],
    'green': [size, size, size],
    'blue': [size, size, size]
  };
}


const bank = {
  returnPiecesToBank,
  getUpdatedBank,
  returnToBank,
  takeFromBank,
  getEmptyBank,
  createBank,
  createSystem,
  returnSystemToBank
};

module.exports = bank;