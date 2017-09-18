import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { shuffleDeck } from '../actions/index'

class ShuffleDeck extends Component {
  constructor(props){
    super(props);

    this.onShuffleDeck = this.onShuffleDeck.bind(this);
  }

  onShuffleDeck(){
    this.props.shuffleDeck()
  }
  render () {
    return (
      <div>
        <button onClick={this.onShuffleDeck}>Shuffle Deck</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ shuffleDeck }, dispatch);
}

export default connect(null, mapDispatchToProps)(ShuffleDeck)
