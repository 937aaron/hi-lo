import { PLAYER_TURN } from '../actions/index';

export default function (state = 'player_1', action ){
  switch(action.type){
    case PLAYER_TURN:
      console.log(state, 'playerTurn')
      if (state === 'player_1') {
        state = 'player_2'
      } else if (state === 'player_2'){
        state='player_1'
      }
  }
  return state;
}
