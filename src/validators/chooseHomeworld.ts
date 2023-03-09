import { ErrorMessage, State, ActionArgs } from "../types";
import util from "../util/index";
const { createSystem } = util.bank;
import { error } from "../strings";
import { normalize } from "../util/index";

function chooseHomeworld(state: State, args: ActionArgs): ErrorMessage {
  const { bank } = state;
  const { ships, stars, player } = args;
  const [homeworld] = createSystem(
    bank,
    normalize.system({
      name: player,
      stars,
      ships,
      isHomeworldFor: player,
    })
  );
  if (homeworld === null) {
    return error.bankInsufficent;
  }
  return null;
}

export default chooseHomeworld;
