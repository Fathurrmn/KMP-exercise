import React from 'react';
import { ShieldCheck, Lock, Landmark } from 'lucide-react';
import { SITE_CONFIG } from '../../constants/siteConfig';

export default function DashboardFooter({ onActionClick }) {
  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_12px_rgba(31,41,55,0.03)] border-t border-outline-variant/20 mt-space-xl">
      <div className="max-w-7xl mx-auto px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg mb-space-lg">
          {/* Kolom 1 */}
          <div className="md:col-span-2 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-sm font-bold">
                M
              </div>
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {SITE_CONFIG.shortName}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md leading-relaxed">
              Pemberdayaan ekonomi kerakyatan berbasis gotong royong digital. Terdaftar dan diawasi oleh {SITE_CONFIG.legal.supervision}.
            </p>
            <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
              <span className="px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-[11px] text-on-surface-variant">
                {SITE_CONFIG.legal.skKemenkumham}
              </span>
              <span className="px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-[11px] text-on-surface-variant">
                {SITE_CONFIG.legal.izinUsahaSimpanPinjam}
              </span>
            </div>
          </div>

          {/* Kolom 2 */}
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-lg text-label-lg font-bold text-on-surface mb-space-xs">
              Layanan Anggota
            </span>
            {[
              'Simpanan Sukarela & Wajib',
              'Pengajuan Modal UMKM',
              'Katalog Pasokan Sembako',
              'Alokasi Dividen SHU',
            ].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => onActionClick && onActionClick(label)}
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Kolom 3 */}
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-lg text-label-lg font-bold text-on-surface mb-space-xs">
              Pusat Bantuan Desa
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {SITE_CONFIG.legalAddress}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              WhatsApp: {SITE_CONFIG.contact.helpdeskDisplay}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Email: {SITE_CONFIG.contact.email}
            </span>
            <div className="flex items-center gap-space-xs mt-space-xs">
              <span className="px-space-sm py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold">
                Jam Layanan: {SITE_CONFIG.contact.serviceHours}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant text-center sm:text-left">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {SITE_CONFIG.legal.copyright}
          </span>
          <div className="flex items-center gap-space-md text-xs">
            <span className="flex items-center gap-1 text-on-surface-variant">
              <Lock className="w-3.5 h-3.5 text-primary" /> {SITE_CONFIG.legal.encryption}
            </span>
            <span className="flex items-center gap-1 text-on-surface-variant">
              <Landmark className="w-3.5 h-3.5 text-secondary" /> Pengawasan Kemendesa
            </span>
          </div>
        </div>

        <div className="pt-3 mt-3 border-t border-outline-variant/10 text-center">
          <p className="font-label-sm text-[11px] text-on-surface-variant/75">
            {SITE_CONFIG.demoNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}

