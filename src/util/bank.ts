import {Piece, Bank, System} from '../types/index';


function createBank(size = 3): Bank {
  return {
    'red': [size, size, size],
    'yellow': [size, size, size],
    'green': [size, size, size],
    'blue': [size, size, size]
  };
}


function getEmptyBank(): Bank {
  return createBank(0);
}

function getUpdatedBank(bank: Bank, delta: Bank, operator = 1): Bank {
  const updatedBank = getEmptyBank();
  const colors = ['red', 'blue', 'green', 'yellow'];
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    for (let size = 0; size < 3; size++) {
      updatedBank[color][size] = bank[color][size] + (delta[color][size] * operator);

      // validate piece can be removed from bank.
      if (updatedBank[color][size] < 0) {
        return null;
      }
    }
  }
  return updatedBank;
}

function returnToBank(bank: Bank, delta: Bank): Bank {
  return getUpdatedBank(bank, delta, 1);
}

function takeFromBank(bank: Bank, delta: Bank): Bank {
  return getUpdatedBank(bank, delta, -1);
}

// Given an array of pieces, return a Bank containing the pieces provided.
function countPieces(pieces: Piece[]): Bank {
  return pieces.reduce((requiredPieces, piece) => {
    const size = piece.size - 1;
    const { color } = piece;
    requiredPieces[color][size]++;
    return requiredPieces;
  }, getEmptyBank());
}

function createSystem(bank: Bank, system: System): [System, Bank] {
  const { ships, stars } = system;
  const requiredPieces = countPieces([...ships, ...stars]);
  const updatedBank = takeFromBank(bank, requiredPieces);
  if (!updatedBank) {
    // couldn't create the system
    return [null, bank];
  }
  return [{ ...system }, updatedBank];

}

function returnPiecesToBank(bank: Bank, pieces: Piece[]): Bank {
  const piecesToReturn = countPieces(pieces);
  const updatedBank = returnToBank(bank, piecesToReturn);
  return updatedBank;
}

///////////////////////////////////////



const bank = {
  returnPiecesToBank,
  getUpdatedBank,
  returnToBank,
  takeFromBank,
  getEmptyBank,
  createBank,
  createSystem,
  countPieces
};

export default bank;