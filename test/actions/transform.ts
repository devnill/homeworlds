import mocks from '../mocks/transform';
import {transform} from'../../src/actions';
import { expect } from 'chai';
import deepfreeze from 'deepfreeze';

export default function transformSpecs(): void {
  it('will exchange ship for other color of same size', function () {
    const mock = deepfreeze(mocks.valid);
    const result = transform(mock.state, mock.action);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);
  });

};