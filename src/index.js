const {normalize} = require('./util/');
const validate = require('./validators/');
const actions = require('./actions/');

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

function performAction(state, action, args) {
  const err = validate.action(state, action, args);
  if (err) {
    return { 
      err,
      state
    };
  }
  return {
    err: null,
    state: actions[action](state, args);
  };
};

const create = {
  ship(args){
    return normalize.ship(args);
  },
  star(args){
    return normalize.star(args);
  },
  system(args){
    return normalize.system(args);
  },
  state(args){
    return normalize.state(args);
  }
};


module.export = {
  create,
  validate,
  performAction,
  util
};