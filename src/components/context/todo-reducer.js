import uuid from 'uuid';
import {
  REMOVE_TODO,
  CLEAR_ALL,
  TOGGLE_IMPORTANT,
  ADD_TODO,
  EDIT_TODO,
  SET_ALERT,
  CLEAR_ALERT,
  ADD_EDITED_TODO
} from './types.js';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [
          ...state.list,
          {
            todo: action.payload,
            completed: false,
            important: false,
            id: uuid()
          }
        ]
      };

    case REMOVE_TODO:
      return {...state, list: [...action.payload]};
    case CLEAR_ALL:
      return {...state, list: [...action.payload]};

    case TOGGLE_IMPORTANT:
      return {
        ...state,
        list: state.list.map(todo =>
          todo.id === action.id ? {...todo, important: !todo.important} : todo
        )
      };

    case EDIT_TODO:
      let withoutEditedItem = state.list.filter(
        t => t.id !== action.payload.id
      );
      return {
        ...state,
        editMode: !state.editMode,
        editItem: action.payload,
        list: [...withoutEditedItem]
      };

    case ADD_EDITED_TODO:
      return {
        ...state,
        editMode: !state.editMode,
        editItem: '',
        list: [...state.list, {...state.editItem, todo: action.payload}]
      };

    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      };
    case CLEAR_ALERT:
      return {
        ...state,
        alert: action.payload
      };

    default:
      return state;
  }
};
