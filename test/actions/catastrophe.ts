import mocks from "../mocks/catastrophe";
import catastrophe from "../../src/actions/catastrophe";
import { expect } from "chai";
import deepfreeze from "deep-freeze";
import { ActionArgs, State } from "../../src/types";

interface TestFixture {
  action: ActionArgs;
  state: State;
  result: State;
}
export default function catastropheSpecs(): void {
  it("will return pieces to bank", function () {
    const { state, action, result } = mocks.starIntact;
    const mockResult = catastrophe(state as State, action as ActionArgs);
    expect(result.board).to.deep.equal(mockResult.board);
    expect(result.bank).to.deep.equal(mockResult.bank);
  });
  it("remove all pieces if the star is destroyed", function () {
    const { state, action, result } = deepfreeze(mocks.valid);
    const mockResult = catastrophe(state as State, action as ActionArgs);
    expect(result.board).to.deep.equal(mockResult.board);
    expect(result.bank).to.deep.equal(mockResult.bank);
  });
}
