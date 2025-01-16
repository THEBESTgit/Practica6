import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Product from './screens/Product';

const App = () => {
  return (
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      
    </Routes>
  );
};

export default App;
