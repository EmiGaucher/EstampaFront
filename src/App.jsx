import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/resetPassword' element={<ResetPassword/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;
