import mocks from '../mocks/move';
import move from '../../src/validators/move';
import _ from 'lodash';
import { assert } from 'chai';
import deepfreeze from 'deepfreeze';

export default function moveSpecs(): void {

  it('cannot move between systems sharing a common sized star', function () {
    const mock = deepfreeze(mocks.invalidSize);
    const result = move(mock.state, mock.action);
    assert.isString(result);
  });

  it('cannot move to a new system if the piece is not in the bank', function () {
    const mock = deepfreeze(mocks.invalidSystem);
    const result = move(mock.state, mock.action);
    assert.isString(result);
  });
};
