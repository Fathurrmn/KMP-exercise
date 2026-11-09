import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, ArrowLeft, Menu, X, ShieldCheck, Home } from 'lucide-react';
import IMAGES from '../../constants/images';
import { MEMBER_PROFILE } from '../../data/memberData';

export default function DashboardNavbar({ onActionClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', active: true },
    { id: 'simpanan', label: 'Simpanan', isTab: true },
    { id: 'pinjaman', label: 'Pinjaman', isTab: true },
    { id: 'toko-desa', label: 'Belanja Toko Desa', isTab: true },
    { id: 'laporan-shu', label: 'Laporan SHU', isTab: true },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(31,41,55,0.05)] border-b border-outline-variant/20">
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-md">
        {/* Brand & Left Nav */}
        <div className="flex items-center gap-space-lg">
          <Link to="/" className="flex items-center gap-space-sm group focus:outline-none" title="Kembali ke Beranda">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary font-headline-md font-black shadow-sm group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-primary font-bold">
                Koperasi Desa
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-[11px]">
                Merah Putih Sukamaju
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-space-xs">
            {navItems.map((item) => {
              if (item.active) {
                return (
                  <span
                    key={item.id}
                    className="px-space-md py-space-sm bg-primary-container text-on-primary font-bold rounded-lg shadow-sm text-label-md"
                  >
                    {item.label}
                  </span>
                );
              }
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onActionClick && onActionClick(item.label)}
                  className="px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right CTA & Profile */}
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          {/* Back to Home Button */}
          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high text-xs font-semibold transition-colors"
            title="Keluar ke Website Publik"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Ke Beranda</span>
          </Link>

          {/* Notifications Button */}
          <button
            type="button"
            onClick={() => onActionClick && onActionClick('Notifikasi Anggota')}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors relative"
            title="Pusat Notifikasi"
          >
            <Bell className="w-5 h-5 text-on-surface" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-primary-container ring-2 ring-surface animate-pulse" />
          </button>

          {/* Member Profile Avatar Pill */}
          <div className="hidden sm:flex items-center gap-space-sm bg-surface-container-lowest px-space-md py-space-xs rounded-full shadow-[0_1px_4px_rgba(31,41,55,0.06)] border border-outline-variant/30">
            <div className="flex flex-col text-right">
              <div className="flex items-center justify-end gap-space-xs">
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  {MEMBER_PROFILE.name}
                </span>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] font-bold">
                  {MEMBER_PROFILE.status}
                </span>
              </div>
              <span className="font-body-sm text-[11px] text-on-surface-variant">
                Anggota Utama • {MEMBER_PROFILE.unit}
              </span>
            </div>
            <img
              alt={MEMBER_PROFILE.name}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20"
              src={MEMBER_PROFILE.avatar}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-margin py-space-md shadow-xl flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (item.active) return;
                onActionClick && onActionClick(item.label);
              }}
              className={`text-left py-2 px-3 rounded-lg font-body-md ${
                item.active
                  ? 'bg-primary-container text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-surface-container flex justify-between items-center text-xs text-on-surface-variant">
            <span>Siti Aminah ({MEMBER_PROFILE.id})</span>
            <Link to="/" className="text-primary font-bold">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

