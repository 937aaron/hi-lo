import React, { Component } from 'react';
import { connect } from 'react-redux';
import HiGuess from '../containers/hi_guess'
import LoGuess from '../containers/lo_guess'
import Pass from '../containers/pass'
import PlayerOne from './player_one'
import PlayerTwo from './player_two'


class PlayArea extends Component {

  constructor(props){
    super(props);
    this.state = { count: 0 }
    this.gameInPlay = this.gameInPlay.bind(this);
  }
  // passTurn() {
  //
  // }

  gameInPlay() {
    if (this.props.gameInPlay == true && this.props.passButton == true){
      return (
        <div>
          <HiGuess deckId={this.props.deckId} drawnCard={this.props.drawnCard}/>
          <LoGuess deckId={this.props.deckId} drawnCard={this.props.drawnCard}/>
          <Pass />
        </div>
      )
    }
    else if (this.props.gameInPlay == true ){
      return (
        <div>
          <HiGuess deckId={this.props.deckId} drawnCard={this.props.drawnCard}/>
          <LoGuess deckId={this.props.deckId} drawnCard={this.props.drawnCard}/>
        </div>
      )
    } else {
        return null
      }
  }
  render() {
    return (
      <div>
        { this.gameInPlay() }
        <PlayerOne />
        <PlayerTwo />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    deckId: state.deckId,
    drawnCard: state.drawnCard,
    gameInPlay: state.gameInPlay,
    correctGuess: state.correctGuess,
    passButton: state.passButton,
    playerTurn: state.playerTurn,
    cardPile: state.cardPile
   };
}

export default connect(mapStateToProps)(PlayArea);
