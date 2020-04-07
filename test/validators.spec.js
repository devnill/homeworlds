const {
  chooseHomeworld,
  endTurn,
  sacrificeStart,
  sacrifice,
  catastrophy,
  build,
  transform,
  attack,
  move,
  concede
} = require('./validators/');
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

describe('validators', function () {
  describe('chooseHomeworld', chooseHomeworld);
  describe('endTurn', endTurn);
  describe('sacrificeStart', sacrificeStart);
  describe('sacrifice', sacrifice);
  describe('catastrophy', catastrophy);
  describe('build', build);
  describe('transform', transform);
  describe('attack', attack);
  describe('move', move);
  describe('concede', concede);
});
