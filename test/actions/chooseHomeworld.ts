import mocks from "../mocks/chooseHomeworld";
import chooseHomeworld from "../../src/actions/chooseHomeworld";
import { expect } from "chai";

export default function chooseHomeworldSpecs(): void {
  it("can create a homeworld", function () {
    const mock = mocks.valid;
    const initialState = mock.state;
    const actionResponse = chooseHomeworld(mock.state, mock.action);
    const { bank } = actionResponse;

    expect(bank.BLUE[2]).to.equal(initialState.bank.BLUE[2] - 1);
    expect(bank.YELLOW[1]).to.equal(initialState.bank.YELLOW[1] - 1);
    expect(bank.GREEN[2]).to.equal(initialState.bank.GREEN[1] - 1);
  });
}
