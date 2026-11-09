import IMAGES from '../constants/images';

export const HERO_STATS = [
  { value: 1420, suffix: '+', label: 'Anggota Aktif Desa', subtext: 'Terdaftar & terverifikasi' },
  { value: 4.8, prefix: 'Rp ', suffix: ' Miliar', label: 'Modal Bergulir', subtext: 'Tersalurkan ke sektor riil' },
  { value: 99.4, suffix: '%', label: 'Pengembalian Lancar', subtext: 'Kolektibilitas lancar (Kol 1)' },
  { value: 14, label: 'Unit Usaha Produktif', subtext: 'Menghidupkan ekonomi desa' },
];

export const VALUE_CARDS = [
  {
    title: 'Bagi Hasil Adil & Transparan',
    desc: 'Seluruh keuntungan usaha dibagikan kembali ke anggota dalam bentuk Sisa Hasil Usaha (SHU) setiap tahun.',
    badge: 'Keadilan Sosial',
  },
  {
    title: 'Bunga Ringan Pro-Petani',
    desc: 'Pembiayaan modal kerja dengan bunga flat mulai 0.6% tanpa agunan berbelit dan tanpa biaya administrasi tersembunyi.',
    badge: 'Gotong Royong',
  },
  {
    title: 'Digital Terintegrasi QRIS',
    desc: 'Kemudahan cek saldo tabungan, transfer sesama anggota, hingga belanja sembako menggunakan ponsel cerdas.',
    badge: 'Fintech Desa',
  },
];

export const ECOSYSTEM_CARDS = [
  {
    icon: 'Wallet',
    title: 'Simpan Pinjam Berkah',
    desc: 'Tabungan sukarela, simpanan pokok & wajib, serta pinjaman modal kerja dengan akad transparan tanpa riba tersembunyi.',
    link: '#simulasi',
  },
  {
    icon: 'Store',
    title: 'Toko & Gerai Desa',
    desc: 'Pengadaan sembako murah terjangkau, pupuk resmi bersubsidi, benih unggul, dan kebutuhan harian keluarga.',
    link: '#unit-usaha',
  },
  {
    icon: 'TrendingUp',
    title: 'Pembiayaan Modal UMKM',
    desc: 'Suntikan dana produktif untuk warung kelontong, pengrajin anyaman bambu, dan peternak unggas dengan pendampingan usaha.',
    link: '#simulasi',
  },
  {
    icon: 'Truck',
    title: 'Logistik & Distribusi Hasil Tani',
    desc: 'Penyerapan hasil panen padi, cabai, sayur mayur dengan timbangan adil, armada angkutan, dan akses pasar kota.',
    link: '#unit-usaha',
  },
  {
    icon: 'QrCode',
    title: 'Layanan Digital & PPOB',
    desc: 'Bayar tagihan listrik PLN, PDAM, pulsa kuota, iuran BPJS, dan transfer antar-bank dengan biaya termurah di balai desa.',
    link: '/dashboard',
  },
];

export const STEPS = [
  {
    step: '01',
    title: 'Pengisian Formulir',
    desc: 'Lengkapi formulir pendaftaran dengan menyertakan KTP/KK warga secara online atau datang langsung ke balai koperasi.',
  },
  {
    step: '02',
    title: 'Simpanan Pokok Awal',
    desc: 'Setor simpanan pokok Rp 100.000 (sekali selamanya) dan simpanan wajib Rp 25.000/bulan melalui transfer atau tunai.',
  },
  {
    step: '03',
    title: 'Verifikasi Pengurus',
    desc: 'Proses validasi data cepat maksimal 1x24 jam kerja oleh tim pengawas desa dan perwakilan kelompok warga.',
  },
  {
    step: '04',
    title: 'Aktivasi Kartu Anggota',
    desc: 'Terima Buku Anggota digital atau fisik, akses hak suara pada RAT, dan nikmati dividen SHU tahunan.',
  },
];

export const BUSINESS_UNITS = [
  {
    title: 'Toko Desa "Sumber Makmur"',
    desc: 'Penyedia sembako murah penyeimbang inflasi desa serta pupuk organik bersubsidi resmi untuk kelompok tani.',
    category: 'Ritel Sembako',
    image: IMAGES.UNIT_TOKO,
  },
  {
    title: 'Sentra Pengepulan Tani',
    desc: 'Fasilitas timbangan adil, cold-storage sederhana, dan pemilahan cabai merah, jagung, serta gabah kering giling.',
    category: 'Pasca-Panen',
    image: IMAGES.UNIT_GUDANG,
  },
  {
    title: 'Gerai Kopi & UMKM Desa',
    desc: 'Pusat oleh-oleh khas olahan singkong, kopi robusta pegunungan desa, dan wadah kreasi ekonomi kreatif anak muda.',
    category: 'Sentra Kuliner',
    image: IMAGES.UNIT_KULINER,
  },
  {
    title: 'Bank Sampah Berdaya',
    desc: 'Mengubah sampah anorganik rumah tangga menjadi pundi tabungan emas dan saldo simpanan wajib masa depan.',
    category: 'Lingkungan Hidup',
    image: IMAGES.UNIT_BANK_SAMPAH,
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Berkat modal talangan benih dan pupuk dari Koperasi Merah Putih, panen musim ini meningkat 40% dan dibeli langsung tanpa perantara tengkulak yang suka mempermainkan harga.',
    name: 'Pak Slamet Riyadi',
    role: '52 thn • Petani Padi Organik',
    image: IMAGES.TESTIMONI_SLAMET,
    rating: 5,
  },
  {
    quote: 'Pinjaman tanpa jaminan rumit membuat warung kelontong saya sekarang semakin lengkap. Belanja kulakan di Toko Desa harganya jauh lebih murah, dan akhir tahun masih dapat bagi hasil SHU!',
    name: 'Ibu Siti Rahmawati',
    role: '38 thn • Pemilik Warung Kelontong',
    image: IMAGES.TESTIMONI_MARIAM,
    rating: 5,
  },
  {
    quote: 'Sistem digital koperasi sangat modern dan transparan. Cek saldo tabungan, kirim pesanan kerajinan bambu, hingga pembiayaan alat kerja baru cukup dari aplikasi smartphone.',
    name: 'Danang Prasetyo',
    role: '29 thn • Pengrajin Anyaman Bambu',
    image: IMAGES.TESTIMONI_BAMBANG,
    rating: 5,
  },
];

export const NEWS_PREVIEW = [
  {
    id: 1,
    title: 'Laporan RAT Tahun Buku 2024: Pembagian SHU Tumbuh 22% dan Realisasi Cold-Storage',
    summary: 'Rapat Anggota Tahunan 2024 menghasilkan kesepakatan pembagian dividen SHU sebesar Rp 412 juta dan peresmian fasilitas pendingin pasca-panen.',
    date: '24 Feb 2025',
    category: 'Laporan Resmi',
    image: IMAGES.NEWS_RAT,
  },
  {
    id: 2,
    title: 'Penyaluran 50 Ton Pupuk Organik Bersubsidi Tahap I untuk 8 Kelompok Tani',
    summary: 'Dukungan nyata ketahanan pangan dengan distribusi pupuk hayati harga terjangkau siap semprot menjelang musim tanam penghujan.',
    date: '18 Feb 2025',
    category: 'Pertanian',
    image: IMAGES.NEWS_PUPUK,
  },
  {
    id: 3,
    title: 'Digitalisasi Toko Desa: Kini Seluruh Pembayaran Mendukung QRIS Standar Nasional',
    summary: 'Masyarakat kini dapat berbelanja sembako di Toko Desa cukup dengan scan QRIS dari berbagai dompet digital dan mobile banking.',
    date: '12 Feb 2025',
    category: 'Teknologi',
    image: IMAGES.NEWS_QRIS,
  },
];

export const FAQS = [
  {
    question: 'Siapa saja yang berhak mendaftar menjadi anggota Koperasi Merah Putih?',
    answer: 'Seluruh Warga Negara Indonesia (WNI) yang berdomisili di wilayah desa binaan maupun desa sekitar, termasuk petani, peternak, pedagang, pelaku UMKM rumahan, hingga aparatur desa berhak menjadi anggota dengan menyertakan fotokopi KTP dan Kartu Keluarga yang sah.',
  },
  {
    question: 'Berapa besaran simpanan pokok dan simpanan wajib yang harus disetorkan?',
    answer: 'Simpanan Pokok sebesar Rp 100.000 yang dibayarkan satu kali selama menjadi anggota, dan Simpanan Wajib sebesar Rp 25.000 setiap bulannya. Seluruh dana simpanan ini tercatat atas nama Anda dan berhak mendapatkan pembagian SHU tahunan.',
  },
  {
    question: 'Apa saja syarat pengajuan pinjaman usaha bagi pelaku UMKM dan petani?',
    answer: 'Syarat utamanya adalah: sudah terdaftar sebagai anggota aktif minimal selama 1 bulan, memiliki usaha produktif atau garapan lahan pertanian nyata, dan mendapatkan rekomendasi dari ketua kelompok rukun tetangga (RT) atau kelompok tani setempat. Tidak dipungut biaya provisi terselubung.',
  },
  {
    question: 'Bagaimana cara perhitungan dan pembagian Sisa Hasil Usaha (SHU)?',
    answer: 'SHU dihitung berdasarkan dua porsi berkeadilan: 1) Jasa Modal (berdasarkan total saldo simpanan yang Anda miliki) dan 2) Jasa Usaha (berdasarkan keaktifan Anda bertransaksi belanja di toko desa atau membayar jasa pinjaman). Laporan dibacakan terbuka setiap RAT tahunan.',
  },
  {
    question: 'Apakah warga perantau atau dari luar desa diperbolehkan mendaftar?',
    answer: 'Diperbolehkan melalui mekanisme "Anggota Luar Biasa". Anggota Luar Biasa dapat menabung di tabungan sukarela, berbelanja di unit toko desa, dan memanfaatkan fasilitas layanan digital pembayaran PPOB tanpa batasan domisili.',
  },
];

