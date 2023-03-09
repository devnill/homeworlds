import mocks from "../mocks/sacrifice";
import sacrifice from "../../src/actions/sacrifice";
import { expect } from "chai";
//import deepfreeze from "deep-freeze";

export default function sacrificeSpecs(): void {
  it("will decrement sacrifice counter", function () {
    const mock = mocks.valid;
    const result = sacrifice(mock.state, mock.action);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);
  });
}
