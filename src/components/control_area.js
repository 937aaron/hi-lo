import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'
import CardDraw  from '../containers/card_draw.js'
import ShuffleDeck from '../containers/shuffle_deck.js'


class ControlArea extends Component {
  constructor(props){
    super(props);

  }
  render () {
    return (
      <div>
        <ShuffleDeck />
        <CardDraw deckId={this.props.deckId}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    deckId: state.deckId,
    drawnCards: state.drawnCard
   };
}

export default connect(mapStateToProps)(ControlArea);
