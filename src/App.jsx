import './App.css';
import React  from 'react';
import Blog from './pages/Blog';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

const App = ( ) => (
      <div className='container'>
      <Routes>
     <Route path="/" component={Home} />
    <Route path="/blog/:id" component={Blog} />
  </Routes>
    </div>
  );

export default App;

