const mocks = require('../mocks/').sacrifice;
const {sacrifice} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function sacrificeSpecs() {
  it('will decrement sacrifice counter', function () {
    const mock = deepfreeze(mocks.valid);
    const result = sacrifice(mock.state, mock.action);
    expect(result.state.board).to.deep.equal(mock.result.board);
    expect(result.state.bank).to.deep.equal(mock.result.bank);
  });
  it('must contain a valid colored action');
  it('will fail if action is not valid');
};