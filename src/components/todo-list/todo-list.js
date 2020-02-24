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
          {list.map(({todo, important, id}) => (
            <TodoItem key={id} todo={todo} important={important} id={id} />
          ))}
        </ul>
      ) : (
        <p className='noTasks'>No todos</p>
      )}
    </div>
  );
};

export default TodoList;
