import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, MapPin, Mail, MessageSquare, Globe, Share2, MessageCircle, ExternalLink, ArrowUpRight } from 'lucide-react';
import IMAGES from '../../constants/images';
import { SITE_CONFIG } from '../../constants/siteConfig';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSmoothScroll = (hash) => {
    if (location.pathname === '/') {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${hash}`);
    }
  };

  return (
    <footer id="kontak" className="w-full bg-surface-container-high text-on-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
          {/* Kolom 1: Profil & Legalitas */}
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Logo Koperasi Desa Merah Putih"
                className="h-8 w-auto object-contain"
                src={IMAGES.LOGO}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                Koperasi Desa
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Membangun Kemandirian Ekonomi Desa Bersama Gotong Royong Rakyat. Menghubungkan potensi lokal dengan permodalan dan pasar yang adil.
            </p>
            <div className="flex flex-col gap-space-xs pt-space-xs">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-lowest rounded-lg shadow-sm border border-outline-variant/30">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Sertifikasi Resmi</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Kemenkop & UKM RI</span>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                Nomor SK AHU: AHU-0012984.AH.01.26.2023
              </span>
            </div>
          </div>

          {/* Kolom 2: Layanan Utama */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Layanan Utama</h3>
            <ul className="flex flex-col gap-space-sm">
              <li>
                <button
                  onClick={() => handleSmoothScroll('#layanan')}
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors text-left"
                >
                  Simpan Pinjam Merah Putih
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('#unit-usaha')}
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors text-left"
                >
                  Toko & Gerai Sembako Desa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('#simulasi')}
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors text-left"
                >
                  Modal Usaha Pertanian & UMKM
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('#unit-usaha')}
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors text-left"
                >
                  Logistik & Gudang Pangan
                </button>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  Layanan Digital & QRIS Anggota
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Tautan Cepat */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Tautan Cepat</h3>
            <ul className="flex flex-col gap-space-sm">
              <li>
                <Link
                  to="/tentang-kami"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  Tentang Kami & Struktur Pengurus
                </Link>
              </li>
              <li>
                <Link
                  to="/berita"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  Laporan RAT & Warta Berita
                </Link>
              </li>
              <li>
                <Link
                  to="/daftar-anggota"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  Pendaftaran Anggota Baru (Online)
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  Portal Dashboard Anggota
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('#faq')}
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors text-left"
                >
                  Tanya Jawab & Pusat Bantuan
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami & Peta */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Hubungi Kami</h3>
            <div className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <div className="flex items-start gap-space-xs">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Gedung Balai Koperasi Mandiri Jl. Raya Desa Merah Putih No. 45</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@koperasimerahputih.id" className="hover:underline">
                  info@koperasimerahputih.id
                </a>
              </div>
              <div className="flex items-center gap-space-xs">
                <MessageSquare className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WA: 0812-3456-7890
                </a>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-space-xs pt-space-xs">
              <a
                href="https://koperasimerahputih.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary transition-all"
                title="Website Resmi"
              >
                <Globe className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: 'Koperasi Desa Merah Putih', url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Tautan koperasi berhasil disalin ke clipboard!');
                  }
                }}
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary transition-all"
                title="Bagikan Halaman"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Admin%20Koperasi%20Desa%20Merah%20Putih"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary transition-all"
                title="Konsultasi WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Peta Kantor */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow group border border-outline-variant/20"
            >
              <div className="flex items-center gap-space-xs">
                <MapPin className="w-5 h-5 text-secondary" />
                <div className="flex flex-col text-left">
                  <span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                    Peta Kantor Pusat
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Navigasi Google Maps</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-surface-container-highest py-space-md border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-sm text-center md:text-left">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {SITE_CONFIG.legal.copyright} Terdaftar & Diawasi oleh {SITE_CONFIG.legal.supervision}.
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {SITE_CONFIG.legal.encryption}
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-margin pt-2 mt-2 border-t border-outline-variant/10 text-center">
          <p className="font-label-sm text-[11px] text-on-surface-variant/75">
            {SITE_CONFIG.demoNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}

