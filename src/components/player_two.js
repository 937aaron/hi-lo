import React, { Component } from 'react';
import { connect } from 'react-redux';


class PlayerTwo extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h3>Player 2 score: <input value={ this.props.playerTwoScore }></input></h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    deckId: state.deckId,
    drawnCard: state.drawnCard,
    gameInPlay: state.gameInPlay,
    playerTwoScore: state.playerTwoScore
   };
}

export default connect(mapStateToProps)(PlayerTwo);
