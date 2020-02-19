import React, {useState, useContext} from 'react';
import TodoContext from '../context/todo-context';
import './todo-input.css';

const TodoInput = () => {
  const todoContext = useContext(TodoContext);
  const [todo, setTodo] = useState('');
  const {addTodo, clearAll} = todoContext;

  const handleSubmit = e => {
    e.preventDefault();
    if (todo === '') {
    } else {
      addTodo(todo);
      setTodo('');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          className='taskInput'
          placeholder='What needs to be done?'
          type='text'
          value={todo}
          autofocus='autofocus'
          onChange={e => setTodo(e.target.value)}
        ></input>
        <div className='mainButtons'>
          <button type='submit' className='addTaskBtn button'>
            Add
          </button>

          <button onClick={clearAll} className='clearAllBtn button'>
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
