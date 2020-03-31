const mocks = require('../mocks/').endTurn;
const {endTurn} = require('../../src/validators');
const _ = require('lodash');
const { expect, assert } = require('chai');
const game = require('../../src/util/');

const deepfreeze = require('deepfreeze');

module.exports = function endTurnSpecs() {
  it('will not updateCurrentPlayer if the wrong player plays');
};