import React, { Component } from 'react';
import {Link} from 'react-router';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <h1 className="header">Grant Leung</h1>
        <ul>
          <li><Link to="/tweet">Tweet</Link></li>
          <li><Link to="projects">Projectss</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
