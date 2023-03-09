import mocks from "../mocks/chooseHomeworld";
import { chooseHomeworld } from "../../src/validators/index";
import { assert } from "chai";
import _ from "lodash";
import deepfreeze from "deep-freeze";

export default function chooseHomeworldSpecs(): void {
  it.skip("will fail if its not the current players turn", function () {
    const mock = _.cloneDeep(mocks.valid);
    mock.state.activePlayer = 1;
    deepfreeze(mock);
    //const actionResponse = chooseHomeworld(mock.state, mock.action);
    //assert.isString(actionResponse);
  });
  it("will fail if there are not enough pieces in the bank", function () {
    const mock = _.cloneDeep(mocks.insufficentPieces);
    const initialState = mock.state;
    const actionResponse = chooseHomeworld(initialState, mock.action);
    assert.isString(actionResponse);
  });
  it("will fail if exactly two stars are not provided");
  it("will fail if exactly one ship is not provided");
}
