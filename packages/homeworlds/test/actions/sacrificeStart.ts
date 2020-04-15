import mocks from '../mocks/sacrificeStart';
import {sacrificeStart} from '../../src/actions';
import { expect } from 'chai';
import deepfreeze from 'deepfreeze';

export default function sacrificeStartSpect(): void {
  it('will return the sacrificed ship to the bank', function () {
    const mock = deepfreeze(mocks.valid);
    const result = sacrificeStart(mock.state, mock.action);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);
  });
  it('will return an unoccupied star to the bank', function () {
    const mock = deepfreeze(mocks.starReturned);
    const result = sacrificeStart(mock.state, mock.action);
    
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);
  });
  it('will update state to have sacrifice counters', function () {
    const mock = deepfreeze(mocks.valid);
    const result = sacrificeStart(mock.state, mock.action);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);
  });
};