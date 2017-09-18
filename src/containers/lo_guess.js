import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loGuess } from '../actions/index';
import { guessCounter } from '../actions/index';
import { doTwoThings } from '../actions/index';

class LoGuess extends Component {
  constructor(props){
    super(props);

    this.onDrawCard = this.onDrawCard.bind(this);
  }

  //no fucntion calls in component make it all happen in the reducer.

  onDrawCard() {
    var that = this;
    this.props.loGuess(this.props.deckId[0])
    // console.log(this.props.deckId[0]);
  }
  render () {
    return (
      <div>
        <button onClick = {this.onDrawCard}>Lo?</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loGuess }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoGuess)
