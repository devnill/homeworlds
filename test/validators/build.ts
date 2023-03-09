import mocks from "../mocks/build";
import { error } from "../../src/strings";
import { build } from "../../src/validators";
import { expect, assert } from "chai";
import deepfreeze from "deep-freeze";

export default function buildSpecs(): void {
  it.skip("can only build a ship if a like ship color is controlled in system", function () {
    const mock = mocks.missingColorInSystem;
    const result = build(mock.state, mock.action);
    // expect(result.state).to.deep.equal(mock.result);
    assert.isString(result);
    expect(result).to.equal(error.invalidAbility);
  });
  it("will not allow building if the piece does not exist in the bank", function () {
    const mock = mocks.missingPieceInBank;
    const result = build(mock.state, mock.action);
    // expect(result.state).to.deep.equal(mock.result);
    assert.isString(result);
    expect(result).to.equal(error.bankInsufficent);
  });
}
