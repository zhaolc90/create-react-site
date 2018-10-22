import React, { Component } from 'react';
import logo from './logo.svg';
import Demo from './pages/Demo';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from 'react-loadable';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem,Grid,Row,Col} from 'react-bootstrap'
import {Provider} from "react-redux"
import * as reducers from './reducers'
import Navs  from './Menus'
import {ADD_TODO} from './actions'
import { combineReducers, createStore } from 'redux'
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}
// const simple = require("./reducers").default
let reducer = combineReducers({ visibilityFilter, todos, ...reducers })
let store = createStore(reducer)

const Add = (props) =>{
  return(
      <div 
          style={{
              width: "100%",
              backgroundColor:"yellow"
          }}
      >
          +
      </div>
  )
}
const Home = () => (
  <div>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <Add/>
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
const menusDemo = [
  {
    path:"/",
    name: "Home1"
  },
  {
    path:"/demo",
    name: "Demo1"
  },
  {
    path:"/about",
    name: "About1"
  },
]
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
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu:{}
    }
  }
  componentDidMount(){
    store.dispatch(addTodo('Learn about actions'))
    store.dispatch(addTodo('Learn about reducers'))
    store.dispatch(addTodo('Learn about store'))
    console.log(store.getState())
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
              <Navbar.Header>
                <Navbar.Brand>
                    <Link className={"navbar-brand"}  to="/">Project Name</Link>
                </Navbar.Brand>
              </Navbar.Header>
            </Navbar>
            <Grid>
            <Row className="show-grid">
              <Col xs={12} md={3}>
                <Navs menus={menusDemo}/>
              </Col>
              <Col xs={12} md={9}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={MyComponent} />
              <Route path="/demo" component={Demo} />
              </Col>
            </Row>
            </Grid>
          </div>
        </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
