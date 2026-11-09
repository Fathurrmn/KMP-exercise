import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { PhoneCall, Menu, X, ArrowRight, User } from 'lucide-react';
import IMAGES from '../../constants/images';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(href);
      }
    }
  };

  const navLinks = [
    { label: 'Beranda', to: '/', exact: true },
    { label: 'Tentang Kami', to: '/tentang-kami' },
    { label: 'Layanan', to: '/#layanan', isHash: true },
    { label: 'Unit Usaha', to: '/#unit-usaha', isHash: true },
    { label: 'Simulasi Pinjaman', to: '/#simulasi', isHash: true },
    { label: 'Berita', to: '/berita' },
    { label: 'Kontak', to: '/#kontak', isHash: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-1'
          : 'bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] py-0'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-md">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-space-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg min-w-0"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            alt="Logo Koperasi Desa Merah Putih"
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
            src={IMAGES.LOGO}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col min-w-0">
            <span className="text-sm sm:text-headline-sm text-primary tracking-tight font-bold truncate">
              Koperasi Desa Merah Putih
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant hidden md:inline truncate">
              Gotong Royong Membangun Desa Mandiri
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-space-md">
          {navLinks.map((item) => {
            if (item.isHash) {
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.to)}
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-space-xs focus:outline-none"
                >
                  {item.label}
                </button>
              );
            }
            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.exact}
                className={({ isActive }) =>
                  `transition-colors py-space-xs font-body-md text-body-md ${
                    isActive
                      ? 'text-primary font-bold border-b-2 border-primary -mb-[2px]'
                      : 'text-on-surface-variant hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right CTA & Profile */}
        <div className="flex items-center gap-space-sm">
          {/* Hotline */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container hover:bg-surface-container-high transition-colors rounded-full"
            title="Chat WhatsApp Hotline Resmi"
          >
            <PhoneCall className="w-4 h-4 text-secondary shrink-0" />
            <div className="flex flex-col pr-space-xs text-left">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Hotline Resmi</span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">0812-3456-7890</span>
            </div>
          </a>

          {/* CTA Daftar Anggota */}
          <Link
            to="/daftar-anggota"
            className="hidden sm:inline-flex items-center justify-center px-space-md sm:px-space-lg py-2.5 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-full shadow-[0_2px_8px_rgba(200,16,46,0.25)] hover:bg-primary transition-all active:scale-95"
          >
            <span>Daftar Anggota</span>
          </Link>

          {/* User Profile / Dashboard Avatar */}
          <Link
            to="/dashboard"
            className="hidden sm:flex items-center pl-space-xs group relative focus:outline-none shrink-0"
            title="Portal Anggota: Ibu Siti Aminah (Klik untuk buka Dashboard)"
          >
            <img
              alt="Profile Siti Aminah"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary transition-all"
              src={IMAGES.AVATAR_HEADER}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="sr-only">Dashboard Anggota</span>
          </Link>

          {/* Hamburger Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container-high px-margin py-space-md shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-space-sm">
            {navLinks.map((item) => {
              if (item.isHash) {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.to)}
                    className="flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-outline" />
                  </button>
                );
              }
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.exact}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-2.5 px-3 rounded-lg font-body-md ${
                      isActive
                        ? 'bg-primary-container text-on-primary font-bold'
                        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </NavLink>
              );
            })}

            <div className="pt-space-sm border-t border-surface-container flex flex-col gap-space-xs">
              <Link
                to="/daftar-anggota"
                onClick={() => setMobileMenuOpen(false)}
                className="sm:hidden flex items-center justify-center py-2.5 px-4 bg-primary-container text-on-primary font-label-md rounded-xl font-bold shadow-sm"
              >
                Daftar Jadi Anggota
              </Link>
              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-space-xs py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors"
              >
                <User className="w-4 h-4 text-primary" />
                <div className="flex flex-col">
                  <span className="font-label-md text-on-surface font-semibold">Portal Anggota: Siti Aminah</span>
                  <span className="font-label-sm text-on-surface-variant">Klik untuk buka Dashboard Anggota</span>
                </div>
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-space-xs py-2 px-3 text-on-surface-variant hover:text-primary font-label-md"
              >
                <PhoneCall className="w-4 h-4 text-secondary" />
                <span>Hotline: 0812-3456-7890</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

