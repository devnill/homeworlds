const mocks = require('../mocks/').endTurn;
const {endTurn} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');
const game = require('../../src/util/');

const deepfreeze = require('deepfreeze');

module.exports = function endTurnSpecs() {
  it('will updateCurrentPlayer', function () {
    const initialState = game.initState();
    deepfreeze(initialState);
    const actionResponse = endTurn(initialState, {
      'players': ['player1', 'player2'],
      'activePlayer': 0
    });
    expect(actionResponse.activePlayer).to.not.equal(initialState.currentPlayer);
  });
  it('will reset turn state', function () {
    const mock = mocks.sacrificeInProgress;
    const initialState = mock.state;
    deepfreeze(initialState);
    const actionResponse = endTurn(initialState, mock.action);
    expect(actionResponse.activePlayer).to.not.equal(initialState.currentPlayer);
    expect(actionResponse.turn).to.not.exist;
  });
};