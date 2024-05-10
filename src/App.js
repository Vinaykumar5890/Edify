//import logo from './logo.svg';
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TaskList from './components/TaskList'
import AddTaskForm from './components/AddTaskForm'
import EditTaskForm from './components/EditTaskForm'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' component={TaskList} />
          <Route path='/add' component={AddTaskForm} />
          <Route path='/edit/:taskId' component={EditTaskForm} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
