import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import DrawReducer from './reducer_draw';
import ShuffleReducer from './reducer_shuffle';
import GameInPlayReducer from './reducer_game_in_play';
import HiGuess from './reducer_hi';
import PlayerOneScore from './reducer_player_one';
import PlayerTwoScore from './reducer_player_two';
import CorrectGuess from './reducer_correct_guess';
import PassButtonReducer from './reducer_pass_button';
import PlayerTurn from './reducer_player_turn';
import CardPile from './reducer_card_pile';

const rootReducer = combineReducers({

  deckId: ShuffleReducer,
  drawnCard: DrawReducer,
  gameInPlay: GameInPlayReducer,
  passButton: PassButtonReducer,
  playerTurn: PlayerTurn,
  cardPile: CardPile,
  playerOneScore: PlayerOneScore,
  playerTwoScore: PlayerTwoScore,
  correctGuess: CorrectGuess

});

export default rootReducer;
