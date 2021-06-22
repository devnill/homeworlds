const mocks = require('../mocks/').move;
const { move } = require('../../src/validators');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function moveSpecs() {

  it('cannot move between systems sharing a common sized star', function () {
    const mock = deepfreeze(mocks.invalidSize);
    const result = move(mock.state, mock.action);
    assert.isString(result);
  });

  it('cannot move to a new system if the piece is not in the bank', function () {
    const mock = deepfreeze(mocks.invalidSystem);
    const result = move(mock.state, mock.action);
    assert.isString(result);
  });
};
