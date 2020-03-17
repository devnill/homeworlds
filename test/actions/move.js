const mocks = require('../mocks/').move;
const {move} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function moveSpecs() {
  it('cannot move between systems sharing a common sized star', function () {
    const mock = deepfreeze(mocks.valid);
    const result = move(mock.state, mock.action);
    expect(result.state.board).to.deep.equal(mock.result.board);
  });
  it('removes ship from first system and adds to the destination', );
  it('takes a piece from the bank if the system is new');
  it('cannot move to a new system if the piece is not in the bank');
};