import { PLAYER_TWO_SCORE } from '../actions/index';

export default function ( state = 0, action ) {
  switch(action.type) {
    case PLAYER_TWO_SCORE:
      state = state + action.score;
  }
  return state;
}
