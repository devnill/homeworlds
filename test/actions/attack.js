const mocks = require('../mocks/').attack;
const {attack} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function attackSpecs() {
  it('can only take equal or smaller ships', function () {
    const mock = deepfreeze(mocks.valid);
    const result = attack(mock.state, mock.action);
    
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);
  });
};