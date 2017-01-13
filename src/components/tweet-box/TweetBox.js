import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from "./componentStyles.scss";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      photoAdded: false
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  togglePhoto = (e) => {
    this.setState({ photoAdded: !this.state.photoAdded });
  }

  remainingCharacters() {
    if (this.state.photoAdded === true) {
      return 140 - 23 - this.state.text.length
    } else {
      return 140 - this.state.text.length
    }
  }

  render() {
    return (
      <div className="well clearfix">
        <textarea className="form-control"
                  onChange={this.handleChange}></textarea>
        <ReactCSSTransitionGroup
        transitionName={styles}
        transitionAppear={true}
        transitionAppearTimeout={9000}
        transitionEnter={false}
        transitionLeave={false}>
          <button styleName="tweet-btn" disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet!</button>
        </ReactCSSTransitionGroup>

        <button styleName="photo-btn" onClick={this.togglePhoto}>
          {this.state.photoAdded ? "Photo added!" : "Add Photo"}
        </button>
        <span>{ this.remainingCharacters() }</span>
      </div>
    );
  }
}

export default CSSModules(TweetBox, styles);
