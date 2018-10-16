import React, { Component } from 'react';
import {connect} from "react-redux"
import {addTodo} from '../actions'
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

class Demo extends Component{
    render(){
        return (
            <div>
                Demo
            </div>
        )
    }
}
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Demo)
export default VisibleTodoList