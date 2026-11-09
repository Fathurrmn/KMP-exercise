# Koperasi Desa Merah Putih — Web Application

Aplikasi web modern, responsif, dan interaktif untuk **Koperasi Jasa Desa Merah Putih Sukamaju**, yang dibangun dari hasil konversi 5 layar desain Google Stitch menjadi satu kesatuan proyek React produksi.

---

## 🚀 Panduan Memulai Cepat (Quick Start)

### Prasyarat
- **Node.js** v18+ atau v20+
- **npm** v9+

### Instalasi & Menjalankan
```bash
# 1. Masuk ke direktori proyek
cd koperasi-merah-putih

# 2. Pasang dependensi
npm install

# 3. Jalankan server pengembangan lokal (Vite Dev Server)
npm run dev
# Akses di: http://localhost:5173

# 4. Bangun untuk produksi
npm run build

# 5. Uji pratinjau hasil build lokal
npm run preview
# Akses di: http://localhost:4173
```

---

## 📁 Struktur Folder Proyek

```
koperasi-merah-putih/
├── public/
│   ├── favicon.svg              # Favicon resmi blok "M" Merah Putih
│   └── images/                  # Seluruh aset gambar lokal terpusat (JPG & SVG)
├── screenshots/                 # Bukti verifikasi visual render browser (Desktop & Mobile)
├── src/
│   ├── components/
│   │   ├── common/              # Komponen bersama (Navbar, Footer, KawungPattern, ScrollToTop, dll)
│   │   ├── dashboard/           # Komponen spesifik dashboard (ShuMonthlyChart, DashboardSidebar)
│   │   └── loan/                # Kalkulator simulasi pinjaman interaktif (LoanCalculator)
│   ├── constants/
│   │   ├── images.js            # Sentralisasi path gambar & aset visual
│   │   └── siteConfig.js        # Sentralisasi data identitas, kontak WA, legalitas, dan teks demo
│   ├── data/
│   │   ├── homeData.js          # Data statistik beranda, unit usaha, testimoni, FAQ
│   │   ├── history.js           # Data visi-misi & linimasa 12 tahun koperasi
│   │   ├── team.js              # Data susunan dewan pengawas & dewan pengurus
│   │   ├── memberData.js        # Data simulasi akun anggota (saldo, pinjaman, mutasi transaksi)
│   │   └── news.js              # Data artikel warta, agenda kegiatan, & dokumen publik
│   ├── hooks/
│   │   └── usePageMetadata.js   # Dynamic document.title & meta description per rute
│   ├── layouts/
│   │   ├── PublicLayout.jsx     # Layout publik (Navbar utama + Konten + Footer publik)
│   │   └── DashboardLayout.jsx  # Layout portal anggota (DashboardNavbar + Konten + DashboardFooter)
│   ├── pages/
│   │   ├── HomePage.jsx         # Halaman Beranda (10 section lengkap dari folder 1)
│   │   ├── AboutPage.jsx        # Halaman Tentang Kami & Legalitas (folder 4)
│   │   ├── RegisterPage.jsx     # Formulir Pendaftaran Anggota 4 Langkah (folder 2)
│   │   ├── DashboardPage.jsx    # Portal Anggota Interaktif (folder 3)
│   │   ├── NewsPage.jsx         # Pusat Warta & Publikasi Desa (folder 5)
│   │   └── NotFoundPage.jsx     # Halaman 404 Responsif
│   ├── styles/
│   │   └── index.css            # Directives Tailwind & custom styling slider
│   ├── utils/
│   │   └── formatters.js        # Utility sentral formatRupiah (Intl.NumberFormat id-ID)
│   ├── App.jsx                  # Router aplikasi & Route Code-Splitting (React.lazy)
│   └── main.jsx                 # Entry point React DOM
├── index.html                   # HTML template dengan preload Google Fonts (Plus Jakarta Sans & Inter)
├── tailwind.config.js           # 47 Material 3 design tokens warna, tipografi, radius & spacing
├── vite.config.js               # Konfigurasi bundler Vite
└── package.json                 # Konfigurasi dependensi (Tailwind v3.4, React Router v6, Lucide)
```

---

## 🎨 Cara Mengganti Gambar & Foto

Semua referensi gambar di dalam aplikasi dipusatkan pada file [`src/constants/images.js`](src/constants/images.js).

1. Simpan file foto baru Anda di folder `public/images/` (contoh: `foto-ketua-baru.jpg`).
2. Buka [`src/constants/images.js`](src/constants/images.js) dan ubah nilainya:
   ```javascript
   export const IMAGES = {
     // Ganti dengan nama file baru di public/images/
     TEAM_KETUA: '/images/foto-ketua-baru.jpg',
     // ...
   };
   ```
3. Gambar otomatis terbarui di seluruh halaman terkait tanpa perlu mengedit komponen JSX satu per satu.

---

## 📝 Cara Mengganti Data Contoh & Teks Kontak

Seluruh data legalitas, nomor WhatsApp pengurus, alamat kantor, dan identitas resmi dipusatkan di [`src/constants/siteConfig.js`](src/constants/siteConfig.js):

```javascript
export const SITE_CONFIG = {
  name: 'Koperasi Desa Merah Putih',
  contact: {
    hotlineDisplay: '0812-3456-7890',
    hotlineWaLink: 'https://wa.me/6281234567890',
    helpdeskDisplay: '0812-8900-3321',
    email: 'layanan@koperasimerahputih.id',
  },
  legal: {
    skKemenkumham: 'AHU-0019482.AH.01.26.TAHUN 2021',
    izinUsahaSimpanPinjam: 'No. 42/KOP/2023',
  },
};
```

Untuk data konten spesifik lainnya:
- **Dewan Pengurus & Pengawas**: [`src/data/team.js`](src/data/team.js)
- **Linimasa Sejarah & Visi Misi**: [`src/data/history.js`](src/data/history.js)
- **Artikel Berita & Agenda**: [`src/data/news.js`](src/data/news.js)
- **Saldo Simulasi Anggota & Mutasi Transaksi**: [`src/data/memberData.js`](src/data/memberData.js)

---

## 📱 Daftar Halaman & Fitur Interaktif

### 1. Beranda (`/`)
- Hero Section dinamis dengan badge kuorum dan ringkasan aset.
- Nilai keunggulan gotong royong dan ekosistem terpadu desa.
- **Kalkulator Simulasi Pinjaman Live**: Pilihan 3 produk pinjaman, slider nominal (Rp 1 jt - Rp 50 jt) dan tenor (3, 6, 12, 18, 24 bulan) dengan kalkulasi cicilan bulanan langsung.
- Galeri unit usaha (Toko Desa, Gudang Pangan, Kafe Kopi Tani, Bank Sampah).
- Carousel testimoni warga desa anggota nyata.
- Warta preview dan **Accordion FAQ interaktif** dengan atribut aksesibilitas `aria-expanded`.

### 2. Formulir Pendaftaran Anggota (`/daftar-anggota`)
- Wizard 4 langkah: (1) Identitas Pribadi, (2) Alamat & Usaha, (3) Pilihan Simpanan Awal & Pembayaran, (4) Unggah KYC.
- **Validasi Sisi Klien Ketat**: NIK 16 digit angka, nomor HP valid, email valid, upload file KTP & swafoto maksimal 2MB (format JPG/PNG/PDF).
- Panel kalkulasi setoran awal yang menghitung total secara live sesuai pilihan simpanan sukarela.
- Modal tinjau ulang data sebelum kirim (dapat ditutup dengan tombol `Esc` atau klik luar).
- Layar sukses dengan Nomor Pendaftaran unik. *Tidak ada data sensitif yang disimpan di server atau localStorage.*

### 3. Tentang Kami (`/tentang-kami`)
- Filosofi gotong royong dan Visi 2030 beserta 4 pilar misi.
- Linimasa interaktif perjalanan 12 tahun (2012–2025): responsif vertikal di mobile dan selang-seling di desktop.
- Kartu profil Dewan Pengawas dan Dewan Pengurus dengan foto dan kredensial pengalaman.
- Tabel legalitas dan perizinan resmi pemerintah.

### 4. Portal Anggota / Dashboard (`/dashboard`)
- Menggunakan `DashboardLayout` tersendiri dengan header & footer khusus anggota.
- Banner penanda Mode Demo interaktif.
- 3 Kartu Saldo Bento: Total Simpanan (dengan rincian Pokok, Wajib, Sukarela), Status Pinjaman Aktif (dengan progress bar 62,5%), dan Akumulasi SHU Berjalan.
- 6 Tombol Aksi Cepat Anggota tanpa link mati.
- **Grafik Batang Akumulasi & Proyeksi SHU Bulanan (Stitch 1:1)**: Perbandingan realisasi 2024 vs proyeksi 2025 untuk 12 bulan (Jan–Des) dengan tooltip interaktif nilai rupiah.
- Tabel Riwayat Transaksi dengan **filter kategori fungsional** (*Semua*, *Simpanan*, *Angsuran Pinjaman*, *Belanja Toko*, *Bagi Hasil SHU*), live keyword search, modal struk digital, dan empty state.
- **Kartu Digital Anggota** bernuansa merah gradien dengan chip contactless, QR belanja, jadwal komitmen, info pelatihan UMKM, dan kontak pendamping lapangan (Kang Asep).
- Kartu portofolio Simpanan Berjangka (SiJangka).

### 5. Warta & Informasi Terkini (`/berita`)
- Kolom sorotan utama (Featured Article) dengan metrik kuorum dan tombol baca reader modal.
- Filter terpadu 6 kategori dan input pencarian judul/isi secara live.
- Sidebar agenda kegiatan desa mendatang dan daftar unduhan dokumen publik resmi (dengan modal penjelasan simulasi).
- Formulir pendaftaran buletin warta desa via WhatsApp.

### 6. Halaman 404 (`*`)
- Halaman penanganan rute tidak dikenal dengan tombol cepat kembali ke beranda.

---

## 🔒 Catatan Penting: Mode Demonstrasi (Tanpa Backend)
Aplikasi ini berjalan **sepenuhnya di sisi klien (Client-Side Only)**:
- Tidak ada data NIK, foto KTP, atau informasi pribadi yang dikirim ke server backend atau disimpan di `localStorage`.
- Dashboard anggota menampilkan data simulasi akun Ibu Siti Aminah untuk keperluan pratinjau antarmuka.
- Tombol unduhan dokumen menampilkan modal penjelasan bahwa berkas adalah contoh simulasi.

---

## 🛡️ Standar Kualitas & Aksesibilitas
- **Tailwind CSS v3.4**: Memastikan kecocokan 1:1 dengan Material 3 tokens dari Google Stitch.
- **Hierarki Heading**: Tepat satu `<h1>` per halaman.
- **Aksesibilitas Modal**: Seluruh modal dapat ditutup menggunakan keyboard (tombol `Esc`) dan klik pada latar belakang.
- **Aksesibilitas Fokus**: Cincin fokus keyboard (`focus-visible:ring-2 focus-visible:ring-primary`) aktif pada semua elemen interaktif.
- **Code-Splitting**: Setiap rute dimuat secara dinamis menggunakan `React.lazy` dan `Suspense`.

