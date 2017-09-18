import React, { Component } from 'react';
import { connect } from 'react-redux';
import ControlArea from './control_area';
import CardArea from './card_area';
import PlayArea from './play_area';
// import CardDraw from '../containers/card_draw'
// import ShuffleDeck from '../containers/shuffle_deck'

export default class App extends Component {

  render() {
    return (
      <div>
        <ControlArea />
        <CardArea />
        <PlayArea />
      </div>
    );
  }
}
