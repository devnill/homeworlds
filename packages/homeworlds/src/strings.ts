
import {ErrorMessage} from './types/index.d';

const error: {[key: string]: ErrorMessage} = { 
  invalidTurn: 'It is not your turn.',
  invalidSystem: 'invalid system',
  invalidShip: 'invalid ship',
  bankInsufficent: 'insufficent resources in bank to perform action',
  catastropheFailed: 'Cannot catastrophe there. Is it overpopulated?',
  invalidMove: 'Invalid move action. Do the systems share two stars of the same size?',
  invalidBuild: 'Invalid build action.',
  invalidAbility: 'Invalid action. Do you have access to that color?',
  shipAttackSize: 'Invalid attack. Is your ship large enough?'
};

export {error};

export default {
  error
};
