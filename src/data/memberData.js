import IMAGES from '../constants/images';

export const MEMBER_PROFILE = {
  name: 'Siti Aminah',
  id: 'KDMP-2025-08942',
  status: 'Aktif',
  verificationTier: 'Terverifikasi Prima',
  unit: 'Unit Cibodas',
  joinedYear: 2023,
  avatar: IMAGES.AVATAR_LARGE,
  lastLogin: '24 Feb 2025, 08:42 WIB',
};

export const MEMBER_BALANCES = {
  totalSavings: 18450000,
  monthlyGrowthPercent: 2.5,
  monthlyGrowthAmount: 450000,
  breakdown: {
    pokok: 500000,
    wajib: 2400000,
    sukarela: 15550000,
  },
};

export const MEMBER_LOAN = {
  title: 'Pinjaman Usaha Warung',
  kolStatus: 'Lancar (Kol 1)',
  remainingAmount: 6250000,
  totalLoanAmount: 10000000,
  paidTenor: 8,
  totalTenor: 12,
  progressPercent: 62.5,
  nextDueDate: '10 Maret 2025',
  monthlyInstallment: 913333,
};

export const MEMBER_SHU = {
  year: 2025,
  estimatedAmount: 1840000,
  growthPercent: 18,
  jasaModal: 1104000,
  jasaUsaha: 736000,
};

export const SIJANGKA_PORTFOLIO = {
  title: 'SiJangka Merah Putih (Deposito Syariah Desa)',
  nominal: 10000000,
  rate: '6.5% p.a.',
  tenorMonths: 12,
  startDate: '15 Agu 2024',
  maturityDate: '15 Agu 2025',
  projectedProfit: 650000,
  status: 'Berjalan Aktif',
};

export const SHU_YEARLY_HISTORY = [
  { year: '2021', amount: 850000, note: 'Tahun pertama' },
  { year: '2022', amount: 1120000, note: '+31.7%' },
  { year: '2023', amount: 1450000, note: '+29.4%' },
  { year: '2024', amount: 1680000, note: '+15.8%' },
  { year: '2025 (Est)', amount: 1840000, note: '+9.5% proyeksi' },
];

export const MEMBER_TRANSACTIONS = [
  {
    id: 'TRX-2025-091',
    date: '22 Feb 2025, 14:15 WIB',
    title: 'Setor Simpanan Sukarela',
    category: 'Simpanan',
    channel: 'Transfer Virtual Account BRI',
    amount: 500000,
    isIncome: true,
    status: 'Berhasil',
  },
  {
    id: 'TRX-2025-084',
    date: '10 Feb 2025, 09:30 WIB',
    title: 'Pembayaran Angsuran ke-8 (Warung)',
    category: 'Pinjaman',
    channel: 'Auto-Debit Simpanan Sukarela',
    amount: 913333,
    isIncome: false,
    status: 'Berhasil',
  },
  {
    id: 'TRX-2025-078',
    date: '04 Feb 2025, 16:45 WIB',
    title: 'Belanja Sembako Grosir Toko Desa',
    category: 'Toko',
    channel: 'QRIS Koperasi Desa',
    amount: 345000,
    isIncome: false,
    status: 'Berhasil',
  },
  {
    id: 'TRX-2025-062',
    date: '28 Jan 2025, 11:20 WIB',
    title: 'Pencairan Dividen SHU Tambahan',
    category: 'SHU',
    channel: 'Kredit Saldo Sukarela',
    amount: 420000,
    isIncome: true,
    status: 'Berhasil',
  },
  {
    id: 'TRX-2025-055',
    date: '15 Jan 2025, 10:10 WIB',
    title: 'Iuran Simpanan Wajib Januari 2025',
    category: 'Simpanan',
    channel: 'Setoran Tunai Balai Desa',
    amount: 25000,
    isIncome: true,
    status: 'Berhasil',
  },
  {
    id: 'TRX-2025-049',
    date: '10 Jan 2025, 09:20 WIB',
    title: 'Pembayaran Angsuran ke-7 (Warung)',
    category: 'Pinjaman',
    channel: 'Auto-Debit Simpanan',
    amount: 913333,
    isIncome: false,
    status: 'Berhasil',
  },
  {
    id: 'TRX-2025-032',
    date: '02 Jan 2025, 13:50 WIB',
    title: 'Pembelian Pupuk Organik 2 Sak',
    category: 'Toko',
    channel: 'Tunai di Toko Desa',
    amount: 150000,
    isIncome: false,
    status: 'Berhasil',
  },
  {
    id: 'TRX-2025-018',
    date: '28 Des 2024, 08:15 WIB',
    title: 'Bagi Hasil Simpanan Berjangka',
    category: 'SHU',
    channel: 'Bagi Hasil SiJangka',
    amount: 54166,
    isIncome: true,
    status: 'Berhasil',
  },
];

