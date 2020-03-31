const mocks = require('../mocks/').attack;
const {attack} = require('../../src/validators');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function attackSpecs() {
  
  it('cannot take larger ships', function () {
    const mock = deepfreeze(mocks.tooSmall);
    const result = attack(mock.state, mock.action);
    assert.isString(result);

  });
  it('cannot take ships in another system');
};