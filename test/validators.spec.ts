import {
  chooseHomeworld,
  endTurn,
  sacrificeStart,
  sacrifice,
  catastrope,
  build,
  transform,
  attack,
  move,
  concede
} from './validators/';
/*
function universalValidators(action) {
  it('will update history');
  it('will fail if its not the current players turn');
  it('will fail if another (non-catastrophe  or sacrifice[Start] ) turn action has already made');
}

function standardActionValidators(action) {
  it('can perform a colored action if in a sacrifice of said color');
  it('can perform a colored action if player has access to the color');
  it('will fail to perform a colored action in invalid cases');
}
*/

describe('validators', function () {
  describe('chooseHomeworld', chooseHomeworld);
  describe('endTurn', endTurn);
  describe('sacrificeStart', sacrificeStart);
  describe('sacrifice', sacrifice);
  describe('catastrophe', catastrophe);
  describe('build', build);
  describe('transform', transform);
  describe('attack', attack);
  describe('move', move);
  describe('concede', concede);
});
