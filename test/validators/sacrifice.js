const mocks = require('../mocks/').sacrifice;
const {sacrifice} = require('../../src/validators');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function sacrificeSpecs() {
  
  it('must contain a valid colored action');
  it('will fail if action is not valid');
};