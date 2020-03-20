const {validateAction} = require('../validators/');

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
//  performAction
};

module.exports = action;