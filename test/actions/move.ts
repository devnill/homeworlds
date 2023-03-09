import mocks from "../mocks/move";
import move from "../../src/actions/move";
import { expect } from "chai";
//import deepfreeze from "deep-freeze";

export default function moveSpecs(): void {
  it("removes ship from first system and adds to the destination", function () {
    const mock = mocks.valid;
    const result = move(mock.state, mock.action);
    expect(result.bank).to.deep.equal(mock.result.bank);
    expect(result.board).to.deep.equal(mock.result.board);
  });

  it("takes a piece from the bank if the system is new", function () {
    const mock = mocks.newSystem;
    const result = move(mock.state, mock.action);
    expect(result.bank).to.deep.equal(mock.result.bank);
    expect(result.board).to.deep.equal(mock.result.board);
  });
}
