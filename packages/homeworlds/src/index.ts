import {State, Star, System, Ship, ActionName, ActionArgs, ErrorMessage} from './types/index.d';

import {normalize} from './util/index';
import validate from './validators/index';
import actions from './actions/index';

const actionTypes = [
  'attack',
  'build',
  'catastrophe',
  'chooseHomeworld',
  'concede',
  'endTurn',
  'move',
  'sacrifice',
  'sacrificeStart',
  'transform'
];

function performAction(state: State, action: ActionName, args: ActionArgs): {err: ErrorMessage; state: State} {
  if(actionTypes.indexOf(action) === -1){
    return {
      err: 'invalid move type',
      state
    };
  }
  const err = validate.action(state, action, args);
  if (err) {
    return { 
      err,
      state
    };
  }
  return {
    err: null,
    state: actions[action](state, args)
  };
};

const create = {
  ship(args: Ship): Ship{
    return normalize.ship(args);
  },
  star(args: Star): Star{
    return normalize.star(args);
  },
  system(args: System): System{
    return normalize.system(args);
  }//,
  //state(args: State): State{
  //  return normalize.state(args);
  //}
};


export {
  create,
  validate,
  performAction//,
 // util
};