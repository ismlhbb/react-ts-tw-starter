import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollRestoration from 'components/ScrollRestoration';
import HomeLayout from 'layouts/home/HomeLayout';
import NotFoundPage from 'pages/404';

const App = () => {
  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path='/*' element={<HomeLayout />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
