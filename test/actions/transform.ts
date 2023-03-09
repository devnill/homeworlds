import mocks from "../mocks/transform";
import transform from "../../src/actions/transform";
import { expect } from "chai";
import deepfreeze from "deep-freeze";

export default function transformSpecs(): void {
  it("will exchange ship for other color of same size", function () {
    const mock = mocks.valid;
    const result = transform(mock.state, mock.action);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);
  });
}
