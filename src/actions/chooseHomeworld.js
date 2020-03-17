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
}

module.exports = chooseHomeworld;