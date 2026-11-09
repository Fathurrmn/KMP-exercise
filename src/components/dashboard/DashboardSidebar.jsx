import React from 'react';
import {
  QrCode,
  Calendar,
  MapPin,
  ArrowRight,
  Bell,
  CheckCircle2,
  MessageSquare,
  Phone,
  Sparkles,
} from 'lucide-react';
import IMAGES from '../../constants/images';
import { MEMBER_PROFILE } from '../../data/memberData';
import { SITE_CONFIG } from '../../constants/siteConfig';

export default function DashboardSidebar({ onActionClick }) {
  return (
    <div className="flex flex-col gap-space-lg">
      {/* Widget 1: Digital Member Card (Kartu Digital Anggota Merah Putih) */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-primary via-primary-container to-secondary text-on-primary p-space-md shadow-[0_12px_32px_rgba(158,0,31,0.28)] flex flex-col justify-between relative min-h-[220px]">
        {/* Card Watermark Texture */}
        <div className="absolute right-0 top-0 w-44 h-44 opacity-10 pointer-events-none">
          <svg fill="currentColor" viewBox="0 0 100 100">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" />
          </svg>
        </div>

        {/* Card Top */}
        <div className="flex items-start justify-between relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-on-primary text-sm shadow-inner">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-xs font-bold tracking-wider uppercase">
                Kartu Digital Anggota
              </span>
              <span className="font-label-sm text-[10px] text-white/80">
                Koperasi Merah Putih Desa
              </span>
            </div>
          </div>
          {/* Contactless Icon */}
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-secondary-fixed"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M8.5 16.5a5 5 0 0 1 0-9M12 19a8.5 8.5 0 0 0 0-14M15.5 21.5a12 12 0 0 0 0-19" />
            </svg>
          </div>
        </div>

        {/* Card Middle: Member Name & ID */}
        <div className="my-space-md relative z-10 flex flex-col">
          <span className="font-headline-sm text-headline-sm font-extrabold tracking-wide uppercase drop-shadow-sm">
            {MEMBER_PROFILE.name}
          </span>
          <span className="font-mono text-sm tracking-widest text-primary-fixed mt-0.5">
            {MEMBER_PROFILE.cardNumber || 'KDMP • 2025 • 0894 • 2110'}
          </span>
        </div>

        {/* Card Bottom */}
        <div className="flex items-end justify-between pt-space-xs relative z-10 border-t border-white/15">
          <div className="flex flex-col">
            <span className="font-label-sm text-[10px] text-white/80 uppercase">
              Unit {MEMBER_PROFILE.unit} • {MEMBER_PROFILE.status}
            </span>
            <span className="font-label-sm text-xs font-semibold text-white">
              Berlaku s.d 12/28
            </span>
          </div>
          <button
            type="button"
            onClick={() => onActionClick && onActionClick('QR Belanja Anggota')}
            className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-xs font-bold shadow hover:bg-surface-container-low transition-all flex items-center gap-1.5 active:scale-95"
          >
            <QrCode className="w-4 h-4" />
            <span>QR Belanja</span>
          </button>
        </div>
      </div>

      {/* Widget 2: Jadwal & Komitmen Maret 2025 */}
      <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-[0_4px_20px_rgba(31,41,55,0.04)] border border-outline-variant/30 flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              Jadwal & Komitmen
            </h3>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            Maret 2025
          </span>
        </div>

        <div className="flex flex-col gap-space-xs mt-1">
          {/* Item 1 */}
          <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm border border-outline-variant/15">
            <div className="flex items-center gap-space-xs">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed flex flex-col items-center justify-center text-primary shrink-0">
                <span className="font-label-sm text-[10px] font-bold uppercase leading-none">Mar</span>
                <span className="font-headline-sm text-base font-extrabold leading-tight">10</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-xs font-bold text-on-surface">
                  Angsuran Pinjaman Usaha
                </span>
                <span className="font-label-sm text-[11px] text-primary font-semibold">
                  Rp 913.333 • Ke-9
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onActionClick && onActionClick('Bayar Angsuran Pinjaman')}
              className="px- space-sm px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-xs font-bold hover:bg-primary-container transition-colors shrink-0 shadow-sm"
            >
              Bayar
            </button>
          </div>

          {/* Item 2 */}
          <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm border border-outline-variant/15">
            <div className="flex items-center gap-space-xs">
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex flex-col items-center justify-center text-on-secondary-fixed shrink-0">
                <span className="font-label-sm text-[10px] font-bold uppercase leading-none">Mar</span>
                <span className="font-headline-sm text-base font-extrabold leading-tight">15</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-xs font-bold text-on-surface">
                  Simpanan Wajib Bulanan
                </span>
                <span className="font-label-sm text-[11px] text-on-surface-variant font-medium">
                  Rp 25.000 • Auto-Debet
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-[10px] font-bold border border-emerald-200">
              Otomatis
            </span>
          </div>

          {/* Item 3 */}
          <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm border border-outline-variant/15">
            <div className="flex items-center gap-space-xs">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex flex-col items-center justify-center text-on-surface shrink-0">
                <span className="font-label-sm text-[10px] font-bold uppercase leading-none">Mar</span>
                <span className="font-headline-sm text-base font-extrabold leading-tight">25</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-xs font-bold text-on-surface">
                  Tagihan Listrik Warung
                </span>
                <span className="font-label-sm text-[11px] text-on-surface-variant">
                  PLN Pascabayar Desa
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onActionClick && onActionClick('Pasang Pengingat Tagihan Listrik')}
              className="p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"
              title="Pasang Pengingat"
            >
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Widget 3: Program Pemberdayaan UMKM Desa */}
      <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-[0_4px_20px_rgba(31,41,55,0.04)] border border-outline-variant/30 flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold">
            Pemberdayaan UMKM
          </span>
          <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold">
            Gratis
          </span>
        </div>

        {/* Feature Image with Badge */}
        <div className="w-full h-36 rounded-lg overflow-hidden relative group">
          <img
            alt="Pelatihan Digital Packaging Warung Desa"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={IMAGES.DASHBOARD_WORKSHOP}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-2 left-3 right-3 text-white">
            <span className="font-label-sm text-[10px] uppercase font-bold text-secondary-fixed">
              Pelatihan Unggulan
            </span>
            <p className="font-label-md text-sm font-bold leading-tight">
              Packaging & Pemasaran Digital Warung Desa
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-on-surface-variant font-body-sm text-xs mt-1">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span>Minggu, 02 Maret 2025 • 09.00 WIB</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-secondary" />
            <span>Balai Pertemuan Warga Cibodas Kav. 4</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onActionClick && onActionClick('Pendaftaran Kuota Pelatihan UMKM')}
          className="w-full py-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface transition-all font-label-md text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm mt-1"
        >
          <span>Daftar Kuota Anggota</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Widget 4: Kontak Pengurus & Pendamping Lapangan (Kang Asep) */}
      <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-[0_4px_20px_rgba(31,41,55,0.04)] border border-outline-variant/30 flex flex-col gap-space-sm">
        <span className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-bold">
          Pendamping Ekonomi Desa
        </span>

        <div className="flex items-center gap-space-sm">
          <img
            alt={SITE_CONFIG.facilitator.name}
            className="w-12 h-12 rounded-full object-cover shrink-0 shadow-sm ring-2 ring-primary/20"
            src={IMAGES.DASHBOARD_FACILITATOR}
            loading="lazy"
          />
          <div className="flex flex-col">
            <span className="font-label-md text-sm font-bold text-on-surface">
              {SITE_CONFIG.facilitator.name}
            </span>
            <span className="font-body-sm text-[11px] text-on-surface-variant">
              {SITE_CONFIG.facilitator.role}
            </span>
            <span className="font-label-sm text-[10px] text-emerald-700 flex items-center gap-1 font-semibold mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              {SITE_CONFIG.facilitator.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-space-xs pt-space-xs">
          <a
            href={SITE_CONFIG.facilitator.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-space-sm rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors font-label-sm text-xs font-bold flex items-center justify-center gap-1 shadow-sm active:scale-95 border border-emerald-200"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => onActionClick && onActionClick(`Telepon Langsung Pendamping: ${SITE_CONFIG.facilitator.phone}`)}
            className="py-2 px-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface transition-colors font-label-sm text-xs font-bold flex items-center justify-center gap-1 shadow-sm active:scale-95 border border-outline-variant/20"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Telepon</span>
          </button>
        </div>
      </div>
    </div>
  );
}
