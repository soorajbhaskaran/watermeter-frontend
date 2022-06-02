import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState} from 'react';

import Login from './components/Login';
import AdminLogin from './components/admin/AdminLogin';
import Home from './components/Home';
import AdminDash from './components/admin/AdminDash';

function App() {

  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dash" element={<AdminDash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
