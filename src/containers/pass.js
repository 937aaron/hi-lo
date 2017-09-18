import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { playerTurn } from '../actions/index'

class Pass extends Component {
  constructor(props){
    super(props);

    this.passTurn = this.passTurn.bind(this);
  }
  passTurn(){
    this.props.playerTurn()
  }
  render () {
    return (
      <div>
        <button onClick={ this.passTurn }>Pass</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ playerTurn }, dispatch);
}

export default connect(null, mapDispatchToProps)(Pass)
