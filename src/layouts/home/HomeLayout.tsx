import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'pages/404';
import PageLoadingBar from 'components/PageLoadingBar';

const Home = React.lazy(() => import('pages/home'));
const CounterPage = React.lazy(() => import('pages/counter'));
const ExamplePage = React.lazy(() => import('pages/example'));

const HomeLayout = () => {
  return (
    <main>
      <section className='bg-gray-200'>
        <div className='layout'>
          <React.Suspense fallback={<PageLoadingBar />}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/counter' component={CounterPage} />
              <Route exact path='/example' component={ExamplePage} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </React.Suspense>
        </div>
      </section>
    </main>
  );
};

export default HomeLayout;
