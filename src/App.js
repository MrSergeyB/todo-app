import React from 'react';
import Nav from './components/nav';
import TodoInput from './components/todo-input';
import TodoState from './components/context/todo-state';
import TodoList from './components/todo-list';
import Footer from './components/footer';

import './App.css';

const App = () => {
  return (
    <TodoState>
      <div>
        <div className='container'>
          <div className='appwraper'>
            <Nav />
            <TodoInput />
            <TodoList />
          </div>
        </div>
        <Footer />
      </div>
    </TodoState>
  );
};

export default App;
