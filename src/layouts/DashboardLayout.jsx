import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/common/DashboardNavbar';
import DashboardFooter from '../components/common/DashboardFooter';
import { AlertCircle, X, CheckCircle2 } from 'lucide-react';

export default function DashboardLayout() {
  const [modalFeature, setModalFeature] = useState(null);

  const handleActionClick = (featureName) => {
    setModalFeature(featureName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary">
      <DashboardNavbar onActionClick={handleActionClick} />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <Outlet context={{ onActionClick: handleActionClick }} />
      </main>

      <DashboardFooter onActionClick={handleActionClick} />

      {/* Feature In Development Modal */}
      {modalFeature && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-margin">
          <div className="bg-surface-container-lowest max-w-md w-full rounded-3xl p-space-lg shadow-2xl border border-outline-variant/30 text-center flex flex-col items-center gap-space-md animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-secondary-fixed/40 text-secondary flex items-center justify-center">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-xs text-primary font-bold uppercase tracking-wider">
                Mode Demo Interaktif
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                {modalFeature}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Fitur ini siap diintegrasikan dengan backend transaksi Koperasi Desa. Dalam mode demo pratinjau ini, seluruh data disimulasikan secara aman di sisi klien.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setModalFeature(null)}
              className="w-full py-3 rounded-full bg-primary-container text-on-primary font-label-md font-bold shadow-md hover:bg-primary transition-all active:scale-95"
            >
              Mengerti & Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

