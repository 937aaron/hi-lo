import { GUESS_COUNTER } from '../actions/index';

export default function(state = 0, action){
  switch (action.type){
    case GUESS_COUNTER:
      return action.payload + 1; 
  }
}
