import {SongsPage, Home, Canvas } from './components';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
  return (
    <Route
    {...rest}
    render={() =>
      (
        <Home>
          {children}
        </Home>
      ) 
    }
  />
  )
}

function App() {
  return (
    <Router>

      <Switch>
        <PublicRoute path="/" exact>
            <h1>Ana Sayfa</h1>
        </PublicRoute>

        <PublicRoute path="/songs" exact>
            <SongsPage />
        </PublicRoute>

        <PublicRoute path="/canvas" exact>
            <Canvas />
        </PublicRoute>

      </Switch>
    </Router>

  );

}

export default App;
