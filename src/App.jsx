import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Layout from './component/Layout';
import NotFound from './pages/NotFound';
import RequireAuth from './component/RequireAuth';
import AuthForm from './component/AuthForm';
import { Suspense, lazy } from 'react';

const ExploreForts = lazy(() => import('./pages/ExploreForts'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FortDetails = lazy(() => import('./pages/FortDetails'));
const DistrictPage = lazy(() => import('./pages/DistrictPages'));
const HostFortDetails = lazy(() => import('./host/HostFortDetails'));
const HostArchitectureFeatures = lazy(() => import('./host/HostArchitectureFeatures'));
const HostReach = lazy(() => import('./host/HostReach'));
const HostEntryDetails = lazy(() => import('./host/HostEntryDetails'));
const HostPhotoGallery = lazy(() => import('./host/HostPhotoGallery'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/auth" element={<AuthForm />} />

        {/* Default route redirects to /auth */}
        <Route path="/" element={<Navigate to="/auth" />} />

        {/* Protected Routes */}
        <Route
          path="/app"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="explore" element={<Suspense fallback={<Loading />}><ExploreForts /></Suspense>} />
          <Route path="about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>} />
          <Route path="district/:districtName" element={<Suspense fallback={<Loading />}><DistrictPage /></Suspense>} />
          <Route path="forts/:id" element={<Suspense fallback={<Loading />}><FortDetails /></Suspense>}>
            <Route index element={<Suspense fallback={<Loading />}><HostFortDetails /></Suspense>} />
            <Route path="architecture" element={<Suspense fallback={<Loading />}><HostArchitectureFeatures /></Suspense>} />
            <Route path="reach" element={<Suspense fallback={<Loading />}><HostReach /></Suspense>} />
            <Route path="entry" element={<Suspense fallback={<Loading />}><HostEntryDetails /></Suspense>} />
            <Route path="photo" element={<Suspense fallback={<Loading />}><HostPhotoGallery /></Suspense>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Loading() {
  return (
    <div className="loading-container">
      <span className="loader"></span>
      <p>Loading...</p>
    </div>
  );
}

export default App;
