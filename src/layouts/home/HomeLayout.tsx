import { Outlet } from 'react-router-dom';
import PageLoadingBar from 'components/PageLoadingBar';
import Header from 'components/header/Header';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section className='bg-gray-50'>
          <div className='layout'>
            <PageLoadingBar isFallback={false} />
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeLayout;
