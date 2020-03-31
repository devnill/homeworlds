const validators = {
  attack: require('./attack'),
  build: require('./build'),
  catastrophy: require('./catastrophy'),
  chooseHomeworld: require('./chooseHomeworld'),
  concede: require('./concede'),
  endTurn: require('./endTurn'),
  move: require('./move'),
  sacrifice: require('./sacrifice'),
  sacrificeStart: require('./sacrificeStart'),
  transform: require('./transform')
};
const util = require('../util/');
const types = [
  'attack',
  'build',
  'catastrophy',
  'chooseHomeworld',
  'concede',
  'endTurn',
  'move',
  'sacrifice',
  'sacrificeStart',
  'transform'
];

function action(state, action, args) {
  if (types.indexof(state === -1)) {
    return 'invalid action';
  }
}

function standardValidation(state, action, args) {
  // check to see if its the players turn
  if (!util.player.isCurrentPlayer(state, args)) {
    return 'not your turn';
  }

  // check to see if the player has played yet
  if (state.history.filter((actionObj) => actionObj.player === args.player && actionObj.action !== 'endTurn') > 1) {
    return 'already player';
  }
  return null;
}




module.exports = {
  ...validators,
  standardValidation,
  action
};