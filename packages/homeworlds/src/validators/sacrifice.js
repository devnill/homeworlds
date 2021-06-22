

const colorActions = {
  red: require('./attack'),
  blue: require('./transform'),
  green: require('./build'),
  yellow: require('./move')
};

const { error } = require('../strings');

function sacrifice(state, args) {
  if (['red', 'blue', 'green', 'yellow'].indexOf(args.color) === -1) {
    return error.invalidAction;
  }
  // TODO make this a little less awful.
  const sacrificeState = state.turn.sacrifice;
  if (sacrificeState.count <= 0) {
    return error.sacrificeCountExceeded;
  }
  if (sacrificeState.color !== args.color) {
    return error.wrongSacrificeType;
  }

  //validate other moves
  const err = colorActions[args.color](state, args);
  if (err) {
    return err;
  }
  return null;
}

module.exports = sacrifice;