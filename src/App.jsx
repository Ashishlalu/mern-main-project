import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Product from './pages/Product';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/Register' element={<Auth insideRegister={true}/>}></Route>
      <Route path='/product' element={<Product />} />
      <Route path='/profile' element={<Profile />} />


      
    </Routes>
  );
};

export default App;
