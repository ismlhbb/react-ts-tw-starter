import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'pages/404';
import PageLoadingBar from 'components/PageLoadingBar';

const Home = React.lazy(() => import('pages/home'));

const HomeLayout = () => {
  return (
    <main>
      <section className='bg-dark'>
        <div className='layout'>
          <React.Suspense fallback={<PageLoadingBar />}>
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </React.Suspense>
        </div>
      </section>
    </main>
  );
};

export default HomeLayout;
