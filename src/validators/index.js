const validators = {
  basic: require('./basic'),
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

module.exports = {
  ...validators,
  action
};
