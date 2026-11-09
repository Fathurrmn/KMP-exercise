import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Code-splitting routes with React.lazy
const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Fallback Loader Component
function PageLoader() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-surface gap-4">
      <div className="w-12 h-12 rounded-2xl bg-primary-container text-on-primary font-headline-md font-bold flex items-center justify-center shadow-lg animate-bounce">
        M
      </div>
      <div className="flex items-center gap-2 text-primary font-label-md text-sm font-semibold">
        <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
        <span>Memuat halaman Koperasi Desa...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public Routes with Navbar and Public Footer */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang-kami" element={<AboutPage />} />
            <Route path="/daftar-anggota" element={<RegisterPage />} />
            <Route path="/berita" element={<NewsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Member Dashboard Route with DashboardLayout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
