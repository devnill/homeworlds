const {
  bank,
  history
} = require('../util/');


const {createSystem} = bank;

function chooseHomeworld(state, args) {
  const {bank} = state;
  const {ships, stars, player} = args;
  const [homeworld, updatedBank] = createSystem(bank, {
    name: player,
    stars,
    ships,
    isHomeworld: true
  });  
  
  const updatedState = history.add(state, {
    ...state,
    bank: updatedBank,
    board: [...state.board, homeworld]
  }, 'chooseHomeworld', args);

  return updatedState;
}

module.exports = chooseHomeworld;