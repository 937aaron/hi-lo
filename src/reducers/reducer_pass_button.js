import { PASS_BUTTON } from '../actions/index';

export default function (state = false, action){
  switch (action.type) {
    case PASS_BUTTON:
      if (action.bool === true){
        state = true;
      } else {
        state = false;
      }
  }
  return state; 
}
