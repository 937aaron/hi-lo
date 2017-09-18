import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { cardDraw } from '../actions/index'
import { hiGuess } from '../actions/index'

class HiGuess extends Component {
  constructor(props){
    super(props);

    this.onDrawCard = this.onDrawCard.bind(this);
  }

  onDrawCard() {
    var that = this;
    this.props.hiGuess(this.props.deckId[0], this.props.drawnCard[0].cards[0].value)//.then(function(){
      console.log(this.props.drawnCard[0].cards[0].value)
      // console.log(that.props.drawnCard[1].cards[0].value, "that");
      // if (that.props.drawnCard[0].cards[0].value > that.props.drawnCard[1].cards[0].value){
      //   alert("Great Job");
      // } else {
      //   alert("you suck");
      // }
    //})
    // console.log(this.props.deckId[0]);
  }
  render () {
    return (
      <div>
        <button onClick = {this.onDrawCard}>Hi?</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hiGuess }, dispatch);
}

export default connect(null, mapDispatchToProps)(HiGuess)
