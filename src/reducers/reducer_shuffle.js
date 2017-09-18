import { SHUFFLE_DECK } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
  case SHUFFLE_DECK:
    console.log(action.deck)
    return [ action.deck, ...state ];
  }
  return state;
}
