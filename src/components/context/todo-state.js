import React, {useReducer, useEffect} from 'react';
import TodoContext from './todo-context';
import TodoReducer from './todo-reducer';

import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_IMPORTANT,
  CLEAR_ALL,
  CLEAR_ALERT,
  ADD_EDITED_TODO,
  SET_ALERT
} from './types.js';

const TodoState = props => {
  const initialState = {
    alert: '',
    editMode: false,
    editItem: {},
    list: []
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState, () => {
    const localData = localStorage.getItem('state');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  //Add todo

  const addTodo = todoItem => {
    dispatch({type: ADD_TODO, payload: todoItem});
  };

  //Remove todo

  const removeTodo = id => {
    let newArray = state.list.filter(todo => todo.id !== id);

    dispatch({type: REMOVE_TODO, payload: newArray});
  };

  //Edit todo
  const editTodo = id => {
    let newTask = state.list.filter(todo => todo.id === id);
    dispatch({type: EDIT_TODO, payload: newTask[0]});
  };

  //Add edited todo
  const addEditedTodo = editedTask => {
    dispatch({type: ADD_EDITED_TODO, payload: editedTask});
  };

  //Toggle important
  const toggleImportant = id => {
    dispatch({type: TOGGLE_IMPORTANT, id: id});
  };

  //Clear all

  const clearAll = () => {
    dispatch({type: CLEAR_ALL, payload: []});
  };

  //Set alert

  const setAlert = () => {
    dispatch({type: SET_ALERT, payload: 'Input field should not be empty'});
  };

  //Clear alert

  const clearAlert = () => {
    dispatch({type: CLEAR_ALERT, payload: ''});
  };

  return (
    <TodoContext.Provider
      value={{
        list: state.list,
        alert: state.alert,
        editMode: state.editMode,
        editItem: state.editItem,
        setAlert,
        addTodo,
        clearAlert,
        editTodo,
        removeTodo,
        clearAll,
        toggleImportant,
        addEditedTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
