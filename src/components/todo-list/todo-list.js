import React, {useContext} from 'react';
import TodoItem from '../todo-item';
import TodoContext from '../../components/context/todo-context';
import './todo-list.css';

const TodoList = () => {
  const todoContext = useContext(TodoContext);

  const {list} = todoContext;

  return (
    <div className='todoListDiv'>
      {list.length ? (
        <ul className='list'>
          {list.map((todo, id) => (
            <TodoItem
              key={id}
              task={todo.task}
              completed={todo.completed}
              id={todo.id}
            />
          ))}
        </ul>
      ) : (
        <p className='noTasks'>No todos</p>
      )}
    </div>
  );
};

export default TodoList;
