import mocks from '../mocks/chooseHomeworld';
import chooseHomeworld from '../../src/actions/chooseHomeworld';
import { expect } from 'chai';

import deepfreeze from 'deepfreeze';

export default function chooseHomeworldSpecs(): void {
  it('can create a homeworld', function () {
    const mock = deepfreeze(mocks.valid);
    const initialState = mock.state;
    const actionResponse = chooseHomeworld(mock.state, mock.action);
    const { bank } = actionResponse;

    expect(bank.blue[2]).to.equal(initialState.bank.blue[2] - 1);
    expect(bank.yellow[1]).to.equal(initialState.bank.yellow[1] - 1);
    expect(bank.green[2]).to.equal(initialState.bank.yellow[1] - 1);
  });
  
};