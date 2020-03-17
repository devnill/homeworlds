const mocks = require('../mocks/').attack;
const {attack} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function attackSpecs() {
  it('can only take equal or smaller ships', function () {
    const mock = deepfreeze(mocks.valid);
    const result = attack(mock.state, mock.action);
    assert.isNull(result.err);
    expect(result.state.board).to.deep.equal(mock.result.board);
    expect(result.state.bank).to.deep.equal(mock.result.bank);
  });
  it('cannot take larger ships', function () {
    const mock = deepfreeze(mocks.tooSmall);
    const result = attack(mock.state, mock.action);
    assert.isNotNull(result.err);
    expect(result.state.board).to.deep.equal(mock.result.board);
    expect(result.state.bank).to.deep.equal(mock.result.bank);
  });
  it('cannot take ships in another system');
};