import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Wallet,
  Store,
  Truck,
  QrCode,
  ArrowRight,
  ChevronDown,
  Star,
  Users,
  Coins,
  PhoneCall,
  Calendar,
} from 'lucide-react';
import IMAGES from '../constants/images';
import LoanCalculator from '../components/loan/LoanCalculator';
import KawungPattern from '../components/common/KawungPattern';
import usePageMetadata from '../hooks/usePageMetadata';
import {
  HERO_STATS,
  VALUE_CARDS,
  ECOSYSTEM_CARDS,
  STEPS,
  BUSINESS_UNITS,
  TESTIMONIALS,
  NEWS_PREVIEW,
  FAQS,
} from '../data/homeData';

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  usePageMetadata('Beranda', 'Koperasi Desa Merah Putih - Gotong royong membangun ekonomi mandiri desa melalui simpan pinjam adil, toko desa, dan bagi hasil transparan.');

  const handleSmoothScroll = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getEcosystemIcon = (iconName) => {
    switch (iconName) {
      case 'Wallet':
        return <Wallet className="w-6 h-6 text-primary" />;
      case 'Store':
        return <Store className="w-6 h-6 text-primary" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-primary" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-primary" />;
      case 'QrCode':
        return <QrCode className="w-6 h-6 text-primary" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface py-space-lg lg:py-space-xl">
        <KawungPattern className="absolute -top-16 -right-16 w-96 h-96 opacity-[0.03] text-primary" />
        <KawungPattern className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.025] text-secondary" />

        <div className="max-w-7xl mx-auto px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left Column (7 cols): Hero Content */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              {/* Civic Tag */}
              <div className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant self-start font-label-md text-label-md border border-primary/10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-bold">Gerakan Kedaulatan Finansial Desa</span>
              </div>

              {/* Headline */}
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-extrabold tracking-tight leading-tight">
                Bersama Membangun <br />
                <span className="text-primary underline decoration-primary/20 decoration-wavy">
                  Ekonomi Desa
                </span>{' '}
                yang Mandiri
              </h1>

              {/* Subtitle */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Lembaga keuangan mikro berbasis gotong royong terpercaya. Mengentaskan jerat rentenir, menyalurkan sarana produksi tepat waktu, dan memajukan kesejahteraan warga desa melalui permodalan transparan berkeadilan.
              </p>

              {/* Social Proof Avatars */}
              <div className="flex items-center gap-space-sm pt-space-xs">
                <div className="flex -space-x-3 overflow-hidden">
                  <img
                    alt="Anggota Koperasi"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-surface object-cover"
                    src={IMAGES.AVATAR_ANGGOTA_1}
                  />
                  <img
                    alt="Anggota Koperasi"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-surface object-cover"
                    src={IMAGES.AVATAR_ANGGOTA_2}
                  />
                  <img
                    alt="Anggota Koperasi"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-surface object-cover"
                    src={IMAGES.AVATAR_ANGGOTA_3}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1">
                    <span className="font-label-md text-on-surface font-bold">1.420+ Warga Desa</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="font-label-sm text-on-surface-variant">Telah aktif bergabung & terverifikasi</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <Link
                  to="/daftar-anggota"
                  className="px-space-xl py-3.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-[0_4px_16px_rgba(200,16,46,0.3)] hover:bg-primary transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Daftar Jadi Anggota Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => handleSmoothScroll('simulasi')}
                  className="px-space-lg py-3.5 rounded-full bg-surface-container-lowest text-primary hover:bg-surface-container font-label-lg text-label-lg font-bold transition-all border border-primary/20 shadow-sm active:scale-95"
                >
                  Simulasi Pinjaman
                </button>
              </div>

              {/* 3 Pillars / Value Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-md">
                {VALUE_CARDS.map((v) => (
                  <div
                    key={v.title}
                    className="p-space-sm bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl border border-outline-variant/30 flex flex-col gap-1 shadow-sm"
                  >
                    <span className="font-label-sm text-secondary font-bold uppercase tracking-wider text-[11px]">
                      {v.badge}
                    </span>
                    <span className="font-label-md text-on-surface font-bold leading-snug">
                      {v.title}
                    </span>
                    <p className="font-body-sm text-on-surface-variant text-[12px] leading-tight mt-0.5">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (5 cols): Hero Visual */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="relative group">
                <div className="overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(31,41,55,0.12)] border-4 border-surface-container-lowest">
                  <img
                    alt="Dokumentasi Warga Koperasi Desa Merah Putih"
                    className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                    src={IMAGES.HERO_VILLAGE}
                  />
                </div>

                {/* Floating Badge Kemenkop */}
                <div className="absolute -bottom-6 -left-4 sm:left-4 bg-surface-container-lowest p-space-sm rounded-2xl shadow-xl border border-outline-variant/30 flex items-center gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col text-left pr-2">
                    <span className="font-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                      Badan Hukum Resmi
                    </span>
                    <span className="font-label-md text-on-surface font-extrabold">
                      Kemenkop & UKM RI
                    </span>
                    <span className="text-[11px] text-primary font-mono font-medium">
                      AHU-0012984.AH.01
                    </span>
                  </div>
                </div>

                {/* Floating Badge SHU */}
                <div className="absolute -top-4 -right-4 bg-surface-container-lowest px-4 py-2 rounded-2xl shadow-lg border border-outline-variant/30 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary animate-ping" />
                  <span className="font-label-md text-secondary font-bold">
                    SHU RAT 2024: +22%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATISTIK PENCAPAIAN DESA */}
      <section className="w-full bg-surface-container-lowest py-space-lg border-y border-outline-variant/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-space-lg">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-space-sm rounded-xl hover:bg-surface-container-low transition-colors"
              >
                <span className="font-display-lg text-headline-lg lg:text-display-lg font-black text-primary tracking-tight font-mono">
                  {stat.prefix || ''}
                  {stat.value}
                  {stat.suffix || ''}
                </span>
                <span className="font-label-md text-label-md text-on-surface font-bold mt-1">
                  {stat.label}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EKOSISTEM LAYANAN (id="layanan") */}
      <section id="layanan" className="w-full bg-surface py-space-xl scroll-mt-20">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-space-xs">
            <span className="font-label-md text-label-md text-primary font-bold tracking-wider uppercase bg-primary-fixed/40 px-3 py-1 rounded-full border border-primary/10">
              Layanan Terpadu
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Ekosistem Keuangan & Usaha untuk Semua Warga
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Dari pembiayaan pupuk musim tanam hingga belanja kebutuhan pokok sehari-hari, seluruh rantai nilai terhubung dalam semangat kekeluargaan.
            </p>
          </div>

          {/* Grid of Ecosystem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md lg:gap-space-lg">
            {ECOSYSTEM_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-space-md border border-outline-variant/30 group hover:-translate-y-1"
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    {getEcosystemIcon(card.icon)}
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div>
                  {card.link.startsWith('#') ? (
                    <button
                      type="button"
                      onClick={() => handleSmoothScroll(card.link.replace('#', ''))}
                      className="inline-flex items-center gap-1 font-label-md text-primary font-bold hover:underline"
                    >
                      <span>Pelajari Selengkapnya</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={card.link}
                      className="inline-flex items-center gap-1 font-label-md text-primary font-bold hover:underline"
                    >
                      <span>Buka Layanan</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: KALKULATOR SIMULASI (id="simulasi") */}
      <section id="simulasi" className="w-full bg-surface-container-low py-space-xl scroll-mt-20">
        <div className="max-w-7xl mx-auto px-margin">
          <LoanCalculator />
        </div>
      </section>

      {/* SECTION 5: 4 LANGKAH MUDAH BERGABUNG */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs">
            <span className="font-label-md text-label-md text-secondary font-bold tracking-wider uppercase bg-secondary-fixed/40 px-3 py-1 rounded-full">
              Mudah & Cepat
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Langkah Mudah Bergabung Bersama Koperasi Merah Putih
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Proses pendaftaran terbuka untuk seluruh warga desa dengan persyaratan sederhana tanpa kerumitan birokrasi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="bg-surface-container-lowest p-space-lg rounded-2xl border border-outline-variant/30 flex flex-col gap-space-sm relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-display-lg text-display-lg-mobile font-black text-primary/15 absolute -right-2 -top-2 select-none">
                  {s.step}
                </span>
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center font-mono">
                  {s.step}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                  {s.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-space-xs">
            <Link
              to="/daftar-anggota"
              className="px-space-xl py-3.5 rounded-full bg-primary-container text-on-primary font-label-lg font-bold shadow-md hover:bg-primary transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Mulai Pendaftaran Online Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: UNIT USAHA DESA (id="unit-usaha") */}
      <section id="unit-usaha" className="w-full bg-surface-container-low py-space-xl scroll-mt-20">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-md text-label-md text-primary font-bold tracking-wider uppercase">
                Ekonomi Riil
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                Unit Usaha Nyata yang Menghidupkan Desa
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Modal yang Anda simpan di koperasi diputar langsung ke unit-unit produktif yang membuka lapangan kerja dan menahan perputaran uang di desa kita sendiri.
              </p>
            </div>
            <Link
              to="/tentang-kami"
              className="inline-flex items-center gap-1 font-label-lg text-primary hover:text-primary-container font-semibold transition-colors shrink-0"
            >
              <span>Lihat Struktur Usaha</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {BUSINESS_UNITS.map((u) => (
              <div
                key={u.title}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group border border-outline-variant/30"
              >
                <div className="h-44 w-full overflow-hidden relative">
                  <img
                    alt={u.title}
                    src={u.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-label-sm text-[11px] font-semibold">
                    {u.category}
                  </span>
                </div>
                <div className="p-space-md flex flex-col gap-space-xs flex-1 justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      {u.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      {u.desc}
                    </p>
                  </div>
                  <div className="pt-space-sm border-t border-outline-variant/20 flex items-center justify-between text-primary font-label-sm font-bold">
                    <span>Beroperasi Aktif</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONI WARGA */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs">
            <span className="font-label-md text-label-md text-primary font-bold tracking-wider uppercase bg-primary-fixed/30 px-3 py-1 rounded-full">
              Suara Anggota
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Cerita Nyata Kemandirian Warga Desa
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ketika warga saling menopang, ekonomi kerakyatan berkembang secara adil dan menyejahterakan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-space-md border border-outline-variant/30"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic pt-space-xs leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-sm border-t border-outline-variant/20">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-surface-container ring-2 ring-primary/10">
                    <img alt={t.name} className="w-full h-full object-cover" src={t.image} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {t.name}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: BERITA & KEGIATAN TERKINI */}
      <section id="berita-preview" className="w-full bg-surface-container-low py-space-xl scroll-mt-20">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-xl">
              <span className="font-label-md text-label-md text-primary font-bold tracking-wider uppercase">
                Kabar Desa
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                Berita & Kegiatan Terkini Koperasi
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Pembaruan berkala seputar pembagian hasil usaha, penyaluran sarana produksi, dan pelatihan wirausaha warga.
              </p>
            </div>
            <Link
              to="/berita"
              className="inline-flex items-center gap-1 font-label-lg text-primary hover:text-primary-container font-semibold transition-colors shrink-0"
            >
              <span>Arsip semua berita</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {NEWS_PREVIEW.map((item) => (
              <article
                key={item.id}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group border border-outline-variant/30"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={item.title}
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[11px] font-bold shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-space-md flex flex-col gap-space-xs flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-on-surface-variant font-label-sm mb-1 text-[12px]">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                  <div className="pt-space-sm border-t border-outline-variant/20">
                    <Link
                      to="/berita"
                      className="inline-flex items-center gap-1 font-label-md text-primary font-bold hover:underline"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ ACCORDION (id="faq") */}
      <section id="faq" className="w-full bg-surface py-space-xl scroll-mt-20">
        <div className="max-w-4xl mx-auto px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center gap-space-xs">
            <span className="font-label-md text-label-md text-secondary font-bold tracking-wider uppercase bg-secondary-fixed/40 px-3 py-1 rounded-full">
              Pertanyaan Umum
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Hal yang Sering Ditanyakan Warga
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Punya pertanyaan sebelum bergabung? Temukan kejelasan informasi mengenai hak dan operasional koperasi di bawah ini.
            </p>
          </div>

          <div className="flex flex-col gap-space-sm">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 transition-all"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 font-headline-sm text-headline-sm text-on-surface font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-space-sm font-body-md text-body-md text-on-surface-variant border-t border-outline-variant/20 mt-space-sm leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: CALL TO ACTION BANNER */}
      <section className="w-full bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary py-space-xl relative overflow-hidden">
        <KawungPattern className="absolute -right-10 -bottom-10 w-80 h-80 opacity-10 text-white" />
        <div className="max-w-7xl mx-auto px-margin relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-lg text-center md:text-left">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container font-bold">
              Kedaulatan Finansial Bersama
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-primary font-black tracking-tight">
              Yuk, Gabung Jadi Bagian dari Koperasi Merah Putih!
            </h2>
            <p className="font-body-md text-body-md text-on-primary/90 leading-relaxed">
              Daftarkan diri Anda hari ini secara online atau datang langsung ke kantor unit desa. Dapatkan hak suara, akses pinjaman modal usaha murah, dan dividen SHU tahunan.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-space-sm shrink-0">
            <Link
              to="/daftar-anggota"
              className="px-space-xl py-3.5 rounded-full bg-surface-container-lowest text-primary hover:bg-surface-container font-label-lg font-bold shadow-lg transition-all active:scale-95"
            >
              Daftar Anggota Sekarang
            </Link>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin%20Koperasi,%20saya%20ingin%20tanya%20info%20keanggotaan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-space-lg py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-on-primary font-label-lg font-semibold transition-all border border-white/25 backdrop-blur-sm flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Tanya Lewat WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

