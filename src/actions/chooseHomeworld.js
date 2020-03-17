const {
  standardValidation,
  countPieces,
  actionSuccess,
  actionFailure,
  createSystem
} = require('../util.js');
const { error } = require('../strings.js');

function chooseHomeworld(state, args) {
  const {bank} = state;
  const {ships, stars, player} = args;
  const [homeworld, updatedBank] = createSystem(bank, {
    name: player,
    stars,
    ships,
    isHomeworld: true
  });
  
  if(homeworld === null){
    return actionFailure(state, error.bankInsufficent);
  }
  return actionSuccess({
    ...state,
    bank: updatedBank,
    board: [...state.board, homeworld]
  });
  /*
  const updatedBank = {
    red: [...state.bank.red],
    blue: [...state.bank.blue],
    green: [...state.bank.green],
    yellow: [...state.bank.yellow]
  };

  const validationError = standardValidation(state, args);
  if (validationError) {
    return actionFailure(state, validationError);
  }

  const requiredPieces = countPieces([...args.stars, ...args.ships]);

  for (const color in updatedBank) {
    for (let size = 0; size < updatedBank[color].length; size++) {
      updatedBank[color][size] -= requiredPieces[color][size];
      if (updatedBank[color][size] < 0) {
        return actionFailure(state, 'insufficent resources in bank to perform action');
      }
    }
  }

  const updatedBoard = [...state.board, {
    name: 'player1',
    star: [{
      size: 3,
      color: 'blue'
    }, {
      size: 2,
      color: 'yellow'
    }],
    ships: [{
      size: 3,
      color: 'green',
      owner: 'player1'
    }]
  }];

  const updatedHistory = [...state.history, Object.assign({ action: 'chooseHomeworld', args })];

  return actionSuccess(Object.assign({}, state, {
    board: updatedBoard,
    bank: updatedBank,
    //history: updatedHistory
  }));
  */
}

module.exports = chooseHomeworld;