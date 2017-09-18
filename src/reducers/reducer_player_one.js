import { PLAYER_ONE_SCORE } from '../actions/index';

export default function ( state = 0, action ) {
  switch(action.type) {
    case PLAYER_ONE_SCORE:
      state = state + action.score;
  }
  return state; 
}
