const mocks = require('../mocks/').chooseHomeworld;
const {chooseHomeworld} = require('../../src/validators/index');
const _ = require('lodash');
const { expect, assert } = require('chai');

const deepfreeze = require('deepfreeze');

module.exports = function chooseHomeworldSpecs() {
  
  it.skip('will fail if its not the current players turn', function () {
    const mock = _.cloneDeep(mocks.valid);
    mock.state.activePlayer = 1;
    deepfreeze(mock);
    const actionResponse = chooseHomeworld(mock.state, mock.action);
    assert.isString(actionResponse);
  });

  it('will fail if there are not enough pieces in the bank', function () {
    const mock = deepfreeze(mocks.insufficentPieces);
    const initialState = mock.state;
    const actionResponse = chooseHomeworld(initialState, mock.action);
    assert.isString(actionResponse);
  });
  it('will fail if exactly two stars are not provided');
  it('will fail if exactly one ship is not provided');
};