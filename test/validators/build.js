const mocks = require('../mocks/').build;
const { error } = require('../../src/strings');
const { build } = require('../../src/validators');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function buildSpecs() {
  it('can only build a ship if a like ship color is controlled in system', function () {
    const mock = deepfreeze(mocks.missingColorInSystem);
    const result = build(mock.state, mock.action);
    // expect(result.state).to.deep.equal(mock.result);
    assert.isString(result);
    expect(result).to.equal(error.invalidAbility);
  });
  it('will not allow building if the piece does not exist in the bank', function () {
    const mock = deepfreeze(mocks.missingPieceInBank);
    const result = build(mock.state, mock.action);
    // expect(result.state).to.deep.equal(mock.result);
    assert.isString(result);
    expect(result).to.equal(error.bankInsufficent);
  });
};
