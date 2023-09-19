import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventExample from './components/EventsExample';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
// import TodoItemPage from './components/TodoItemPage';
import { NavLink } from 'react-router-dom';

function App() {  
  

      return (
        <BrowserRouter>
            <div className="App">
              <div>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
              </div>
              <Routes>
              <Route path="/users" element={<UsersPage/>} />
              <Route path="/todos" element={<TodosPage/>} />
              <Route path='/users/:id' element={<UserItemPage/>}/>
              {/* <Route path='/todos/:id' element={<TodoItemPage/>}/> */}
              </Routes>
            </div>
        </BrowserRouter>
        
      );
}

export default App;
