const attack = require('./attack');
const build  = require('./build');
const catastrophy = require('./catastrophy');
const chooseHomeworld = require('./chooseHomeworld');
const concede = require('./concede');
const endTurn = require('./endTurn');
const move = require('./move');
const sacrifice = require('./sacrifice');
const sacrificeStart = require('./sacrificeStart');
const transform = require('./transform');

module.exports = {
  build,
  chooseHomeworld,
  concede,
  endTurn,
  sacrificeStart,
  sacrifice,
  catastrophy,
  transform,
  attack,
  move
};
