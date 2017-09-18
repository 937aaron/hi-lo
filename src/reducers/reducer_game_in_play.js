import { CARD_DRAW } from '../actions/index';

export default function(state = false, action){
  switch (action.type) {
  case CARD_DRAW:
    return true;
  }
  return state;
}
