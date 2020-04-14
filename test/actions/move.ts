import mocks from '../mocks/move';
import { move } from '../../src/actions';
import { expect } from 'chai';
import deepfreeze from 'deepfreeze';

export default function moveSpecs(): void {
  it('removes ship from first system and adds to the destination', function () {
    const mock = deepfreeze(mocks.valid);
    const result = move(mock.state, mock.action);
    expect(result.bank).to.deep.equal(mock.result.bank);
    expect(result.board).to.deep.equal(mock.result.board);
  });

  it('takes a piece from the bank if the system is new', function () {
    const mock = deepfreeze(mocks.newSystem);
    const result = move(mock.state, mock.action);
    expect(result.bank).to.deep.equal(mock.result.bank);
    expect(result.board).to.deep.equal(mock.result.board);
  });

};
