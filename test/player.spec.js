import { expect } from 'chai';
import Player from '../index.js';


const mocks = {
    player:{
        good:{
            homeworld: {
                star: [
                    {size: 0, color: 'red'},
                    {size: 1, color: 'blue'}
                ],
                ship:{size: 2, color:'green'}
            }
        }
    }
};

describe('Player', function(){
    describe('can instantiate a player object', function(){
        it('constructs a player object', function(){
            const test = new Player(mocks.player.good);
            expect(test).to.be.an('object');
        });
        it.skip('fails to construct a player object when no parameters are passed', function(){
            const test = new Player();
            expect(test).to.throw();
        });
    });

    describe('can create homeworld', function(){});
    describe('can take actions', function(){});
    describe('can evaluate loss', function(){});
});