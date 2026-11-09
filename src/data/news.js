import IMAGES from '../constants/images';

export const NEWS_CATEGORIES = [
  'Semua',
  'Pengumuman',
  'Laporan RAT',
  'Kabar Usaha',
  'Pelatihan UMKM',
  'Pertanian',
];

export const FEATURED_NEWS = {
  id: 'rat-2024',
  title: 'Laporan RAT Tahun Buku 2024: Pembagian SHU Tumbuh 22% dan Realisasi Ekosistem Dingin Pasca-Panen',
  summary: 'Rapat Anggota Tahunan Koperasi Desa Merah Putih sukses diselenggarakan dengan pencapaian laba bersih meningkat signifikan. Koperasi secara resmi meresmikan operasional cold-storage kapasitas 20 ton guna menjaga kesegaran cabai dan sayuran petani.',
  content: 'Rapat Anggota Tahunan (RAT) Tahun Buku 2024 dihadiri oleh lebih dari 1.200 perwakilan anggota secara luring di Balai Desa Sukamaju dan daring. Dalam musyawarah tersebut, seluruh anggota secara mufakat menyetujui laporan pertanggungjawaban pengurus dan pembagian Sisa Hasil Usaha (SHU) senilai total Rp 412 juta yang mulai ditransfer ke rekening tabungan sukarela anggota.',
  category: 'Laporan RAT',
  date: '24 Feb 2025',
  author: 'Humas Koperasi Merah Putih',
  readTime: '4 menit baca',
  image: IMAGES.NEWS_RAT,
};

export const NEWS_ARTICLES = [
  {
    id: 'pelatihan-kemasan',
    title: 'Pelatihan Kemasan Produk & Sertifikasi Halal Gratis untuk 50 Pelaku Usaha Warung & Olahan Singkong',
    summary: 'Mendorong daya saing produk olahan desa menembus minimarket modern dan pasar oleh-oleh dengan standar higienis serta kemasan ramah lingkungan.',
    category: 'Pelatihan UMKM',
    date: '20 Feb 2025',
    author: 'Divisi Pemberdayaan UMKM',
    readTime: '3 menit baca',
    image: IMAGES.NEWS_TOKO,
  },
  {
    id: 'pupuk-organik',
    title: 'Penyaluran 10 Ton Pupuk Organik Bersubsidi & Bibit Padi Berkualitas Sambut Musim Tanam Rendeng',
    summary: 'Kelompok tani anggota koperasi menerima paket pupuk hayati cair dan pupuk kandang terfermentasi dengan skema talangan panen bayar setelah panen.',
    category: 'Pertanian',
    date: '17 Feb 2025',
    author: 'Unit Saprotan Tani Makmur',
    readTime: '3 menit baca',
    image: IMAGES.NEWS_PUPUK,
  },
  {
    id: 'qris-desa',
    title: 'Aktivasi Sistem Pembayaran QRIS Desa di 60 Kios Toko Sembako dan Loket Pembayaran Air PPOB',
    summary: 'Warga desa kini tidak perlu repot membawa uang kembalian. Seluruh warung binaan telah dilengkapi kode QRIS standar nasional yang terkoneksi ke rekening koperasi.',
    category: 'Kabar Usaha',
    date: '12 Feb 2025',
    author: 'Tim Digitalisasi Desa',
    readTime: '2 menit baca',
    image: IMAGES.NEWS_QRIS,
  },
  {
    id: 'panduan-modal',
    title: 'Bijak Mengelola Modal: Panduan Memilih Skema Pinjaman Musim Tani vs Modal Usaha Harian Warung',
    summary: 'Artikel edukasi keuangan anggota mengenai penyesuaian arus kas usaha dengan jatuh tempo cicilan agar terhindar dari keterlambatan angsuran.',
    category: 'Pengumuman',
    date: '08 Feb 2025',
    author: 'Konsultan Finansial Koperasi',
    readTime: '5 menit baca',
    image: IMAGES.NEWS_WOMEN,
  },
  {
    id: 'validasi-rekening',
    title: 'Kesiapan Validasi Rekening Bank Warga Jelang Transfer Simpanan Bagi Hasil SHU Periode 2024',
    summary: 'Pengumuman resmi kepada seluruh anggota utama untuk memeriksa kecocokan nomor rekening atau nomor ponsel dompet digital sebelum batas akhir 26 Februari.',
    category: 'Pengumuman',
    date: '03 Feb 2025',
    author: 'Sekretariat Koperasi',
    readTime: '2 menit baca',
    image: IMAGES.NEWS_PASSBOOK,
  },
  {
    id: 'pasar-induk',
    title: 'Kerjasama Distribusi Hasil Sayur Mayur Desa Cibodas Masuk Jaringan Pasar Induk Antar-Kota',
    summary: 'Armada logistik berpendingin Koperasi Merah Putih resmi menjalin kemitraan pasokan langsung komoditas tomat, kubis, dan cabai merah tanpa tengkulak.',
    category: 'Kabar Usaha',
    date: '28 Jan 2025',
    author: 'Manajer Logistik Tani',
    readTime: '4 menit baca',
    image: IMAGES.NEWS_TRUCK,
  },
];

export const UPCOMING_AGENDAS = [
  {
    date: '28 Feb 2025',
    time: '08:30 WIB',
    title: 'Rapat Anggota Tahunan (RAT) Paripurna',
    location: 'Gedung Pertemuan Balai Desa Cibodas',
    tag: 'Wajib Anggota',
  },
  {
    date: '05 Mar 2025',
    time: '09:00 WIB',
    title: 'Workshop Pembukuan Kas Digital UMKM',
    location: 'Ruang Pelatihan Koperasi Lt. 2',
    tag: 'Pelatihan',
  },
  {
    date: '12 Mar 2025',
    time: '07:00 WIB',
    title: 'Distribusi Pupuk Musim Tanam II Serentak',
    location: 'Gudang Penyaluran Saprotan Unit 1',
    tag: 'Pertanian',
  },
];

export const PUBLIC_DOCUMENTS = [
  {
    title: 'Laporan Keuangan Auditan Tahun Buku 2024',
    category: 'Laporan Keuangan',
    size: 'PDF • 4.2 MB',
    year: '2025',
  },
  {
    title: 'Formulir Permohonan Pembiayaan Alsintan',
    category: 'Formulir Pengajuan',
    size: 'PDF • 850 KB',
    year: '2025',
  },
  {
    title: 'Buku Pedoman Anggota & AD/ART Koperasi',
    category: 'Regulasi Resmi',
    size: 'PDF • 1.8 MB',
    year: '2024',
  },
];

