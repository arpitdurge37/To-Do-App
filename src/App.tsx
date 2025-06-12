import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { TodoHome } from './components/todo-home';
import { ToDoLogin } from './components/todo-login';
import { ToDoRegister } from './components/todo-register';
import { ToDoUserDashBoard } from './components/todo-user-dash';
import { ToDoAddTask } from './components/todo-add-task';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header>
          <h1 className='text-center'>
            <Link to="/" className='text-white text-decoration-none'>To-Do</Link>
          </h1>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<TodoHome />} />
            <Route path='login' element={<ToDoLogin />} />
            <Route path='register' element={<ToDoRegister />} />
            <Route path='dash/:userid' element={<ToDoUserDashBoard />} />
            <Route path='add-task' element={<ToDoAddTask />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
