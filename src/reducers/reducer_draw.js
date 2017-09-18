import { CARD_DRAW } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
  case CARD_DRAW:
    console.log(action.payload, "payload")
    return [ action.cards.data, ...state ];
  }
  return state;
}
