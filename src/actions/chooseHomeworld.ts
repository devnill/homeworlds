import { bank, history } from '../util/index';
import { State, ActionArgs } from '../types/index';
import {normalize}  from '../util/index';


const {createSystem} = bank;

function chooseHomeworld(state: State, args: ActionArgs): State {
  const {bank} = state;
  const {ships, stars, player} = args;
  const [homeworld, updatedBank] = createSystem(bank, normalize.system({
    name: player,
    stars,
    ships,
    isHomeworldFor: player
  }));  
  
  const updatedState = history.add(state, {
    ...state,
    bank: updatedBank,
    board: [...state.board, homeworld]
  }, 'chooseHomeworld', args);

  return updatedState;
}
export default chooseHomeworld;