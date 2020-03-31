const {
  history
} = require('../util');

const colorActions = {
  red: require('./attack'),
  blue: require('./transform'),
  green: require('./build'),
  yellow: require('./move')
};

function sacrifice(state, args) {
  
  const sacrificeState = state.turn.sacrifice;
  const result = colorActions[args.color](state, args);
  const updatedState = history.add(state, Object.assign({}, result, {
    turn: {
      sacrifice: {
        count: sacrificeState.count - 1,
        color: sacrificeState.color,
      }
    }
  }), 'sacrifice', args);
  return updatedState;
}

module.exports = sacrifice;