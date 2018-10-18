import React, { Component } from 'react';
import {connect} from "react-redux"
import {addTodo} from '../actions'
import {Button } from 'react-bootstrap'
// var createReactClass = require('create-react-class')
const pageData = [
  {
    component: Button,
    children:"Hello"
  },
  {
    component: Button,
    children:"Hello again"
  }]

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      case 'SHOW_ALL':
      default:
        return todos
    }
  }
  
  const mapStateToProps = state => {
    return {
      todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onTodoClick: id => {
        dispatch(addTodo(id))
      }
    }
  }
  const createPage = (data) =>{
    console.log(data)
    const children = []
    data.forEach(element => {
      children.push(
        <element.component>
          {element.children}
        </element.component>
      )
    });
    return(
      function(){
        return(
          <div>
              {children}
          </div>
        )
      }
    )
  }
const Page = createPage(pageData)

class Demo extends Component{
    render(){
        return <Page />
    }
}
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Demo)
export default VisibleTodoList
