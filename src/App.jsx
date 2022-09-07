import './App.css';
import React  from 'react';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Route } from 'react-router-dom';

const App = ( ) => (
      <div className='container'>
      <Switch>
     <Route path="/" component={Home} />
    <Route path="/blog/:id" component={Blog} />
  </Switch>
    </div>
  );

export default App;

