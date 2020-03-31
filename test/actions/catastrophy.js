const mocks = require('../mocks/').catastrophy;
const {catastrophy} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function catastrophySpecs() {
  it('will return pieces to bank', function () {
    const mock = deepfreeze(mocks.starIntact);
    const result = catastrophy(mock.state, mock.action);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);

  });
  it('remove all pieces if the star is destroyed', function () {
    const mock = deepfreeze(mocks.valid);
    const result = catastrophy(mock.state, mock.action);
    expect(result.board).to.deep.equal(mock.result.board);
    expect(result.bank).to.deep.equal(mock.result.bank);
  });
};