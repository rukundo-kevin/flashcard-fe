import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import CreateFlashcard from '../components/CreateFlashcard';
import Dashboard from '../components/Dashboard';
import FlashcardList from '../components/FlashcardList';

const AllRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} >
         <Route path='create' element={<CreateFlashcard />} />
         <Route path='viewCards' element={<FlashcardList />} />
      </Route>
    </Routes>
  </Router>
);

export default AllRoutes;
