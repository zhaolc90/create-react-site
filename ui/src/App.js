import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from 'react-loadable';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


const LoadableBar = Loadable({
  loader: () => import('./About'),
  loading() {
    return <div>Loading...</div>
  }
});

class MyComponent extends React.Component {
  render() {
    return <LoadableBar/>;
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={MyComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
