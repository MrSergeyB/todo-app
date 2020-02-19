import React, {Fragment, useContext, useState} from 'react';
import TodoContext from '../context/todo-context';
import './todo-item.css';

const TodoItem = ({task, id, completed}) => {
  const todoContext = useContext(TodoContext);
  const {removeTodo, editTodo} = todoContext;
  const [important, setImporant] = useState(false);
  const [done, setDone] = useState(false);

  const style = {
    color: important ? '#a7ff83' : 'white',
    fontWeight: important ? 'bold' : 'normal'
  };

  const style2 = {
    textDecoration: done ? 'line-through' : null
  };
  return (
    <Fragment>
      <li className='listItem' style={style2}>
        <span
          onClick={() => {
            setDone(!done);
          }}
        >
          {task}
        </span>
        <div>
          <button
            className='btn btnOutlineSecondary'
            onClick={() => editTodo(task, id)}
            title='edit'
          >
            <i class='fas fa-pen'></i>
          </button>
          <button
            className='btn btnOutlineDanger'
            onClick={() => removeTodo(id)}
            title='delete'
          >
            <i class='fas fa-trash-alt'></i>
          </button>
          <button
            className='btn btnOutlinePrimary'
            onClick={() => setImporant(!important)}
            title='mark important'
          >
            <i class='fas fa-exclamation'></i>
          </button>
        </div>
      </li>
    </Fragment>
  );
};

export default TodoItem;
