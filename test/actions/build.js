const mocks = require('../mocks/').build;
const {build} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function buildSpecs() {
  it('can only build a ship if a like ship color is controlled in system', function () {
    const mock = deepfreeze(mocks.missingColorInSystem);
    const result = build(mock.state, mock.action);
    // expect(result.state).to.deep.equal(mock.result);
    assert.isNotNull(result.err);
    expect(result.state.board).to.deep.equal(mock.result.board);
    expect(result.state.bank).to.deep.equal(mock.result.bank);
  });
  it('takes a piece from the bank of the smallest size', function () {
    const mock = deepfreeze(mocks.valid);
    const result = build(mock.state, mock.action);
    assert.isNull(result.err);
    //todo check system to see if ship was properly created
    expect(result.state.board[0].length).to.deep.equal(mock.result.board[0].length);
    expect(result.state.bank).to.deep.equal(mock.result.bank);
    // expect(result.state).to.deep.equal(mock.result);
  });
  it('will not allow building if the piece does not exist in the bank', function () {
    const mock = deepfreeze(mocks.missingPieceInBank);
    const result = build(mock.state, mock.action);
    // expect(result.state).to.deep.equal(mock.result);
    assert.isNotNull(result.err);
    expect(result.state.board).to.deep.equal(mock.result.board);
    expect(result.state.bank).to.deep.equal(mock.result.bank);
  });
};