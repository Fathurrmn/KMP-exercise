import React, { useState } from 'react';
import { useOutletContext, useNavigate, Link } from 'react-router-dom';
import {
  Wallet,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  PlusCircle,
  ArrowDownLeft,
  QrCode,
  Store,
  FileDown,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Clock,
  ChevronRight,
  Filter,
  Search,
  Receipt,
  Download,
  ShoppingBag,
  HelpCircle,
  Zap,
  Gift,
  Users,
} from 'lucide-react';
import KawungPattern from '../components/common/KawungPattern';
import ShuMonthlyChart from '../components/dashboard/ShuMonthlyChart';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import usePageMetadata from '../hooks/usePageMetadata';
import { formatRupiah } from '../utils/formatters';
import { SITE_CONFIG } from '../constants/siteConfig';
import {
  MEMBER_PROFILE,
  MEMBER_BALANCES,
  MEMBER_LOAN,
  MEMBER_SHU,
  SIJANGKA_PORTFOLIO,
  MEMBER_TRANSACTIONS,
} from '../data/memberData';

export default function DashboardPage() {
  const context = useOutletContext();
  const onActionClick = context?.onActionClick || ((msg) => alert(msg));
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  usePageMetadata(
    'Portal Anggota: Siti Aminah',
    'Dashboard interaktif anggota Koperasi Desa Merah Putih: saldo simpanan, angsuran pinjaman, grafik SHU, dan mutasi rekening.'
  );

  // Filter transactions by tab & search keyword
  const filteredTransactions = MEMBER_TRANSACTIONS.filter((trx) => {
    const matchesTab =
      activeTab === 'Semua' ||
      (activeTab === 'Simpanan' && trx.category === 'Simpanan') ||
      (activeTab === 'Angsuran Pinjaman' && trx.category === 'Pinjaman') ||
      (activeTab === 'Belanja Toko' && trx.category === 'Toko') ||
      (activeTab === 'Bagi Hasil SHU' && trx.category === 'SHU');

    const matchesSearch =
      searchQuery === '' ||
      trx.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trx.channel.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const handleAjukanModal = () => {
    navigate('/#simulasi');
  };

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* MODE DEMO BANNER */}
      <div className="w-full bg-secondary-fixed/40 border-b border-secondary/20 py-2 px-margin text-center text-xs font-medium text-on-secondary-fixed flex items-center justify-center gap-2">
        <AlertCircle className="w-4 h-4 text-secondary shrink-0" />
        <span>
          <strong>Mode Demo Interaktif:</strong> Seluruh data di bawah ini adalah data simulasi akun resmi Ibu Siti Aminah ({MEMBER_PROFILE.id}).
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full px-margin py-space-md lg:py-space-lg flex flex-col gap-space-lg">
        {/* ================= SECTION 1: WELCOME & ANNOUNCEMENT ================= */}
        <section className="flex flex-col gap-space-md">
          {/* Welcome Card with Kawung Heritage Background */}
          <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-md lg:p-space-lg shadow-sm border border-outline-variant/30">
            <KawungPattern className="absolute -right-12 -bottom-12 w-64 h-64 opacity-5 text-primary" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md relative z-10">
              <div className="flex flex-col gap-space-xs">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
                    Selamat Datang kembali, Ibu {MEMBER_PROFILE.name}!
                  </h1>
                  <span className="text-2xl">👋</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-space-sm gap-y-space-xs text-on-surface-variant font-body-sm text-xs sm:text-body-sm">
                  <span className="flex items-center gap-1 font-semibold text-primary">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    Anggota Aktif sejak {MEMBER_PROFILE.joinedYear}
                  </span>
                  <span>•</span>
                  <span>
                    No. ID: <strong className="text-on-surface font-mono">{MEMBER_PROFILE.id}</strong>
                  </span>
                  <span>•</span>
                  <span>{MEMBER_PROFILE.unit}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-space-sm">
                <div className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                  <span className="font-label-md text-xs font-bold">
                    {MEMBER_PROFILE.verificationTier}
                  </span>
                </div>
                <div className="px-space-sm py-1.5 rounded-full bg-surface-container font-label-sm text-xs text-on-surface-variant flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Login: {MEMBER_PROFILE.lastLogin}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Announcement Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary p-space-md shadow-md relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
            <div className="flex items-start md:items-center gap-space-md relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-sm text-[11px] uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded font-bold">
                    Warta Resmi Koperasi
                  </span>
                  <span className="font-label-sm text-[11px] opacity-80 hidden sm:inline">
                    Surat Keputusan Pengurus No. 08/RAT/2025
                  </span>
                </div>
                <p className="font-body-md text-xs sm:text-body-md text-on-primary font-medium max-w-3xl leading-snug">
                  Pembagian dividen SHU Tahunan Periode 2024 akan ditransfer serentak ke saldo simpanan sukarela pada <strong>28 Februari 2025</strong>. Pastikan verifikasi rekening desa Anda telah selesai.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-space-sm shrink-0 self-end md:self-center relative z-10">
              <button
                type="button"
                onClick={() => onActionClick('Surat Edaran Pembagian Dividen SHU 2024')}
                className="px-space-md py-2 sm:py-2.5 rounded-xl bg-surface-container-lowest text-primary hover:bg-surface-container-low transition-all font-label-lg font-bold shadow-sm flex items-center gap-1 active:scale-95 text-xs sm:text-sm"
              >
                <span>Lihat Edaran</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: 3 BENTO SUMMARY CARDS ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md lg:gap-space-lg">
          {/* Card 1: Total Simpanan (Crimson Gradient) */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-container to-on-primary-fixed-variant text-on-primary p-space-md lg:p-space-lg shadow-lg flex flex-col justify-between min-h-[260px]">
            <div className="flex items-start justify-between gap-space-xs relative z-10">
              <div className="flex flex-col">
                <span className="font-label-sm text-xs uppercase tracking-wider text-on-primary-container font-semibold">
                  Total Saldo Simpanan
                </span>
                <span className="font-headline-lg sm:font-display-lg text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-1 font-mono">
                  {formatRupiah(MEMBER_BALANCES.totalSavings)}
                </span>
              </div>
              <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0">
                <Wallet className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="mt-space-md pt-space-xs relative z-10 flex flex-col gap-space-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-white/20 text-white font-label-sm text-xs font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" /> +{MEMBER_BALANCES.monthlyGrowthPercent}%
                </span>
                <span className="font-body-sm text-xs text-on-primary-container">
                  +{formatRupiah(MEMBER_BALANCES.monthlyGrowthAmount)} bulan ini
                </span>
              </div>

              {/* Breakdown 3 Sub-Cards */}
              <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-black/15 backdrop-blur-sm">
                <div className="flex flex-col">
                  <span className="font-label-sm text-on-primary-container text-[10px]">Pokok</span>
                  <span className="font-label-md text-xs font-bold mt-0.5 font-mono">
                    {formatRupiah(MEMBER_BALANCES.breakdown.pokok)}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-on-primary-container text-[10px]">Wajib</span>
                  <span className="font-label-md text-xs font-bold mt-0.5 font-mono">
                    {formatRupiah(MEMBER_BALANCES.breakdown.wajib)}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-on-primary-container text-[10px]">Sukarela (Cair)</span>
                  <span className="font-label-md text-xs font-bold mt-0.5 font-mono">
                    {formatRupiah(MEMBER_BALANCES.breakdown.sukarela)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-space-md pt-space-xs flex items-center gap-2 relative z-10">
              <button
                type="button"
                onClick={() => onActionClick('Setor Simpanan')}
                className="flex-1 py-2.5 px-3 rounded-xl bg-surface-container-lowest text-primary hover:bg-surface-container-low font-label-md font-bold flex items-center justify-center gap-1 shadow-sm transition-all active:scale-95 text-xs"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Setor Simpanan</span>
              </button>
              <button
                type="button"
                onClick={() => onActionClick('Tarik Saldo Sukarela')}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-on-primary font-label-md font-semibold flex items-center justify-center gap-1 transition-all active:scale-95 backdrop-blur-sm text-xs"
              >
                <ArrowDownLeft className="w-4 h-4" />
                <span>Tarik Saldo</span>
              </button>
            </div>
          </div>

          {/* Card 2: Status Pinjaman Aktif */}
          <div className="rounded-2xl bg-surface-container-lowest p-space-md lg:p-space-lg shadow-sm border border-outline-variant/30 flex flex-col justify-between min-h-[260px]">
            <div className="flex items-start justify-between gap-space-xs">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                    {MEMBER_LOAN.title}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] font-bold">
                    {MEMBER_LOAN.kolStatus}
                  </span>
                </div>
                <div className="flex items-baseline gap-space-xs mt-1">
                  <span className="font-headline-lg text-2xl sm:text-3xl font-black text-on-surface font-mono">
                    {formatRupiah(MEMBER_LOAN.remainingAmount)}
                  </span>
                  <span className="font-body-sm text-xs text-on-surface-variant font-mono">
                    / {formatRupiah(MEMBER_LOAN.totalLoanAmount)}
                  </span>
                </div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                <CreditCard className="w-6 h-6" />
              </div>
            </div>

            <div className="mt-space-md flex flex-col gap-space-xs">
              <div className="flex justify-between items-center text-on-surface-variant font-body-sm text-xs">
                <span>Progres Pelunasan</span>
                <span className="font-bold text-on-surface">
                  {MEMBER_LOAN.paidTenor} dari {MEMBER_LOAN.totalTenor} Angsuran ({MEMBER_LOAN.progressPercent}%)
                </span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-3 rounded-full bg-surface-container overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${MEMBER_LOAN.progressPercent}%` }}
                />
              </div>

              <div className="flex justify-between items-center pt-2 text-xs text-on-surface-variant">
                <span>Jatuh Tempo: <strong>{MEMBER_LOAN.nextDueDate}</strong></span>
                <span className="font-mono font-bold text-primary">
                  {formatRupiah(MEMBER_LOAN.monthlyInstallment)} / bln
                </span>
              </div>
            </div>

            <div className="mt-space-md pt-space-xs">
              <button
                type="button"
                onClick={() => onActionClick('Bayar Angsuran Pinjaman')}
                className="w-full py-2.5 rounded-xl bg-primary text-on-primary font-label-md font-bold shadow-sm hover:bg-primary-container transition-all active:scale-95 text-xs text-center"
              >
                Bayar Angsuran Sekarang
              </button>
            </div>
          </div>

          {/* Card 3: Estimasi SHU Berjalan */}
          <div className="rounded-2xl bg-surface-container-lowest p-space-md lg:p-space-lg shadow-sm border border-outline-variant/30 flex flex-col justify-between min-h-[260px] md:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between gap-space-xs">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold">
                    Akumulasi SHU 2025
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">
                    Tahun Berjalan
                  </span>
                </div>
                <div className="flex items-baseline gap-space-xs mt-1">
                  <span className="font-headline-lg text-2xl sm:text-3xl font-black text-secondary font-mono">
                    {formatRupiah(MEMBER_SHU.estimatedAmount)}
                  </span>
                  <span className="font-label-sm text-xs text-on-surface-variant">(s.d Feb)</span>
                </div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

            <div className="mt-space-md grid grid-cols-2 gap-space-sm p-space-sm rounded-lg bg-surface-container-low text-xs border border-outline-variant/20">
              <div className="flex flex-col">
                <span className="font-label-sm text-[11px] text-on-surface-variant flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary" /> Jasa Modal
                </span>
                <span className="font-label-md font-bold text-on-surface mt-0.5 font-mono">
                  {formatRupiah(MEMBER_SHU.jasaModal)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-[11px] text-on-surface-variant flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-secondary" /> Jasa Belanja
                </span>
                <span className="font-label-md font-bold text-on-surface mt-0.5 font-mono">
                  {formatRupiah(MEMBER_SHU.jasaUsaha)}
                </span>
              </div>
            </div>

            <div className="mt-space-md flex flex-col gap-1">
              <div className="flex items-center justify-between text-on-surface font-body-sm text-xs">
                <span className="font-medium">Proyeksi Dividen Akhir Tahun:</span>
                <span className="font-bold text-primary font-headline-sm text-sm font-mono">
                  {formatRupiah(2850000)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => onActionClick('Rincian Perhitungan Proyeksi SHU')}
                className="w-full mt-1 py-2 rounded-xl bg-surface-container text-on-surface font-label-md font-semibold hover:bg-surface-container-high transition-colors text-xs text-center"
              >
                Lihat Rincian Dividen
              </button>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: 6 AKSI CEPAT ANGGOTA ================= */}
        <section className="flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-5 bg-primary rounded-full" />
              <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Aksi Cepat Anggota
              </h2>
            </div>
            <span className="font-label-sm text-xs text-on-surface-variant hidden sm:inline">
              Layanan Mandiri 24 Jam
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm lg:gap-space-md">
            {/* 1. Setor Simpanan */}
            <button
              type="button"
              onClick={() => onActionClick('Setor Simpanan via QRIS / VA')}
              className="group flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-primary hover:text-on-primary shadow-sm hover:shadow-md transition-all text-center gap-space-xs active:scale-95 border border-outline-variant/30"
            >
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-colors">
                <Wallet className="w-6 h-6" />
              </div>
              <span className="font-label-md text-xs font-bold mt-1 text-on-surface group-hover:text-on-primary">
                Setor Simpanan
              </span>
              <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-on-primary/80 line-clamp-1">
                QRIS / VA / Agen
              </span>
            </button>

            {/* 2. Ajukan Modal */}
            <button
              type="button"
              onClick={handleAjukanModal}
              className="group flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-primary hover:text-on-primary shadow-sm hover:shadow-md transition-all text-center gap-space-xs active:scale-95 border border-outline-variant/30"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary group-hover:bg-white group-hover:text-primary transition-colors">
                <CreditCard className="w-6 h-6" />
              </div>
              <span className="font-label-md text-xs font-bold mt-1 text-on-surface group-hover:text-on-primary">
                Ajukan Modal
              </span>
              <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-on-primary/80 line-clamp-1">
                Plafon s.d 25 Juta
              </span>
            </button>

            {/* 3. Tagihan & PPOB */}
            <button
              type="button"
              onClick={() => onActionClick('Layanan PPOB: Tagihan Listrik, BPJS, PDAM')}
              className="group flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-primary hover:text-on-primary shadow-sm hover:shadow-md transition-all text-center gap-space-xs active:scale-95 border border-outline-variant/30"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary group-hover:bg-white group-hover:text-primary transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <span className="font-label-md text-xs font-bold mt-1 text-on-surface group-hover:text-on-primary">
                Tagihan & PPOB
              </span>
              <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-on-primary/80 line-clamp-1">
                PLN, BPJS, PDAM
              </span>
            </button>

            {/* 4. Belanja Toko Desa */}
            <button
              type="button"
              onClick={() => onActionClick('Katalog Belanja Toko Desa Sukamaju')}
              className="group flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-primary hover:text-on-primary shadow-sm hover:shadow-md transition-all text-center gap-space-xs active:scale-95 border border-outline-variant/30"
            >
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-colors">
                <Store className="w-6 h-6" />
              </div>
              <span className="font-label-md text-xs font-bold mt-1 text-on-surface group-hover:text-on-primary">
                Belanja Toko Desa
              </span>
              <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-on-primary/80 line-clamp-1">
                Sembako & Pupuk
              </span>
            </button>

            {/* 5. Klaim Poin SHU */}
            <button
              type="button"
              onClick={() => onActionClick('Rincian Klaim Poin Belanja & Dividen SHU')}
              className="group flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-primary hover:text-on-primary shadow-sm hover:shadow-md transition-all text-center gap-space-xs active:scale-95 border border-outline-variant/30"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary group-hover:bg-white group-hover:text-primary transition-colors">
                <Gift className="w-6 h-6" />
              </div>
              <span className="font-label-md text-xs font-bold mt-1 text-on-surface group-hover:text-on-primary">
                Klaim Poin SHU
              </span>
              <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-on-primary/80 line-clamp-1">
                Rincian Bagi Hasil
              </span>
            </button>

            {/* 6. Konsultasi Usaha */}
            <button
              type="button"
              onClick={() => onActionClick(`Konsultasi Fasilitator Desa: ${SITE_CONFIG.facilitator.name}`)}
              className="group flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-primary hover:text-on-primary shadow-sm hover:shadow-md transition-all text-center gap-space-xs active:scale-95 border border-outline-variant/30"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary group-hover:bg-white group-hover:text-primary transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <span className="font-label-md text-xs font-bold mt-1 text-on-surface group-hover:text-on-primary">
                Konsultasi Usaha
              </span>
              <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-on-primary/80 line-clamp-1">
                Pendamping Lapangan
              </span>
            </button>
          </div>
        </section>

        {/* ================= SECTION 4: MAIN 2-COLUMN GRID (8 Col Left, 4 Col Right) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* ================= LEFT COLUMN (Col-span-8 / 66%) ================= */}
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            {/* Module A: SHU Monthly Comparison Chart (2024 vs 2025) */}
            <ShuMonthlyChart />

            {/* Module B: Transaction History Table */}
            <div className="rounded-xl bg-surface-container-lowest p-space-md lg:p-space-lg shadow-[0_4px_24px_rgba(31,41,55,0.04)] border border-outline-variant/30 flex flex-col gap-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-outline-variant/20 pb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Riwayat Transaksi Anggota
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-[11px] text-on-surface-variant font-semibold">
                    Februari 2025
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onActionClick('Unduh Rekening Koran Resmi PDF (Bulan Februari 2025)')}
                  className="font-label-md text-xs font-bold text-primary hover:underline flex items-center gap-1 self-start sm:self-center"
                >
                  <span>Unduh Rekening Koran</span>
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Filter Tabs & Search Controls */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
                  {['Semua', 'Simpanan', 'Angsuran Pinjaman', 'Belanja Toko', 'Bagi Hasil SHU'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveTab(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors ${
                        activeTab === cat
                          ? 'bg-primary text-on-primary'
                          : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative shrink-0 w-full md:w-56">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-on-surface-variant pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari transaksi..."
                    className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-surface-container-low font-body-sm text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/20 border border-transparent focus:border-primary/30"
                  />
                </div>
              </div>

              {/* Transaction Table */}
              {filteredTransactions.length > 0 ? (
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider">
                        <th className="py-2.5 px-3 rounded-l-lg">Tanggal & Waktu</th>
                        <th className="py-2.5 px-3">Keterangan Transaksi</th>
                        <th className="py-2.5 px-3 hidden md:table-cell">Kanal / Saluran</th>
                        <th className="py-2.5 px-3 text-right">Nominal</th>
                        <th className="py-2.5 px-3 text-center">Status</th>
                        <th className="py-2.5 px-3 text-center rounded-r-lg">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/15">
                      {filteredTransactions.map((trx) => (
                        <tr key={trx.id} className="hover:bg-surface-container-low/60 transition-colors group">
                          <td className="py-3 px-3 text-on-surface-variant whitespace-nowrap text-xs">
                            <span className="font-bold text-on-surface block">{trx.date}</span>
                            <span className="text-[11px] opacity-75">{trx.time || '10:00 WIB'}</span>
                          </td>
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-space-xs">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                                  trx.isIncome
                                    ? 'bg-emerald-50 text-emerald-700'
                                    : 'bg-red-50 text-primary'
                                }`}
                              >
                                {trx.isIncome ? (
                                  <ArrowDownLeft className="w-4 h-4" />
                                ) : (
                                  <ArrowUpRight className="w-4 h-4" />
                                )}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-label-md text-xs font-bold text-on-surface">
                                  {trx.title}
                                </span>
                                <span className="text-[11px] text-on-surface-variant">
                                  {trx.description || trx.channel}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-3 font-body-sm text-xs text-on-surface-variant whitespace-nowrap hidden md:table-cell">
                            {trx.channel}
                          </td>
                          <td className="py-3 px-3 text-right whitespace-nowrap font-mono">
                            <span
                              className={`font-label-lg text-xs font-bold ${
                                trx.isIncome ? 'text-emerald-700' : 'text-primary'
                              }`}
                            >
                              {trx.isIncome ? '+' : '-'} {formatRupiah(trx.amount)}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center whitespace-nowrap">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-[10px] font-semibold border border-emerald-200">
                              {trx.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center whitespace-nowrap">
                            <button
                              type="button"
                              onClick={() => setSelectedReceipt(trx)}
                              className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                              title="Lihat Bukti Transaksi"
                            >
                              <Receipt className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-2 text-on-surface-variant">
                  <Filter className="w-8 h-8 opacity-40" />
                  <span className="font-headline-sm text-sm font-bold text-on-surface">
                    Tidak ada transaksi yang cocok
                  </span>
                  <p className="font-body-sm text-xs max-w-sm">
                    Pencarian "{searchQuery}" atau kategori "{activeTab}" tidak menghasilkan mutasi.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('Semua');
                      setSearchQuery('');
                    }}
                    className="mt-2 px-4 py-1.5 rounded-full bg-surface-container font-label-sm text-xs font-bold text-primary hover:bg-surface-container-high"
                  >
                    Reset Filter
                  </button>
                </div>
              )}

              {/* Table Bottom Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs border-t border-outline-variant/15">
                <span className="font-body-sm text-xs text-on-surface-variant">
                  Menampilkan {filteredTransactions.length} transaksi terakhir
                </span>
                <button
                  type="button"
                  onClick={() => onActionClick('Seluruh Arsip Riwayat 124 Transaksi Anggota')}
                  className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-xs font-bold text-on-surface transition-colors flex items-center gap-1"
                >
                  <span>Lihat Semua Riwayat (124 Transaksi)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Module C: Portofolio Tabungan SiJangka (Kartu Terpisah) */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-md sm:p-space-lg shadow-sm border border-outline-variant/30 flex flex-col gap-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/20 pb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center font-bold font-mono">
                    S
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-xs text-primary font-bold uppercase tracking-wider">
                      Simpanan Berjangka Desa
                    </span>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      {SIJANGKA_PORTFOLIO.title}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-xs font-bold self-start sm:self-center">
                  {SIJANGKA_PORTFOLIO.status}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md">
                <div className="p-3 bg-surface rounded-xl border border-outline-variant/20 flex flex-col">
                  <span className="font-label-sm text-[11px] text-on-surface-variant">Nominal Deposito</span>
                  <span className="font-headline-sm font-bold text-on-surface font-mono mt-0.5 text-sm sm:text-base">
                    {formatRupiah(SIJANGKA_PORTFOLIO.nominal)}
                  </span>
                </div>
                <div className="p-3 bg-surface rounded-xl border border-outline-variant/20 flex flex-col">
                  <span className="font-label-sm text-[11px] text-on-surface-variant">Bagi Hasil Nisbah</span>
                  <span className="font-headline-sm font-bold text-secondary font-mono mt-0.5 text-sm sm:text-base">
                    {SIJANGKA_PORTFOLIO.rate}
                  </span>
                </div>
                <div className="p-3 bg-surface rounded-xl border border-outline-variant/20 flex flex-col">
                  <span className="font-label-sm text-[11px] text-on-surface-variant">Jatuh Tempo</span>
                  <span className="font-headline-sm font-bold text-on-surface text-xs sm:text-sm mt-0.5">
                    {SIJANGKA_PORTFOLIO.maturityDate}
                  </span>
                </div>
                <div className="p-3 bg-surface rounded-xl border border-outline-variant/20 flex flex-col">
                  <span className="font-label-sm text-[11px] text-on-surface-variant">Estimasi Bagi Hasil</span>
                  <span className="font-headline-sm font-bold text-emerald-700 font-mono mt-0.5 text-sm sm:text-base">
                    +{formatRupiah(SIJANGKA_PORTFOLIO.projectedProfit)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (Col-span-4 / 34% - Sidebar Widgets) ================= */}
          <div className="lg:col-span-4 w-full">
            <DashboardSidebar onActionClick={onActionClick} />
          </div>
        </div>
      </div>

      {/* RECEIPT PREVIEW MODAL */}
      {selectedReceipt && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setSelectedReceipt(null)}
          onKeyDown={(e) => e.key === 'Escape' && setSelectedReceipt(null)}
        >
          <div
            className="w-full max-w-md bg-surface-container-lowest rounded-2xl p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
              <div className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-primary" />
                <h4 className="font-headline-sm text-base font-bold text-on-surface">
                  Bukti Transaksi Digital
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedReceipt(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-sans">No. Transaksi</span>
                <span className="font-bold text-on-surface">{selectedReceipt.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-sans">Tanggal</span>
                <span>{selectedReceipt.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-sans">Kategori</span>
                <span>{selectedReceipt.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-sans">Saluran</span>
                <span>{selectedReceipt.channel}</span>
              </div>
              <div className="border-t border-outline-variant/20 pt-2 flex justify-between text-sm font-sans font-bold">
                <span>Total Nominal</span>
                <span className={selectedReceipt.isIncome ? 'text-emerald-700' : 'text-primary'}>
                  {selectedReceipt.isIncome ? '+' : '-'} {formatRupiah(selectedReceipt.amount)}
                </span>
              </div>
              <div className="flex justify-between text-[11px] text-emerald-800">
                <span className="font-sans">Status</span>
                <span className="font-bold font-sans">TERVERIFIKASI BERHASIL</span>
              </div>
            </div>

            <p className="text-xs text-on-surface-variant text-center">
              Dokumen elektronik sah diterbitkan oleh sistem pembukuan Koperasi Desa Merah Putih.
            </p>

            <button
              type="button"
              onClick={() => {
                alert('Mengunduh bukti transaksi format PDF...');
                setSelectedReceipt(null);
              }}
              className="w-full py-2.5 rounded-xl bg-primary text-on-primary font-label-md font-bold text-xs flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Struk PDF</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
