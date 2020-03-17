const mocks = require('../mocks/').build;
const {build} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');

module.exports = function buildSpecs() {
  it.skip('can only build a ship if a like ship color is controlled in system', function () {
    const mock = deepfreeze(mocks.missingColorInSystem);
    const result = build(mock.state, mock.action);
    expect(result.state).to.deep.equal(mock.result);
  });
  it.skip('takes a piece from the bank of the smallest size', function () {
    const mock = deepfreeze(mocks.valid);
    const result = build(mock.state, mock.action);
    expect(result.state).to.deep.equal(mock.result);
  });
  it.skip('will not allow building if the piece does not exist in the bank', function () {
    const mock = deepfreeze(mocks.missingPieceInBank);
    const result = build(mock.state, mock.action);
    expect(result.state).to.deep.equal(mock.result);
  });
};