import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Pages/Login/login';
import Signup from './Pages/Signup/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Women from './Pages/Women/women';
import Men from './Pages/Men/men';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/women' element={<Women />}/>
      <Route path='/men' element={<Men />}/>
    </Routes>
  </Router>
);