
import { State, ActionArgs } from '../types/index';
import { history } from '../util/index';

function concede(state: State, args: ActionArgs): State {
  const updatedState = history.add(state, state, 'concede', args); 
  return updatedState;
}

export default concede;