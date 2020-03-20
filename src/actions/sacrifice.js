//todo this should be outside actions
const { standardValidation } = require('../validators');

const {
  action,
  history
} = require('../util');

const {
  actionSuccess,
  actionFailure
} = action;

const colorActions = {
  red: require('./attack'),
  blue: require('./transform'),
  green: require('./build'),
  yellow: require('./move')
};

const { error } = require('../strings');
const _ = require('lodash');

function sacrifice(state, args) {
  const validationError = standardValidation(state, args);
  if (validationError) {
    return actionFailure(state, validationError);
  }
  if (['red', 'blue', 'green', 'yellow'].indexOf(args.color) === -1) {
    return actionFailure(state, error.invalidAction);
  }
  // TODO make this a little less awful.
  const sacrificeState = state.turn.sacrifice;
  if (sacrificeState.count <= 0) {
    return actionFailure(state, error.sacrificeCountExceeded);
  }
  if (sacrificeState.color !== args.color) {
    return actionFailure(state, error.wrongSacrificeType);
  }

  const result = colorActions[args.color](state, args);
  if (result.err) {
    return actionFailure(state, result.err);
  }
 


  const updatedState = history.add(state, Object.assign({}, result.state, {
    //history: [...previousActions, updatedAction],
    turn: {
      sacrifice: {
        count: sacrificeState.count - 1,
        color: sacrificeState.color,
      }
    }
  }), 'sacrifice', args);
  return actionSuccess(updatedState);
}

module.exports = sacrifice;