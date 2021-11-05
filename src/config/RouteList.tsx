import * as React from 'react';
import { useRoutes } from 'react-router';
import HomeLayout from 'layouts/home/HomeLayout';

const Home = React.lazy(() => import('pages/home'));
const CounterPage = React.lazy(() => import('pages/counter'));
const ExamplePage = React.lazy(() => import('pages/example'));
const NotFoundPage = React.lazy(() => import('pages/404'));

export default function RouteList() {
  const list = useRoutes([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'counter', element: <CounterPage /> },
        { path: 'example', element: <ExamplePage /> },
      ],
    },
    { path: '*', element: <NotFoundPage /> },
  ]);
  return list;
}
