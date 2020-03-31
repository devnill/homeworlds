const mocks = require('../mocks/').move;
const { move } = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function moveSpecs() {
  it('removes ship from first system and adds to the destination', function () {
    const mock = deepfreeze(mocks.valid);
    const result = move(mock.state, mock.action);
    expect(result.bank).to.deep.equal(mock.result.bank);
    expect(result.board).to.deep.equal(mock.result.board);
  });

  it('takes a piece from the bank if the system is new', function () {
    const mock = deepfreeze(mocks.newSystem);
    const result = move(mock.state, mock.action);
    expect(result.bank).to.deep.equal(mock.result.bank);
    expect(result.board).to.deep.equal(mock.result.board);
  });

};
