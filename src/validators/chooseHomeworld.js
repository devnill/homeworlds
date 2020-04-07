import util from '../util/';
const {createSystem} = util.bank;
import { error } from '../strings';

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

export default chooseHomeworld;