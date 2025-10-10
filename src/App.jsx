import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingBar from "./components/LoadingBar";
import RatingChart from "./components/RatingChart";
const Home = React.lazy(() => import("./pages/Home"));
const AllApps = React.lazy(() => import("./pages/AllApps"));
const Installation = React.lazy(() => import("./pages/Installation"));
const AppDetails = React.lazy(() => import("./pages/AppDetails"));
const MyInstallations = React.lazy(() => import("./pages/MyInstallations"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
  const location = useLocation();
  const [routeLoading, setRouteLoading] = useState(false);

  // show a tiny loading bar on route change
  useEffect(() => {
    setRouteLoading(true);
    const t = setTimeout(() => setRouteLoading(false), 350);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      {routeLoading && <LoadingBar />}
      <main className="flex-grow">
        <Suspense
          fallback={<div className="py-20 text-center">Loading...</div>}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<AllApps />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/app/:id" element={<AppDetails />} />
            <Route path="/my-installations" element={<MyInstallations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
