import React, {useState, useContext, useEffect} from 'react';
import TodoContext from '../context/todo-context';
import './todo-input.css';

const TodoInput = () => {
  const todoContext = useContext(TodoContext);
  const [todo, setTodo] = useState('');

  const {
    addTodo,
    clearAll,
    alert,
    setAlert,
    clearAlert,
    editMode,
    editItem,
    addEditedTodo
  } = todoContext;

  useEffect(() => {
    if (editMode) {
      setTodo(editItem.todo);
    } else {
      setTodo('');
    }
  }, [editItem.task, editItem.todo, editMode]);

  const handleSubmit = e => {
    e.preventDefault();

    if (todo === '') {
      setAlert();
    } else if (editMode) {
      addEditedTodo(todo);
    } else {
      addTodo(todo);
      setTodo('');
    }
  };

  console.log(alert);
  return (
    <div>
      <form id='myform' onSubmit={handleSubmit} className='form'>
        <input
          className='taskInput'
          placeholder='What needs to be done?'
          type='text'
          value={todo}
          autoFocus='autofocus'
          onChange={e => {
            setTodo(e.target.value);
            clearAlert();
          }}
        ></input>

        <small>{alert}</small>
      </form>
      <div className='mainButtons'>
        <input
          type='submit'
          value='Add'
          form='myform'
          className='addTaskBtn button'
        />
        <button onClick={clearAll} className='clearAllBtn button'>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
