import { HI_GUESS } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
  case HI_GUESS:
    return [ action.payload.data, ...state ];
  }
  return state;
}
