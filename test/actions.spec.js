const {expect, assert} = require('chai');
const deepfreeze = require('deepfreeze');


const game = require('../game.js');
const actions = require('../actions.js');
const mocks = {
    newHomeworld : {
    player: 'player1',
    star: [{
      size: 3,
      color: 'blue'
    },{
      size: 2,
      color: 'yellow'
    }],
    ship: [{
      size: 3,
      color: 'green'
    }]
  }
};

describe('actions', function(){
    describe('chooseHomeworld', function(){
      it('can create a homeworld', function(){
        const initialState = game.initState();
        deepfreeze(initialState);
        const actionResponse = actions.chooseHomeworld(initialState, mocks.newHomeworld);
        const {bank} = actionResponse.state
        
        // did call report success
        assert.isNull(actionResponse.err)
        expect(bank.blue[2]).to.equal(initialState.bank.blue[2]-1);
        expect(bank.yellow[1]).to.equal(initialState.bank.yellow[1]-1);
        expect(bank.green[2]).to.equal(initialState.bank.yellow[1]-1);
      })
    
    })
  })
  