const mocks = require('../mocks/').build;
const {build} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function buildSpecs() {
  it('takes a piece from the bank of the smallest size', function () {
    const mock = deepfreeze(mocks.valid);
    const result = build(mock.state, mock.action);
    //todo check system to see if ship was properly created
    expect(result.board[0].length).to.deep.equal(mock.result.board[0].length);
    expect(result.bank).to.deep.equal(mock.result.bank);
    // expect(result.state).to.deep.equal(mock.result);
  });
};