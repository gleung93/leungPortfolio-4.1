import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from "./styles.scss";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <h1 styleName="header">Projects</h1>
      </div>
    );
  }
}

export default CSSModules(Projects, styles);
