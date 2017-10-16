import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import App from '../ui/App';

const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/document/" component={App}/>
    </div>
  </Router>
);
