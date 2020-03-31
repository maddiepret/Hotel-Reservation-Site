import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Room from './components/pages/Room';
import SingleRoom from './components/pages/SingleRoom';
import Error from './components/pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/' component={Room} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
export default App;
