import React, { useState } from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Documentation from './pages/Documentation';

const App = () => {
return (
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Register />} />
  <Route path="/documentation" element={<Documentation />} />
  </Routes>
)
}

export default App