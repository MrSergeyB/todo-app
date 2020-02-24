import React, {Fragment, useContext, useState} from 'react';
import TodoContext from '../context/todo-context';
import './todo-item.css';

const TodoItem = ({todo, id, important}) => {
  const todoContext = useContext(TodoContext);
  const {removeTodo, editTodo, toggleImportant} = todoContext;
  const [done, setDone] = useState(false);

  const style = {
    color: important ? '#a7ff83' : 'white',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <Fragment>
      <li className='listItem'>
        <span
          onClick={() => {
            setDone(!done);
          }}
          style={style}
        >
          {todo}
        </span>
        <div>
          <button
            className='btn btnOutlineSecondary'
            onClick={() => editTodo(id)}
            title='edit'
          >
            <i className='fas fa-pen'></i>
          </button>
          <button
            className='btn btnOutlineDanger'
            onClick={() => removeTodo(id)}
            title='delete'
          >
            <i className='fas fa-trash-alt'></i>
          </button>
          <button
            className='btn btnOutlinePrimary'
            onClick={() => toggleImportant(id)}
            title='mark important'
          >
            <i className='fas fa-exclamation'></i>
          </button>
        </div>
      </li>
    </Fragment>
  );
};

export default TodoItem;
