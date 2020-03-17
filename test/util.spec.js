const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');
const {createSystem} = require('../src/util');


describe('Utility Methods', function () {
  describe('createSystem', function () {
    it('can create a system', function () {
      const initialBank = {
        red:[0,0,0],
        blue:[0,0,0],
        green:[0,3,0],
        yellow:[0,0,0]
      };
      const systemToCreate = {
        stars: [{
          color: 'green',
          size: 2
        }],
        ships: [{
          color: 'blue',
          size: 3
        }]
      };
      
      const [newSystem, updatedBank] = createSystem(deepfreeze(initialBank), deepfreeze(systemToCreate));
      
      // did call report success
      assert.isNotNull(newSystem);
      expect(newSystem).to.deep.equal(systemToCreate);
      expect(updatedBank.green[1]).to.equal(initialBank.green[1] - 1);
      expect(updatedBank.blue[2]).to.equal(initialBank.blue[2] - 1);
    });
  });
});