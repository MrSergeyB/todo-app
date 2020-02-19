import uuid from 'uuid';
import {
  ADD_TODOS,
  REMOVE_TODO,
  CLEAR_ALL,
  TOGGLE_TODO,
  SET_ALERT,
  REMOVE_ALERT,
  ADD_TODO
} from './types.js';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        list: [
          ...state.list,
          {task: action.payload, completed: false, id: uuid()}
        ]
      };
    case REMOVE_TODO:
      return {
        list: [...action.payload]
      };
    case CLEAR_ALL:
      return {
        list: [...action.payload]
      };
    default:
      return state;
  }
};
