import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollRestoration from 'components/ScrollRestoration';
import PageLoadingBar from 'components/PageLoadingBar';
import RouteList from 'config/RouteList';

const App = () => {
  return (
    <Router>
      <ScrollRestoration />
      <React.Suspense fallback={<PageLoadingBar isFallback={true} />}>
        <RouteList />
      </React.Suspense>
    </Router>
  );
};

export default App;
