import React, {useReducer} from 'react';
import TodoContext from './todo-context';
import TodoReducer from './todo-reducer';

import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_ALL
} from './types.js';

const TodoState = props => {
  const initialState = {
    list: [
      {task: 'Finish todo  app', completed: false, id: 1},
      {task: 'Clean the house', completed: false, id: 2}
    ]
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  //Add todo

  const addTodo = todoItem => {
    dispatch({type: ADD_TODO, payload: todoItem});
  };

  //Remove todo

  const removeTodo = id => {
    let newArray = state.list.filter(task => task.id !== id);

    dispatch({type: REMOVE_TODO, payload: newArray});
  };

  //Edit todo
  const editTodo = id => {
    let newArray = state.list.filter(task => task.id !== id);

    dispatch({type: EDIT_TODO, payload: newArray});
  };

  //Edit todo
  const clearAll = () => {
    dispatch({type: CLEAR_ALL, payload: []});
  };

  //Show alert

  //Remove alert

  return (
    <TodoContext.Provider
      value={{
        list: state.list,
        alert: state.alert,
        addTodo,
        removeTodo,
        clearAll
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
