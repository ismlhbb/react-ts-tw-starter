import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import ScrollRestoration from 'components/ScrollRestoration';
import HomeLayout from 'layouts/home/HomeLayout';
import NotFoundPage from 'pages/404';

const App = () => {
  return (
    <Router>
      <ScrollRestoration />
      <Switch>
        <Redirect exact from='/' to={{ pathname: '/home' }} />
        <Route path='/home' component={HomeLayout} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
