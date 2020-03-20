const mocks = require('../mocks/').transform;
const {transform} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function transformSpecs() {
  it('will exchange ship for other color of same size', function () {
    const mock = deepfreeze(mocks.valid);
    const result = transform(mock.state, mock.action);
    expect(result.state.board).to.deep.equal(mock.result.board);
    expect(result.state.bank).to.deep.equal(mock.result.bank);
  });
  it('will not allow one size to transform to another');
};