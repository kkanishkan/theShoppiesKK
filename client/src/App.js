import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

const AppRoutes = () => (
  <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </div>
);

function App() {
  return (
    <Switch>
      <AppRoutes/>
    </Switch>
  );
}

export default App;
