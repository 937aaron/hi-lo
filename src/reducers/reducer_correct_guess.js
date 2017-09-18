import { CORRECT_GUESS } from '../actions/index';

export default function(state = 0, action){
  switch (action.type) {
  case CORRECT_GUESS:
  console.log(action.bool, "action-bool")
   if (action.bool === true){
     console.log(state, "state-correct-guess")
     return state = state + 1;
   } else {
     state = 0;
   }
  }
  return state;
}
