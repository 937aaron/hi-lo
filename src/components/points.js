import React, { Component } from 'react';
import { connect } from 'react-redux';


class Points extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h3>Points on the line: <input value={ this.props.points }></input></h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    points: state.cardPile
   };
}

export default connect(mapStateToProps)(Points);
