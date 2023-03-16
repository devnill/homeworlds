import mocks from "../mocks/endTurn";
import endTurn from "../../src/actions/endTurn";
import { expect } from "chai";
import game from "../../src/util/";

import deepfreeze from "deep-freeze";
import { State } from "../../src/types";

export default function endTurnSpecs(): void {
  it("will updateCurrentPlayer", function () {
    const initialState = game.initState(["player1", "player2"]);
    deepfreeze(initialState);
    const actionResponse = endTurn(initialState, {
      player: "player1",
    });
    expect(actionResponse.activePlayer).to.not.equal(initialState.activePlayer);
  });
  it("will reset turn state", function () {
    const mock = mocks.sacrificeInProgress;
    const initialState: State = mock.state;
    const actionResponse = endTurn(initialState, mock.action);
    expect(actionResponse.activePlayer).to.not.equal(initialState.activePlayer);
    console.log(JSON.stringify(actionResponse, null, 2))
    expect(actionResponse.turn).to.not.exist;
  });
}
