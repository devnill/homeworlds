import mocks from '../mocks/attack';
import { attack } from '../../src/validators';
import { assert } from 'chai';
import deepfreeze from 'deepfreeze';

export default function attackSpecs(): void {
  
  it('cannot take larger ships', function () {
    const mock = deepfreeze(mocks.tooSmall);
    const result = attack(mock.state, mock.action);
    assert.isString(result);

  });
  it('cannot take ships in another system');
};