import React, { Component } from 'react';
import { Router, Route, browserHistory} from 'react-router';
import MainLayout from './layouts/MainLayout';
import Tweet from './pages/tweet/Tweet';
import Projects from './pages/projects/Projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={MainLayout}>
            <Route path="/tweet" component={Tweet} />
            <Route path="projects" component={Projects} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
