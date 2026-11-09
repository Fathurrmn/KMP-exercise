// Centralized Site Configuration & Demo Data
// Semua data contoh (nomor kontak, legalitas, pengurus, statistik) terpusat di sini
// agar mudah diganti saat beralih ke data riil.

export const SITE_CONFIG = {
  name: 'Koperasi Desa Merah Putih',
  shortName: 'Koperasi Merah Putih',
  tagline: 'Gotong Royong Membangun Desa Mandiri',
  villageUnit: 'Desa Mandiri Sukamaju, Kec. Cibodas',
  address: 'Gedung Balai Koperasi Mandiri Jl. Raya Desa Merah Putih No. 45',
  legalAddress: 'Kantor Balai Desa Cibodas Kav. 4, Jawa Barat',

  contact: {
    hotlineDisplay: '0812-3456-7890',
    hotlineWaLink: 'https://wa.me/6281234567890',
    helpdeskDisplay: '0812-8900-3321',
    helpdeskWaLink: 'https://wa.me/6281289003321',
    email: 'layanan@koperasimerahputih.id',
    serviceHours: 'Senin - Sabtu: 08.00 - 16.00 WIB',
  },

  legal: {
    skKemenkumham: 'AHU-0019482.AH.01.26.TAHUN 2021',
    izinUsahaSimpanPinjam: 'No. 42/KOP/2023',
    nib: '1289000341209 (Berbasis Risiko OSS)',
    supervision: 'Kementerian Koperasi dan UKM & Kemendesa PDTT RI',
    encryption: 'Terenkripsi 256-Bit SSL',
    copyright: '© 2025 Koperasi Jasa Merah Putih Sukamaju. Hak Cipta Dilindungi.',
  },

  demoNotice: 'Situs demonstrasi. Seluruh data transaksi, nama anggota, dan nomor legalitas adalah contoh simulasi.',

  stats: {
    totalAnggota: 1420,
    totalAset: 12850000000, // Rp 12,85 Miliar
    shuTahunLalu: 2850000000, // Rp 2,85 Miliar
    kuorumRat: '94,8%',
    bungaPinjamanFlat: '0.8%',
  },

  facilitator: {
    name: 'Kang Asep Saepudin',
    role: 'Fasilitator Lapangan Cibodas',
    status: 'Siap Bertugas Hari Ini',
    phone: '0812-8900-3321',
    waLink: 'https://wa.me/6281289003321?text=Halo%20Kang%20Asep,%20saya%20anggota%20koperasi%20ingin%20konsultasi',
  },
};

export default SITE_CONFIG;

