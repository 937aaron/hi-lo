import React, { Component } from 'react';
import { connect } from 'react-redux';


class PlayerOne extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h3>Player 1 score: <input value={this.props.playerOneScore}></input></h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    deckId: state.deckId,
    drawnCard: state.drawnCard,
    gameInPlay: state.gameInPlay,
    playerOneScore: state.playerOneScore
   };
}

export default connect(mapStateToProps)(PlayerOne);
