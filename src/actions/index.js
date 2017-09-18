import axios from 'axios';
import thunk from 'redux-thunk'
const SHUFFLE_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1' ;
const DRAW_URL = 'https://deckofcardsapi.com/api/deck/'

export const SHUFFLE_DECK = "SHUFFLE_DECK";
export const CARD_DRAW = "CARD_DRAW";
export const HI_GUESS = "HI_GUESS";
export const LO_GUESS = "LO_GUESS";
export const INCORRECT_GUESS = "INCORRECT_GUESS";
export const CORRECT_GUESS = "CORRECT_GUESS";
export const PASS_BUTTON = "PASS_BUTTON";
export const PLAYER_TURN = "PLAYER_TURN";
export const CARD_PILE = "CARD_PILE";
export const PLAYER_ONE_SCORE = "PLAYER_ONE_SCORE";
export const PLAYER_TWO_SCORE = "PLAYER_TWO_SCORE";


// export function fetchWeather(city){
//   const url = `${ROOT_URL}&q=${city},us`;
//   const request = axios.get(url);

// export function itemsFetchDataSuccess(items) {
//     return {
//         type: 'ITEMS_FETCH_DATA_SUCCESS',
//         items
//     };
// }
export function shuffleDeckSuccess(deck) {
  return {
    type: SHUFFLE_DECK,
    deck
  };
}
export function shuffleDeck(){
  return(dispatch) => {
    axios.get(SHUFFLE_URL)
    .then( response => { return response.data.deck_id })
    .then( deck => dispatch(shuffleDeckSuccess(deck)))

  }
  // return {
  //   type: SHUFFLE_DECK,
  //   payload: shuffle_request
  // };
}

export function cardDraw(deckId){
  return(dispatch, getState) => {
    const { drawnCard } = getState();
    axios.get(DRAW_URL + deckId + '/draw')
      .then((response) => { return response; })
      .then((cards) => { if (drawnCard.length <=0 ){
        dispatch(drawCard(cards));
      }})

  }
}

export function drawCard(cards){
  return {
    type: CARD_DRAW,
    cards
  }
}
  // ;
  // return {
  //   type: CARD_DRAW,
  //   payload: draw_request
  // };

//

const convertCardToValue = (card) => {
  switch (card) {
    case 'ACE':
      return 14
    case 'KING':
      return 13
    case 'QUEEN':
      return 12
    case 'JACK':
      return 11
    default:
      return parseInt(card);
  }
}
const getNewCard = (deckId) => {
  axios.get(DRAW_URL + deckId + '/draw')
}
export function loGuess(deckId){
  return(dispatch, getState) => {
    const prevCardValue = convertCardToValue(getState().drawnCard[0].cards[0].value);
    axios.get(DRAW_URL + deckId + '/draw')
    // const currentCardValue = convertCardToValue(cards.data.cards[0].value)
      .then((response) => { return response; })
      .then((cards) => {
        dispatch(drawCard(cards));
        // console.log(getState().correctGuess, "here is state")
        const currentCardValue = convertCardToValue(cards.data.cards[0].value)
        if (getState().drawnCard.length == 52) {
          if (getState().playerOneScore < getState().playerTwoScore){
            alert('Player One Wins')
          } else if (getState().playerOneScore > getState().playerTwoScore){
            alert('Player Two Wins')
          } else {
            alert('Tie...sudden death!')
          }
        } else if (prevCardValue > currentCardValue && getState().correctGuess + 1 === 3 ){
          dispatch(correctGuessAction(true));
          dispatch(passButton(true));
          dispatch(cardPile(true));
          console.log("flip de switch")
        } else if (prevCardValue < currentCardValue){
          if (getState().playerTurn === 'player_1') {
            dispatch(correctGuessAction(false));
            dispatch(playerOneScore(getState().cardPile))
            dispatch(passButton(false));
            dispatch(cardPile(false));
          } else {
            dispatch(correctGuessAction(false));
            dispatch(playerTwoScore(getState().cardPile))
            dispatch(passButton(false));
            dispatch(cardPile(false));
          }
          console.log('wrong');
        } else {
            dispatch(correctGuessAction(true));
            dispatch(cardPile(true));
        }
      })
    }
}

export function hiGuess(deckId){
  return(dispatch, getState) => {
    const prevCardValue = convertCardToValue(getState().drawnCard[0].cards[0].value);
    axios.get(DRAW_URL + deckId + '/draw')
    // const currentCardValue = convertCardToValue(cards.data.cards[0].value)
      .then((response) => { return response; })
      .then((cards) => {
        dispatch(drawCard(cards));
        const currentCardValue = convertCardToValue(cards.data.cards[0].value)
        if (getState().drawnCard.length == 52) {
          if (getState().playerOneScore < getState().playerTwoScore){
            alert('Player One Wins')
          } else if (getState().playerOneScore > getState().playerTwoScore){
            alert('Player Two Wins')
          } else {
            alert('Tie...sudden death!')
          }
        } else if (prevCardValue < currentCardValue && getState().correctGuess + 1 === 3 ){
          dispatch(correctGuessAction(true));
          dispatch(cardPile(true));
          dispatch(passButton(true));
          console.log("flip de switch")
        } else if (prevCardValue > currentCardValue){
          if (getState().playerTurn === 'player_1') {
            dispatch(correctGuessAction(false));
            dispatch(playerOneScore(getState().cardPile))
            dispatch(passButton(false));
            dispatch(cardPile(false));
          } else {
            dispatch(correctGuessAction(false));
            dispatch(playerTwoScore(getState().cardPile))
            dispatch(passButton(false));
            dispatch(cardPile(false));
          }
        } else {
            dispatch(correctGuessAction(true))
            dispatch(cardPile(true));
        }
      })
    }
}
export function cardPile(bool){
  console.log('add');
  return {
    type: CARD_PILE,
    bool
  }
}

export function playerTurn(){
  return(dispatch) => {
    dispatch(playerTurnAction());
    dispatch(correctGuessAction(false));
    dispatch(passButton(false));
  }
}
export function playerTurnAction(){
  return {
    type: PLAYER_TURN
  }
}

export function correctGuessAction(bool){
  return {
    type: CORRECT_GUESS,
    bool
  }
}

export function passButton(bool){
  return {
    type: PASS_BUTTON,
    bool
  }
}

export function playerOneScore(score){
  return {
    type: PLAYER_ONE_SCORE,
    score
  }
}

export function playerTwoScore(score){
  return {
    type: PLAYER_TWO_SCORE,
    score
  }
}

// export function incorrectGuess(){
//   type: INCORRECT_GUESS,
//   value: 0
// }
// return {
//   type: LO_GUESS,
//   payload: draw_request
// };
