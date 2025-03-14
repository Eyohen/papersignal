import React, { useState } from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';

const App = () => {
return (
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  </Routes>
)
}

export default App