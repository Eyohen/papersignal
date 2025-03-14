import React, { useState } from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
return (
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
  </Routes>
)
}

export default App