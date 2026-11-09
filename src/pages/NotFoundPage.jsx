import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import usePageMetadata from '../hooks/usePageMetadata';

export default function NotFoundPage() {
  usePageMetadata('Halaman Tidak Ditemukan', 'Halaman yang Anda tuju tidak ditemukan atau telah dipindahkan.');

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-margin py-space-xl">
      <div className="max-w-md w-full bg-surface-container-lowest p-space-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] text-center flex flex-col items-center gap-space-md border border-outline-variant/30">
        <div className="w-20 h-20 rounded-full bg-primary-container/10 text-primary flex items-center justify-center font-black text-3xl">
          404
        </div>
        <div className="flex flex-col gap-space-xs">
          <h1 className="font-headline-md text-headline-md font-bold text-on-surface">
            Halaman Tidak Ditemukan
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Mohon maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-full bg-primary-container text-on-primary font-label-lg font-bold shadow-md hover:bg-primary transition-all active:scale-95"
        >
          <Home className="w-5 h-5" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  );
}

