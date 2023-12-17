import React from 'react';
import TaskList from './components/TaskList';
import Header from './components/header';
import { TaskListProvider } from './components/TaskListContext';
import './app.css';

function App() {
  return (
    <TaskListProvider>
      <div className='box-1'>
        <Header />
        <div className='box-list'>
          <TaskList />
        </div>
      </div>
    </TaskListProvider>
  );
}

export default App;
