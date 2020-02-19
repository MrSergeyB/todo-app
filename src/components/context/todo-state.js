import React, {useReducer} from 'react';
import TodoContext from './todo-context';
import TodoReducer from './todo-reducer';

import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_IMPORTANT,
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_ALL
} from './types.js';

const TodoState = props => {
  const initialState = {
    list: [
      {task: 'Finish todo  app', completed: false, important: false, id: 1},
      {task: 'Clean house', completed: false, important: false, id: 2}
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
    let objectIndex = state.list.findIndex(task => task.id === id);

    dispatch({type: EDIT_TODO, payload: objectIndex});
  };

  //Toggle important
  const toggleImportant = id => {
    let index = state.list.findIndex(e => e.id === id);
    let objectToggle = state.list[index];

    dispatch({type: EDIT_TODO, payload: !objectToggle.important});
  };

  //Clear all

  const clearAll = () => {
    dispatch({type: CLEAR_ALL, payload: []});
  };

  //Remove alert

  return (
    <TodoContext.Provider
      value={{
        list: state.list,
        alert: state.alert,
        addTodo,
        removeTodo,
        clearAll,
        toggleImportant
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
