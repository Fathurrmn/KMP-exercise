import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Target,
  Compass,
  Users,
  Building,
  FileCheck,
  Sparkles,
} from 'lucide-react';
import IMAGES from '../constants/images';
import KawungPattern from '../components/common/KawungPattern';
import usePageMetadata from '../hooks/usePageMetadata';
import { TIMELINE_DATA, VISI_MISI } from '../data/history';
import { SUPERVISORY_BOARD, MANAGEMENT_BOARD, LEGALITY_ITEMS } from '../data/team';

export default function AboutPage() {
  usePageMetadata('Tentang Kami', 'Sejarah 12 tahun, profil dewan pengurus, dewan pengawas, serta legalitas resmi Koperasi Desa Merah Putih.');

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* SECTION 1: HERO & FILOSOFI */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface py-space-xl">
        <KawungPattern className="absolute -top-16 -right-16 w-96 h-96 opacity-[0.03] text-primary" />
        <div className="max-w-7xl mx-auto px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant self-start font-label-md text-label-md border border-primary/10 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="font-bold">Sejarah, Tata Kelola & Integritas Desa</span>
              </div>

              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-extrabold tracking-tight leading-tight">
                Mengabdi untuk Kesejahteraan dan Kemandirian Warga Desa
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Koperasi Desa Merah Putih lahir dari kesadaran murni bahwa kemakmuran petani dan pedagang kecil hanya dapat diwujudkan melalui kekuatan gotong royong terorganisir. Kami memadukan amanah musyawarah leluhur dengan transparansi manajemen keuangan modern.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-xs">
                <div className="p-space-sm bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex flex-col">
                  <span className="font-headline-md text-primary font-bold font-mono">12+ Tahun</span>
                  <span className="font-label-sm text-on-surface-variant">Melayani warga desa</span>
                </div>
                <div className="p-space-sm bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex flex-col">
                  <span className="font-headline-md text-primary font-bold font-mono">100%</span>
                  <span className="font-label-sm text-on-surface-variant">Milik anggota sah</span>
                </div>
                <div className="p-space-sm bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex flex-col col-span-2 sm:col-span-1">
                  <span className="font-headline-md text-secondary font-bold font-mono">Grade AAA</span>
                  <span className="font-label-sm text-on-surface-variant">Akreditasi Kemenkop</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative group">
                <div className="overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(31,41,55,0.12)] border-4 border-surface-container-lowest">
                  <img
                    alt="Gedung Balai Koperasi Desa Merah Putih"
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    src={IMAGES.ABOUT_HERO}
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-surface-container-lowest p-space-sm rounded-2xl shadow-lg border border-outline-variant/30 flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
                  <span className="font-label-sm text-on-surface font-bold">
                    Balai Pelayanan Cibodas, Jawa Barat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VISI 2030 & 4 PILAR MISI */}
      <section className="w-full py-space-xl bg-surface-container-lowest border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-space-xs">
            <span className="font-label-md text-label-md text-primary font-bold tracking-wider uppercase bg-primary-fixed/40 px-3 py-1 rounded-full border border-primary/10">
              Arah & Tujuan Lembaga
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Visi Strategis Menuju Kemandirian Desa 2030
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Komitmen jangka panjang untuk mengangkat martabat ekonomi pedesaan agar mampu berdiri di atas kaki sendiri.
            </p>
          </div>

          {/* Visi Callout Card */}
          <div className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary p-space-lg lg:p-space-xl rounded-3xl shadow-xl relative overflow-hidden">
            <KawungPattern className="absolute -right-12 -bottom-12 w-80 h-80 opacity-10 text-white" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-space-lg relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm uppercase tracking-widest text-on-primary-container font-bold">
                  Visi Besar Koperasi 2030
                </span>
                <p className="font-headline-md text-headline-md font-bold text-white leading-relaxed">
                  "{VISI_MISI.visi}"
                </p>
              </div>
            </div>
          </div>

          {/* 4 Pilar Misi Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {VISI_MISI.misi.map((m, idx) => (
              <div
                key={m.title}
                className="bg-surface p-space-md rounded-2xl border border-outline-variant/30 flex flex-col gap-space-xs shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-bold text-xs flex items-center justify-center font-mono">
                  0{idx + 1}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                  {m.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TIMELINE 12 TAHUN (RESPONSIVE: VERTICAL MOBILE, ALTERNATING DESKTOP) */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="max-w-2xl flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md text-primary font-bold tracking-wider uppercase">
                Jejak Langkah Gotong Royong
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                Perjalanan 12 Tahun Mengukir Sejarah Desa
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Dari rembuk santai 25 petani di gubuk sawah hingga kini melayani lebih dari 1.400 keluarga dengan aset puluhan miliar rupiah.
              </p>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-high px-space-md py-2 rounded-full shrink-0">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="font-label-md text-label-md font-bold text-on-surface">Periode 2012 — 2025</span>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative flex flex-col gap-space-xl">
            {/* Center Spine Line (Desktop) */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1 bg-surface-container -translate-x-1/2 rounded-full"
            />

            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col lg:flex-row items-center gap-space-lg ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card Content (5 Cols) */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-xs hover:shadow-md transition-shadow">
                      <div className={`flex items-center gap-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <span className="px-3 py-0.5 rounded-full bg-primary-fixed/40 text-primary font-bold text-xs">
                          {item.badge}
                        </span>
                        <span className="font-label-sm text-xs font-mono text-on-surface-variant">
                          {item.stats}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {item.year} — {item.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node / Pin */}
                  <div className="hidden lg:flex w-2/12 items-center justify-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-bold font-mono text-sm flex items-center justify-center shadow-lg ring-4 ring-surface">
                      {item.year}
                    </div>
                  </div>

                  {/* Thumbnail Image (5 Cols) */}
                  <div className="w-full lg:w-5/12 overflow-hidden rounded-2xl shadow-sm border border-outline-variant/30 h-52">
                    <img
                      alt={item.title}
                      src={item.image}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: STRUKTUR PENGURUS & PENGAWAS */}
      <section className="w-full py-space-xl bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-space-xs">
            <span className="font-label-md text-label-md text-primary font-bold tracking-wider uppercase bg-primary-fixed/40 px-3 py-1 rounded-full border border-primary/10">
              Tata Kelola Amanah
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Struktur Organisasi & Dewan Kepengurusan
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Dipilih secara demokratis oleh seluruh anggota pada Rapat Anggota Tahunan (RAT) untuk masa bakti 2023–2028.
            </p>
          </div>

          {/* Dewan Pengawas (2 Orang) */}
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs border-b border-outline-variant/30 pb-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Badan Pengawas Koperasi
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {SUPERVISORY_BOARD.map((p) => (
                <div
                  key={p.name}
                  className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 flex items-center gap-space-md shadow-sm"
                >
                  <img
                    alt={p.name}
                    src={p.image}
                    className="w-20 h-20 rounded-full object-cover shrink-0 ring-2 ring-primary/20"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-sm text-xs font-bold text-primary uppercase">
                      {p.role}
                    </span>
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      {p.name}
                    </h4>
                    <span className="font-body-sm text-[12px] text-on-surface-variant font-medium">
                      {p.experience}
                    </span>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-snug">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dewan Pengurus Utama (4 Orang) */}
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs border-b border-outline-variant/30 pb-2">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Dewan Pengurus Harian
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {MANAGEMENT_BOARD.map((m) => (
                <div
                  key={m.name}
                  className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 flex flex-col gap-space-xs shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="h-44 w-full rounded-xl overflow-hidden mb-1">
                    <img
                      alt={m.name}
                      src={m.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="font-label-sm text-xs font-bold text-primary uppercase">
                    {m.role}
                  </span>
                  <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    {m.name}
                  </h4>
                  <span className="font-body-sm text-[11px] text-secondary font-semibold">
                    {m.experience}
                  </span>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LEGALITAS & AKREDITASI RESMI */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left 6 cols */}
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed self-start font-label-md font-bold">
                <Award className="w-4 h-4 text-secondary" />
                <span>Akreditasi & Kepastian Hukum</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                Legalitas Resmi & Akreditasi Lembaga
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Seluruh simpanan dan aktivitas usaha Koperasi Desa Merah Putih dilindungi payung hukum Republik Indonesia dan diawasi berkala oleh dinas terkait.
              </p>
              <div className="p-space-md bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-space-sm text-emerald-950">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-label-md font-bold text-emerald-900">
                    Predikat Koperasi Sehat: Sangat Berkualitas (Skor 89.4)
                  </span>
                  <span className="font-body-sm text-xs text-emerald-800">
                    Berdasarkan audit kelayakan finansial dan kepatuhan hukum Kemenkop & UKM RI.
                  </span>
                </div>
              </div>
            </div>

            {/* Right 6 cols: Table of Legality */}
            <div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-3xl border border-outline-variant/30 shadow-sm flex flex-col gap-space-sm">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface border-b border-outline-variant/20 pb-2">
                Daftar Izin & Nomor Registrasi Resmi
              </h3>
              <div className="flex flex-col gap-2">
                {LEGALITY_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="p-3 bg-surface rounded-xl border border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <div className="flex flex-col">
                      <span className="font-label-sm text-xs text-on-surface-variant">{item.label}</span>
                      <span className="font-label-md text-on-surface font-bold font-mono">{item.value}</span>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-surface-container font-medium text-on-surface-variant self-start sm:self-center">
                      {item.issuer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA AKHIR */}
      <section className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-space-xl relative overflow-hidden">
        <KawungPattern className="absolute -left-10 -bottom-10 w-80 h-80 opacity-10 text-white" />
        <div className="max-w-7xl mx-auto px-margin relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-lg text-center md:text-left">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container font-bold">
              Mari Bergerak Bersama
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-primary font-black tracking-tight">
              Jadilah Bagian dari Kemandirian Ekonomi Desa Kami
            </h2>
            <p className="font-body-md text-body-md text-on-primary/90 leading-relaxed">
              Pintu keanggotaan selalu terbuka bagi seluruh warga desa. Bersama kita kuat, bergotong royong kita mandiri.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-space-sm shrink-0">
            <Link
              to="/daftar-anggota"
              className="px-space-xl py-3.5 rounded-full bg-surface-container-lowest text-primary hover:bg-surface-container font-label-lg font-bold shadow-lg transition-all active:scale-95"
            >
              Daftar Anggota Sekarang
            </Link>
            <Link
              to="/"
              className="px-space-lg py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-on-primary font-label-lg font-semibold transition-all border border-white/25 backdrop-blur-sm"
            >
              Lihat Unit Usaha Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
