import React from 'react';
import './App.css';
import DevelopwithTM from './components/DevelopwithTM';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DevelopwithTM />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/update/:id" element={<UpdateUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;

