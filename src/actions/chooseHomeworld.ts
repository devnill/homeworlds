import { bank, updateTurn } from "../util/index";
import { State, ActionArgs } from "../types";
import { normalize } from "../util/index";

const { createSystem } = bank;

function chooseHomeworld(state: State, args: ActionArgs): State {
  const { bank } = state;
  const { ships, stars, player } = args;
  const [homeworld, updatedBank] = createSystem(
    bank,
    normalize.system({
      name: player,
      stars,
      ships,
      isHomeworldFor: player,
    })
  );

  if (!homeworld) {
    return state;
  }

  //const updatedState = history.add(
  //  state,
  //  {
  //    ...state,
  //    bank: updatedBank,
  //    board: [...state.board, homeworld],
  //  },
  //  "CHOOSE_HOMEWORLD",
  //  args
  //);

  const updatedState = {
    ...state,
    bank: updatedBank,
    board: [...state.board, homeworld],
  };
  return updateTurn(state, updatedState, {action: 'CHOOSE_HOMEWORLD', args}) 
  //return updatedState;
}
export default chooseHomeworld;
