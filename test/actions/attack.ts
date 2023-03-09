import * as mocks from "../mocks/attack";
import attack from "../../src/actions/attack";
import { expect } from "chai";
import deepfreeze from "deep-freeze";
import { ActionArgs, State } from "../../src/types";

export default function attackSpecs(): void {
  it("can only take equal or smaller ships", function () {
    const mock = deepfreeze(mocks.valid);
    const result = attack(mock.state as State, mock.action as ActionArgs);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);
  });
}
