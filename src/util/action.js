const { validateAction } = require('../validators/');
const actions = require('../actions/');

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
// TODO: 
//function performAction(state, action, args) {
//  const err = validateAction(state, action);
//  if (err) {
//    return actionFailure(err, state);
//  }
//  return actionSuccess(null, state);
//}
/////////////////////////

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
  // performAction,
  types
  // getAvailable
};

module.exports = action;