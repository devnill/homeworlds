import mocks from '../mocks/build';
import build from '../../src/actions/build';

import { expect } from 'chai';
import deepfreeze from 'deepfreeze';

export default function buildSpecs(): void {
  it('takes a piece from the bank of the smallest size', function () {
    const mock = deepfreeze(mocks.valid);
    const result = build(mock.state, mock.action);
    //todo check system to see if ship was properly created
    expect(result.board[0].ships.length).to.deep.equal(mock.result.board[0].ships.length);
    expect(result.bank).to.deep.equal(mock.result.bank);
    // expect(result.state).to.deep.equal(mock.result);
  });
};