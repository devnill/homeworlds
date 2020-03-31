const util = require('../util/');
const {createSystem} = util.bank;
const { error } = require('../strings');

function chooseHomeworld(state, args) {
  const {bank} = state;
  const {ships, stars, player} = args;
  const [homeworld] = createSystem(bank, {
    name: player,
    stars,
    ships,
    isHomeworld: true
  });
  if(homeworld === null){
    return error.bankInsufficent;
  }  
  return null;
}

module.exports = chooseHomeworld;