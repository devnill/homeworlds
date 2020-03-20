const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');
const { bank, history } = require('../src/util/');
const { systemLost } = require('./mocks/move');
const historyMock = require('./mocks/history');

const { add, revert } = history;
const { createSystem } = bank;

describe('Utility Methods', function () {
  describe('createSystem', function () {
    it('can create a system', function () {
      const initialBank = {
        red: [0, 0, 0],
        blue: [0, 0, 1],
        green: [0, 3, 0],
        yellow: [0, 0, 0]
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
    it('fails if the bank is insufficent', function () {
      const initialBank = {
        red: [0, 0, 0],
        blue: [0, 0, 0],
        green: [0, 3, 0],
        yellow: [0, 0, 0]
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
      assert.isNull(newSystem);
      expect(updatedBank).to.equal(initialBank);
    });
  });
  describe('history',
    function () {

      describe('add', function () {
        it('can create a history item', function () {
          const updatedState = deepfreeze(systemLost.result);
          const state = deepfreeze(systemLost.state);
          const action = 'move';
          const args = deepfreeze(systemLost.action);
          const testState = add(state, updatedState, action, args);
          expect(testState.history).to.deep.equal(historyMock);
        });
      });
      describe('revert', function () {
        it('can restore a previous state', function () {
          const expectedResult = systemLost.state;
          const state = deepfreeze(systemLost.result);
          const previousState = revert({ ...state, history: historyMock });
          expect(previousState).to.deep.equal(expectedResult);

        });
      });
    });
});