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
    return actionFailure(err, state);
  }
  return actionSuccess(null, actions[action](state, args));
}


function actionSuccess(state) {
  return {
    err: null,
    state
  };
}
function actionFailure(state, reason) {
  return {
    err: reason || true,
    state
  };
}

const action = {
  actionSuccess,
  actionFailure,
  performAction,
  //types
  // getAvailable
};

module.exports = action;




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
  action,
  create
};