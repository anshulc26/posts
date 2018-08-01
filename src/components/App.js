import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from '../containers/Posts';
import PostNew from '../components/posts/New';
import PostShow from '../components/posts/Show';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Switch>
              <Route path="/posts/new" component={PostNew} />
              <Route path="/posts/:id" component={PostShow} />
              <Route path="/" component={Posts} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
