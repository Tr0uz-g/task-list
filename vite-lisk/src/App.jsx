import { useState } from 'react'
import TaskList from './components/TaskList'
import Header from './components/header'
import './app.css'
function App() {
  return (
    <>
      <div className='box-1'>
        <Header />
          <div className='box-list'>
          <TaskList />
         </div>
      </div>
    </>
  )
}

export default App
