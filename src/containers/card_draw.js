import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { cardDraw } from '../actions/index'

class CardDraw extends Component {
  constructor(props){
    super(props);

    this.onDrawCard = this.onDrawCard.bind(this);
  }

  onDrawCard() {
    this.props.cardDraw(this.props.deckId[0])
    // console.log(this.props.deckId[0]);
  }
  render () {
    return (
      <div>
        <button onClick = {this.onDrawCard}>Draw a Card</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ cardDraw }, dispatch);
}

export default connect(null, mapDispatchToProps)(CardDraw)
