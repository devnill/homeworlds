const mocks = require('../mocks/').chooseHomeworld;
const {chooseHomeworld} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');

const deepfreeze = require('deepfreeze');

module.exports = function chooseHomeworldSpecs() {
  it('can create a homeworld', function () {
    const mock = deepfreeze(mocks.valid);
    const initialState = mock.state;
    const actionResponse = chooseHomeworld(mock.state, mock.action);
    const { bank } = actionResponse.state;

    // did call report success
    assert.isNull(actionResponse.err);
    expect(bank.blue[2]).to.equal(initialState.bank.blue[2] - 1);
    expect(bank.yellow[1]).to.equal(initialState.bank.yellow[1] - 1);
    expect(bank.green[2]).to.equal(initialState.bank.yellow[1] - 1);
  });
  // TODO: move to validator
  it.skip('will fail if its not the current players turn', function () {
    const mock = _.cloneDeep(mocks.valid);
    mock.state.activePlayer = 1;
    deepfreeze(mock);
    const actionResponse = chooseHomeworld(mock.state, mock.action);
    expect(actionResponse.err).to.be.a('string');
    expect(actionResponse.err).to.equal('not your turn');
    expect(actionResponse.state).to.deep.equal(mock.state);
  });

  it('will fail if there are not enough pieces in the bank', function () {
    const mock = deepfreeze(mocks.insufficentPieces);
    const initialState = mock.state;
    const actionResponse = chooseHomeworld(initialState, mock.action);
    assert.isNotNull(actionResponse.err);
    expect(actionResponse.state).to.deep.equal(initialState);
  });
  it('will fail if exactly two stars are not provided');
  it('will fail if exactly one ship is not provided');
};