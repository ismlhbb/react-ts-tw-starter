import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "pages/404";
import PageLoadingBar from "components/PageLoadingBar";
import Header from "components/header/Header";

const Home = React.lazy(() => import("pages/home"));
const CounterPage = React.lazy(() => import("pages/counter"));
const ExamplePage = React.lazy(() => import("pages/example"));

const HomeLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-50">
          <div className="layout">
            <PageLoadingBar isFallback={false} />
            <React.Suspense fallback={<PageLoadingBar isFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<CounterPage />} />
                <Route path="/example" element={<ExamplePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </React.Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeLayout;
