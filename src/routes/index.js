import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';

const AllRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);

export default AllRoutes;
