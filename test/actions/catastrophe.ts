import mocks from '../mocks/catastrophe';
import catastrophe from '../../src/actions/catastrophe';
import { expect } from 'chai';
import deepfreeze from 'deepfreeze';

export default function catastropheSpecs(): void {
  it('will return pieces to bank', function () {
    const mock = deepfreeze(mocks.starIntact);
    const result = catastrophe(mock.state, mock.action);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);

  });
  it('remove all pieces if the star is destroyed', function () {
    const mock = deepfreeze(mocks.valid);
    const result = catastrophe(mock.state, mock.action);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);
  });
};