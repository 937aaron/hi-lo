import React, { Component } from 'react';
import { connect } from 'react-redux';


class CardArea extends Component {

  constructor(props){
    super(props);

    this.gameInPlay = this.gameInPlay.bind(this);
  }

  gameInPlay() {
    if (this.props.gameInPlay == true ){
      return (
        <img className="deck" src={ this.props.drawnCard[0].cards[0].image }/>
      )
    } else {
        return null
      }
  }
  render() {
    return (
      <div className="card-area">
        <div className="current-card">
          { this.gameInPlay() }
        </div>
        <div>
          <img className="deck" src='../style/assets/card_back.png' />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    deckId: state.deckId,
    drawnCard: state.drawnCard,
    gameInPlay: state.gameInPlay
   };
}

export default connect(mapStateToProps)(CardArea);
