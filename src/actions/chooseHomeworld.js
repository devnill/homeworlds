const {
  action,
  bank,
  history
} = require('../util/');

const {
  actionSuccess,
  actionFailure
} = action;

const {createSystem} = bank;
const { error } = require('../strings');

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
  
  
  const updatedState = history.add(state, {
    ...state,
    bank: updatedBank,
    board: [...state.board, homeworld]
  }, 'chooseHomeworld', args);

  return actionSuccess(updatedState);
}

module.exports = chooseHomeworld;