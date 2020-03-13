const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');
const _ = require('lodash');

const game = require('../src/util');
const actions = require('../src/actions/');
const mocks = require('./mocks/');

/*
function universalValidators(action) {
  it('will update history');
  it('will fail if its not the current players turn');
  it('will fail if another (non-catastrophy or sacrifice[Start] ) turn action has already made');
}

function standardActionValidators(action) {
  it('can perform a colored action if in a sacrifice of said color');
  it('can perform a colored action if player has access to the color');
  it('will fail to perform a colored action in invalid cases');
}
*/

describe('actions', function () {
  describe('chooseHomeworld', function () {
    it('can create a homeworld', function () {
      const mock = deepfreeze(mocks.chooseHomeworld.valid);
      const initialState = mock.state;
      const actionResponse = actions.chooseHomeworld(mock.state, mock.action);
      const { bank } = actionResponse.state;

      // did call report success
      assert.isNull(actionResponse.err);
      expect(bank.blue[2]).to.equal(initialState.bank.blue[2] - 1);
      expect(bank.yellow[1]).to.equal(initialState.bank.yellow[1] - 1);
      expect(bank.green[2]).to.equal(initialState.bank.yellow[1] - 1);
    });
    it('will fail if its not the current players turn', function () {
      const mock = _.cloneDeep(mocks.chooseHomeworld.valid);
      mock.state.activePlayer = 1;
      deepfreeze(mock);
      const actionResponse = actions.chooseHomeworld(mock.state, mock.action);
      expect(actionResponse.err).to.be.a('string');
      expect(actionResponse.err).to.equal('not your turn');
      expect(actionResponse.state).to.deep.equal(mock.state);
    });
    it('will fail if there are not enough pieces in the bank', function () {
      const mock = deepfreeze(mocks.chooseHomeworld.insufficentPieces);
      const initialState = mock.state;
      const actionResponse = actions.chooseHomeworld(initialState, mock.action);
      assert.isNotNull(actionResponse.err);
      expect(actionResponse.state).to.deep.equal(initialState);
    });
    it('will fail if exactly two stars are not provided');
    it('will fail if exactly one ship is not provided');
  });
  describe('endTurn', function () {
    it('will updateCurrentPlayer', function () {
      const initialState = game.initState();
      deepfreeze(initialState);
      const actionResponse = actions.endTurn(initialState, {
        'players': ['player1', 'player2'],
        'activePlayer': 0
      });
      assert.isNotNull(actionResponse.err);
      expect(actionResponse.state.activePlayer).to.not.equal(initialState.currentPlayer);
    });
    it('will reset turn state', function () {
      const mock = mocks.endTurn.sacrificeInProgress;
      const initialState = mock.state;
      deepfreeze(initialState);
      const actionResponse = actions.endTurn(initialState, mock.action);
      assert.isNull(actionResponse.err);
      expect(actionResponse.state.activePlayer).to.not.equal(initialState.currentPlayer);
      expect(actionResponse.state.turn).to.not.exist;
    });
  });
  describe('sacrificeStart', function () {
    it('will return the sacrificed ship to the bank', function () {
      const mock = deepfreeze(mocks.sacrificeStart.valid);
      const result = actions.sacrificeStart(mock.state, mock.action);
      expect(result.state).to.deep.equal(mock.result);
    });
    it('will return an unoccupied star to the bank', function () {
      const mock = deepfreeze(mocks.sacrificeStart.starReturned);
      const result = actions.sacrificeStart(mock.state, mock.action);
      expect(result.state).to.deep.equal(mock.result);
    });
    it('will update state to have sacrifice counters', function () {
      const mock = deepfreeze(mocks.sacrificeStart.valid);
      const result = actions.sacrificeStart(mock.state, mock.action);
      expect(result.state).to.deep.equal(mock.result);
    });
  });
  describe('sacrifice', function () {
    it('will decrement sacrifice counter', function () {
      const mock = deepfreeze(mocks.sacrifice.valid);
      const result = actions.sacrifice(mock.state, mock.action);
      expect(result.state).to.deep.equal(mock.result);
    });
    it('must contain a valid colored action');
    it('will fail if action is not valid');
  });
  describe('catastrophy', function () {

    it('will only allow sacrifce in overpopulated systems');
    it('will return pieces to bank', function () {
      const mock = deepfreeze(mocks.catastrophy.starIntact);
      const result = actions.catastrophy(mock.state, mock.action);
      assert.isNull(result.err);
      expect(result.state).to.deep.equal(mock.result);

    });
    it('remove all pieces if the star is destroyed', function () {
      const mock = deepfreeze(mocks.catastrophy.valid);
      const result = actions.catastrophy(mock.state, mock.action);
      expect(result.state).to.deep.equal(mock.result);
    });
  });
  describe('build', function () {
    it.skip('can only build a ship if a like ship color is controlled in system', function () {
      const mock = deepfreeze(mocks.build.missingColorInSystem);
      const result = actions.build(mock.state, mock.action);
      expect(result.state).to.deep.equal(mock.result);
    });
    it.skip('takes a piece from the bank of the smallest size', function () {
      const mock = deepfreeze(mocks.build.valid);
      const result = actions.build(mock.state, mock.action);
      expect(result.state).to.deep.equal(mock.result);
    });
    it.skip('will not allow building if the piece does not exist in the bank', function () {
      const mock = deepfreeze(mocks.build.missingPieceInBank);
      const result = actions.build(mock.state, mock.action);
      expect(result.state).to.deep.equal(mock.result);
    });
  });
  describe('transform', function () {
    it('will exchange ship for other color of same size', function () {
      const mock = deepfreeze(mocks.transform.valid);
      const result = actions.transform(mock.state, mock.action);
      expect(result.state).to.deep.equal(mock.result);
    });
    it('will not allow one size to transform to another');
  });
  describe('attack', function () {
    it('can only take equal or smaller ships', function () {
      const mock = deepfreeze(mocks.attack.valid);
      const result = actions.attack(mock.state, mock.action);
      expect(result.state).to.deep.equal(mock.result);
    });
    it('cannot take larger ships');
    it('cannot take ships in another system');
  });
  describe.skip('move', function () {
    it('cannot move between systems sharing a common sized star', function () {
      const mock = deepfreeze(mocks.move.valid);
      const result = actions.move(mock.state, mock.action);
      expect(result.state.board).to.deep.equal(mock.result.board);
    });
    it('removes ship from first system and adds to the destination', );
    it('takes a piece from the bank if the system is new');
    it('cannot move to a new system if the piece is not in the bank');
  });
  describe('concede', function () {
    it('will fail if a concession has already been made');
    it('will otherwise work');
  });
});
