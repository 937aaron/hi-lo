import { CARD_PILE } from '../actions/index';

export default function ( state = 1, action ) {
  switch(action.type) {
    case CARD_PILE:
    if ( action.bool == true ) {
      state = state + 1;
    } else {
      state = 1;
    }
  }
  return state;
}
