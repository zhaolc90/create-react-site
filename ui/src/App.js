import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from 'react-loadable';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {Provider} from "react-redux"

import { createStore } from 'redux'

const store = createStore(require("./reducers").default)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function MyLoadingComponent({ error, pastDelay }) {
  if (error) {
    return <div>Error!</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}
const LoadableBar = Loadable({
  loader: () => import('./About'),
  loading() {
    return <MyLoadingComponent/>
  }
});

class MyComponent extends React.Component {
  render() {
    return <LoadableBar/>;
  }
}
const navListFlat = {
  root:{
    id:0,
    parentId:-1,
    content:"Project Name",
    link:"/"
  },
  data:[
    {
      id:1,
      parentId:0,
      content:"Menu 1",
      link:"/about",
      component:null,
    },
    {
      id:2,
      parentId:0,
      content:"Menu 2",
      link:"/Home",
      component:null,
    }
  ]
}
function getMenus(cb){
  setTimeout(()=>{cb(navListFlat)},3000)
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu:{}
    }
  }
  componentDidMount(){
    getMenus(this.callback.bind(this))
    console.log(new Date())
  }
  callback(menus){
    console.log(menus)
    console.log(new Date())
    this.setState({
      menu:menus
    })
  }
  render() {
    return (
      <div className="App">
				<Provider store={store}>
         <Router>
          <div>
            <Navbar>
              {/* <Navbar.Header> */}
                {/* <Navbar.Brand> */}
                    <Link className={"navbar-brand"} style={{float:"left", position: "absolute",left: "20px"}} to="/">Project Name</Link>
                {/* </Navbar.Brand> */}
              {/* </Navbar.Header> */}
              {/* <Nav>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
              </Nav> */}
            </Navbar>

            <ul  style={{ listStyleType: "none", padding: 0,width:200,display:"inline-block" ,float:"left"}}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <div className={"container"}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={MyComponent} />
             </div>
          </div>
        </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
