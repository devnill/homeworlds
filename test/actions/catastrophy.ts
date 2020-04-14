import mocks from '../mocks/catastrophy';
import catastrophy from '../../src/actions/catastrophy';
import { expect } from 'chai';
import deepfreeze from 'deepfreeze';

export default function catastrophySpecs(): void {
  it('will return pieces to bank', function () {
    const mock = deepfreeze(mocks.starIntact);
    const result = catastrophy(mock.state, mock.action);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);

  });
  it('remove all pieces if the star is destroyed', function () {
    const mock = deepfreeze(mocks.valid);
    const result = catastrophy(mock.state, mock.action);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);
  });
};