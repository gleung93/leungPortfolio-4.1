import React, { Component } from 'react';

import TweetBox from '../../components/tweet-box/TweetBox'

import CSSModules from 'react-css-modules';
import styles from "./pageStyles.scss";

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h2 styleName="header">TweetBox!</h2>
        <TweetBox />
      </div>
    );
  }
}

export default CSSModules(Tweet, styles);
