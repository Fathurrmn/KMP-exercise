import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Upload,
  AlertCircle,
  FileText,
  User,
  MapPin,
  Wallet,
  ShieldCheck,
  Check,
  Phone,
  Home,
  Clock,
  Sparkles,
} from 'lucide-react';
import IMAGES from '../constants/images';
import KawungPattern from '../components/common/KawungPattern';
import usePageMetadata from '../hooks/usePageMetadata';
import { SITE_CONFIG } from '../constants/siteConfig';

export default function RegisterPage() {
  usePageMetadata('Daftar Anggota', 'Formulir pendaftaran anggota baru Koperasi Desa Merah Putih dalam 4 langkah mudah dan verifikasi aman.');

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [registrationCode, setRegistrationCode] = useState('');

  // Single Master State
  const [formData, setFormData] = useState({
    // Step 1: Identitas Pribadi
    fullName: '',
    nik: '',
    birthPlace: '',
    birthDate: '',
    gender: 'Laki-laki',
    profession: 'Petani Padi / Palawija',
    whatsapp: '',
    email: '',

    // Step 2: Alamat & Usaha
    address: '',
    rtRw: '',
    village: 'Cibodas',
    subdistrict: 'Lembang',
    regency: 'Bandung Barat',
    postalCode: '',
    houseStatus: 'Milik Sendiri',
    hasBusiness: 'ya',
    businessName: '',
    businessType: '',

    // Step 3: Simpanan Awal & Iuran
    simpananPokok: 100000, // Wajib 1x
    simpananWajib: 25000, // Wajib per bulan
    simpananSukarela: 50000, // Pilihan
    paymentMethod: 'transfer', // transfer, qris, cash

    // Step 4: Berkas KYC & Persetujuan
    agreeTerms: false,
    agreeSumpah: false,
  });

  // Client-side file states (stored only in memory as preview URLs / file info)
  const [ktpFile, setKtpFile] = useState(null);
  const [ktpPreview, setKtpPreview] = useState(null);
  const [selfieFile, setSelfieFile] = useState(null);
  const [selfiePreview, setSelfiePreview] = useState(null);
  const [skuFile, setSkuFile] = useState(null);

  // Errors state
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = 'Formulir Pendaftaran Anggota - Koperasi Desa Merah Putih';
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on edit
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Nama lengkap wajib diisi sesuai e-KTP.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Nama minimal 3 karakter.';
    }

    if (!formData.nik.trim()) {
      errs.nik = 'Nomor NIK e-KTP wajib diisi.';
    } else if (!/^\d{16}$/.test(formData.nik.trim())) {
      errs.nik = 'NIK harus tepat 16 digit angka.';
    }

    if (!formData.birthPlace.trim()) {
      errs.birthPlace = 'Tempat lahir wajib diisi.';
    }
    if (!formData.birthDate) {
      errs.birthDate = 'Tanggal lahir wajib dipilih.';
    }

    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'Nomor WhatsApp wajib diisi untuk notifikasi.';
    } else if (!/^(?:\+62|62|08)[0-9]{8,12}$/.test(formData.whatsapp.trim().replace(/[-\s]/g, ''))) {
      errs.whatsapp = 'Format nomor HP/WA tidak valid (misal: 081234567890).';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Format alamat email tidak valid.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = () => {
    const errs = {};
    if (!formData.address.trim()) {
      errs.address = 'Alamat jalan/dusun/kampung wajib diisi.';
    }
    if (!formData.rtRw.trim()) {
      errs.rtRw = 'RT dan RW wajib diisi (misal: 03/05).';
    }
    if (!formData.village.trim()) {
      errs.village = 'Desa/Kelurahan wajib diisi.';
    }
    if (!formData.subdistrict.trim()) {
      errs.subdistrict = 'Kecamatan wajib diisi.';
    }
    if (!formData.regency.trim()) {
      errs.regency = 'Kabupaten/Kota wajib diisi.';
    }

    if (formData.hasBusiness === 'ya' && !formData.businessName.trim()) {
      errs.businessName = 'Nama usaha wajib diisi jika memiliki usaha produktif.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 3 Validation
  const validateStep3 = () => {
    const errs = {};
    if (formData.simpananSukarela < 0 || isNaN(formData.simpananSukarela)) {
      errs.simpananSukarela = 'Nominal simpanan sukarela tidak boleh negatif.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 4 Validation
  const validateStep4 = () => {
    const errs = {};
    if (!ktpFile && !ktpPreview) {
      errs.ktpFile = 'Foto e-KTP asli wajib diunggah.';
    }
    if (!selfieFile && !selfiePreview) {
      errs.selfieFile = 'Foto selfie memegang e-KTP wajib diunggah.';
    }
    if (!formData.agreeTerms) {
      errs.agreeTerms = 'Anda harus menyetujui AD/ART dan regulasi koperasi.';
    }
    if (!formData.agreeSumpah) {
      errs.agreeSumpah = 'Anda harus menyetujui pernyataan keanggotaan gotong royong.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    let isValid = false;
    if (currentStep === 1) isValid = validateStep1();
    if (currentStep === 2) isValid = validateStep2();
    if (currentStep === 3) isValid = validateStep3();

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  // File Upload Handlers (in-memory only, max 2MB)
  const handleFileUpload = (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        [type]: 'Tipe file harus JPG, PNG, atau PDF.',
      }));
      return;
    }

    // Validate size (2 MB = 2 * 1024 * 1024 bytes)
    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        [type]: 'Ukuran file maksimal 2 MB.',
      }));
      return;
    }

    // Clear error
    setErrors((prev) => ({ ...prev, [type]: null }));

    if (type === 'ktpFile') {
      setKtpFile(file);
      if (file.type.startsWith('image/')) {
        setKtpPreview(URL.createObjectURL(file));
      } else {
        setKtpPreview('/images/register-ktp-sample.jpg');
      }
    } else if (type === 'selfieFile') {
      setSelfieFile(file);
      if (file.type.startsWith('image/')) {
        setSelfiePreview(URL.createObjectURL(file));
      } else {
        setSelfiePreview('/images/register-selfie-sample.jpg');
      }
    } else if (type === 'skuFile') {
      setSkuFile(file);
    }
  };

  const handleSubmitRegistration = () => {
    if (!validateStep4()) return;

    // Generate random dummy registration ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const regCode = `KDMP-REG-2025-${randomNum}`;
    setRegistrationCode(regCode);
    setShowReviewModal(false);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Total Initial Payment
  const totalPayment =
    Number(formData.simpananPokok) +
    Number(formData.simpananWajib) +
    Number(formData.simpananSukarela || 0);

  const formatRupiah = (val) => 'Rp ' + Number(val).toLocaleString('id-ID');

  const stepsList = [
    { number: 1, title: 'Data Diri', subtitle: 'Identitas Pemohon' },
    { number: 2, title: 'Alamat & Usaha', subtitle: 'Domisili & Pekerjaan' },
    { number: 3, title: 'Simpanan', subtitle: 'Iuran Pokok & Wajib' },
    { number: 4, title: 'Berkas KYC', subtitle: 'Verifikasi e-KTP' },
  ];

  // ===================== SUCCESS SCREEN =====================
  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-margin py-space-xl bg-surface">
        <div className="max-w-2xl w-full bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-3xl shadow-xl border border-outline-variant/30 text-center flex flex-col items-center gap-space-md relative overflow-hidden">
          <KawungPattern className="absolute -top-10 -right-10 w-64 h-64 opacity-5 text-primary" />
          
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
            <Check className="w-10 h-10 stroke-[3]" />
          </div>

          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              Pendaftaran Berhasil Dikirim
            </span>
            <h1 className="font-headline-lg text-headline-lg font-black text-on-surface">
              Selamat Bergabung, {formData.fullName}!
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto leading-relaxed">
              Formulir pendaftaran dan berkas KYC Anda telah tersimpan di sistem verifikasi Koperasi Desa Merah Putih.
            </p>
          </div>

          {/* Registration Code Banner */}
          <div className="w-full bg-surface-container p-space-md rounded-2xl border border-outline-variant/30 flex flex-col gap-1">
            <span className="font-label-sm text-label-sm text-on-surface-variant">NOMOR TIKET PENDAFTARAN RESMI</span>
            <span className="font-mono text-2xl font-black text-primary tracking-wider">{registrationCode}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Tunjukkan nomor ini saat verifikasi lanjutan di balai koperasi desa.
            </span>
          </div>

          {/* Ringkasan Ringkas */}
          <div className="w-full bg-surface p-space-md rounded-xl text-left flex flex-col gap-2 text-body-sm text-on-surface">
            <div className="flex justify-between border-b border-outline-variant/20 pb-1">
              <span className="text-on-surface-variant">Nama Pemohon:</span>
              <span className="font-bold">{formData.fullName}</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant/20 pb-1">
              <span className="text-on-surface-variant">Unit Wilayah:</span>
              <span className="font-semibold">{formData.village}, {formData.subdistrict}</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant/20 pb-1">
              <span className="text-on-surface-variant">Total Setoran Awal:</span>
              <span className="font-bold text-primary font-mono">{formatRupiah(totalPayment)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Metode Pembayaran:</span>
              <span className="font-semibold uppercase">{formData.paymentMethod}</span>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs w-full">
            <Link
              to="/dashboard"
              className="flex-1 min-w-[200px] py-3.5 px-space-md rounded-full bg-primary-container text-on-primary font-label-lg font-bold shadow-md hover:bg-primary transition-all text-center"
            >
              Lihat Portal Anggota (Dashboard)
            </Link>
            <Link
              to="/"
              className="py-3.5 px-space-md rounded-full bg-surface-container text-on-surface font-label-md font-bold hover:bg-surface-container-high transition-colors"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ===================== MAIN FORM SCREEN =====================
  return (
    <div className="min-h-screen bg-surface py-space-md lg:py-space-lg">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Page Title & Breadcrumb */}
        <div className="flex flex-col gap-1 mb-space-md">
          <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
            <Link to="/" className="hover:text-primary">Beranda</Link>
            <span>/</span>
            <span className="text-primary font-semibold">Pendaftaran Anggota</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-tight">
            Formulir Pendaftaran Anggota Koperasi
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Mari gotong royong membangun kedaulatan ekonomi keluarga dan kemandirian desa kita tercinta.
          </p>
        </div>

        {/* 2-Column Layout (Form 8 cols + Sidebar 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* LEFT: FORM & STEPPER CARD (8 COLS) */}
          <section className="lg:col-span-8 flex flex-col gap-space-lg">
            {/* STEPPER PROGRESS HEADER */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-md sm:p-space-lg shadow-sm border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  Tahap Pendaftaran: <span className="text-primary">Langkah {currentStep} dari 4 ({stepsList[currentStep - 1].title})</span>
                </span>
                <span className="font-label-sm text-label-sm bg-primary-fixed/40 text-primary px-3 py-0.5 rounded-full font-bold">
                  {currentStep * 25}% Selesai
                </span>
              </div>

              {/* Progress bar track */}
              <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden mb-space-md">
                <div
                  className="bg-primary-container h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${currentStep * 25}%` }}
                />
              </div>

              {/* 4 Step Pills */}
              <div className="grid grid-cols-4 gap-2 text-center">
                {stepsList.map((step) => {
                  const isCompleted = currentStep > step.number;
                  const isActive = currentStep === step.number;
                  return (
                    <div
                      key={step.number}
                      className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                        isActive
                          ? 'bg-primary-fixed/20 border border-primary/20'
                          : isCompleted
                          ? 'bg-surface-container-low'
                          : 'opacity-50'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                          isCompleted
                            ? 'bg-emerald-600 text-white'
                            : isActive
                            ? 'bg-primary-container text-on-primary'
                            : 'bg-surface-container-high text-on-surface-variant'
                        }`}
                      >
                        {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : step.number}
                      </div>
                      <span className="font-label-sm text-[12px] font-bold text-on-surface hidden sm:inline">
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FORM CONTAINER CARD */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-md sm:p-space-lg shadow-sm border border-outline-variant/30 flex flex-col gap-space-lg">
              {/* ================= STEP 1: IDENTITAS PRIBADI ================= */}
              {currentStep === 1 && (
                <div className="flex flex-col gap-space-md animate-in fade-in duration-300">
                  <div className="border-b border-outline-variant/20 pb-space-xs">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Langkah 1: Identitas Pribadi Pemohon
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Pastikan data yang Anda masukkan sesuai dengan e-KTP resmi yang masih berlaku.
                    </p>
                  </div>

                  {/* Nama Lengkap */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Nama Lengkap (Sesuai e-KTP) <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Siti Aminah"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`w-full px-space-md py-3 rounded-xl bg-surface border ${
                        errors.fullName ? 'border-error' : 'border-outline-variant/40'
                      } text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                    />
                    {errors.fullName && (
                      <span className="text-error font-body-sm text-[12px] flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* NIK */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Nomor Induk Kependudukan (NIK e-KTP) <span className="text-primary">*</span>
                      </label>
                      <span className="font-label-sm text-[11px] text-on-surface-variant">Wajib 16 Digit Angka</span>
                    </div>
                    <input
                      type="text"
                      maxLength={16}
                      placeholder="Contoh: 3204281204850001"
                      value={formData.nik}
                      onChange={(e) => handleInputChange('nik', e.target.value.replace(/\D/g, ''))}
                      className={`w-full px-space-md py-3 rounded-xl bg-surface border font-mono ${
                        errors.nik ? 'border-error' : 'border-outline-variant/40'
                      } text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                    />
                    {errors.nik && (
                      <span className="text-error font-body-sm text-[12px] flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.nik}
                      </span>
                    )}
                  </div>

                  {/* Tempat & Tanggal Lahir */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Tempat Lahir <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Bandung"
                        value={formData.birthPlace}
                        onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                        className={`w-full px-space-md py-3 rounded-xl bg-surface border ${
                          errors.birthPlace ? 'border-error' : 'border-outline-variant/40'
                        } text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                      />
                      {errors.birthPlace && (
                        <span className="text-error font-body-sm text-[12px] flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.birthPlace}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Tanggal Lahir <span className="text-primary">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        className={`w-full px-space-md py-3 rounded-xl bg-surface border ${
                          errors.birthDate ? 'border-error' : 'border-outline-variant/40'
                        } text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                      />
                      {errors.birthDate && (
                        <span className="text-error font-body-sm text-[12px] flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.birthDate}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Jenis Kelamin & Profesi */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Jenis Kelamin <span className="text-primary">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Laki-laki', 'Perempuan'].map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => handleInputChange('gender', g)}
                            className={`py-2.5 px-3 rounded-xl font-label-md transition-all ${
                              formData.gender === g
                                ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                                : 'bg-surface border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container'
                            }`}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Mata Pencaharian Utama <span className="text-primary">*</span>
                      </label>
                      <select
                        value={formData.profession}
                        onChange={(e) => handleInputChange('profession', e.target.value)}
                        className="w-full px-space-md py-3 rounded-xl bg-surface border border-outline-variant/40 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="Petani Padi / Palawija">Petani Padi / Palawija</option>
                        <option value="Pedagang Warung / Kelontong (UMKM)">Pedagang Warung / Kelontong (UMKM)</option>
                        <option value="Peternak Unggas / Ruminansia">Peternak Unggas / Ruminansia</option>
                        <option value="Pengrajin Anyaman / Seni">Pengrajin Anyaman / Seni</option>
                        <option value="Karyawan Swasta / Honorer">Karyawan Swasta / Honorer</option>
                        <option value="Ibu Rumah Tangga / Wirausaha Rumahan">Ibu Rumah Tangga / Wirausaha</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  {/* Kontak: WhatsApp & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Nomor WhatsApp Aktif <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Contoh: 081234567890"
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                        className={`w-full px-space-md py-3 rounded-xl bg-surface border ${
                          errors.whatsapp ? 'border-error' : 'border-outline-variant/40'
                        } text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                      />
                      {errors.whatsapp && (
                        <span className="text-error font-body-sm text-[12px] flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.whatsapp}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Alamat Email <span className="text-on-surface-variant font-normal text-xs">(Opsional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Contoh: nama@gmail.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-space-md py-3 rounded-xl bg-surface border ${
                          errors.email ? 'border-error' : 'border-outline-variant/40'
                        } text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                      />
                      {errors.email && (
                        <span className="text-error font-body-sm text-[12px] flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ================= STEP 2: ALAMAT & USAHA ================= */}
              {currentStep === 2 && (
                <div className="flex flex-col gap-space-md animate-in fade-in duration-300">
                  <div className="border-b border-outline-variant/20 pb-space-xs">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Langkah 2: Alamat Tempat Tinggal & Usaha
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Informasi domisili mempermudah penugasan kelompok pendamping desa dan distribusi pupuk.
                    </p>
                  </div>

                  {/* Alamat Jalan */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Alamat Jalan / Dusun / Kampung <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Jl. Raya Cibodas No. 12, Dusun Sukamaju"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className={`w-full px-space-md py-3 rounded-xl bg-surface border ${
                        errors.address ? 'border-error' : 'border-outline-variant/40'
                      } text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                    />
                    {errors.address && (
                      <span className="text-error font-body-sm text-[12px] flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.address}
                      </span>
                    )}
                  </div>

                  {/* RT/RW & Kode Pos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        RT / RW <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: 03 / 07"
                        value={formData.rtRw}
                        onChange={(e) => handleInputChange('rtRw', e.target.value)}
                        className={`w-full px-space-md py-3 rounded-xl bg-surface border ${
                          errors.rtRw ? 'border-error' : 'border-outline-variant/40'
                        } text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                      />
                      {errors.rtRw && (
                        <span className="text-error font-body-sm text-[12px] flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.rtRw}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Kode Pos <span className="text-on-surface-variant font-normal text-xs">(Opsional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: 40391"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        className="w-full px-space-md py-3 rounded-xl bg-surface border border-outline-variant/40 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Desa & Kecamatan */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Kelurahan / Desa <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Cibodas"
                        value={formData.village}
                        onChange={(e) => handleInputChange('village', e.target.value)}
                        className="w-full px-space-md py-3 rounded-xl bg-surface border border-outline-variant/40 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Kecamatan <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Lembang"
                        value={formData.subdistrict}
                        onChange={(e) => handleInputChange('subdistrict', e.target.value)}
                        className="w-full px-space-md py-3 rounded-xl bg-surface border border-outline-variant/40 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Kabupaten / Kota <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Bandung Barat"
                        value={formData.regency}
                        onChange={(e) => handleInputChange('regency', e.target.value)}
                        className="w-full px-space-md py-3 rounded-xl bg-surface border border-outline-variant/40 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Kepemilikan Usaha */}
                  <div className="p-space-md bg-surface rounded-2xl border border-outline-variant/30 flex flex-col gap-space-sm">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Apakah Anda memiliki usaha produktif / lahan pertanian yang sedang aktif?
                    </span>
                    <div className="flex items-center gap-space-md">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hasBusiness"
                          checked={formData.hasBusiness === 'ya'}
                          onChange={() => handleInputChange('hasBusiness', 'ya')}
                          className="w-4 h-4 text-primary accent-primary"
                        />
                        <span className="font-body-md text-on-surface">Ya, Memiliki Usaha</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hasBusiness"
                          checked={formData.hasBusiness === 'tidak'}
                          onChange={() => handleInputChange('hasBusiness', 'tidak')}
                          className="w-4 h-4 text-primary accent-primary"
                        />
                        <span className="font-body-md text-on-surface">Tidak / Belum Ada</span>
                      </label>
                    </div>

                    {formData.hasBusiness === 'ya' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-2">
                        <div className="flex flex-col gap-1">
                          <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Nama Usaha / Kelompok Tani <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Contoh: Warung Berkah Aminah"
                            value={formData.businessName}
                            onChange={(e) => handleInputChange('businessName', e.target.value)}
                            className={`w-full px-3 py-2 rounded-lg bg-surface-container-lowest border ${
                              errors.businessName ? 'border-error' : 'border-outline-variant/40'
                            } text-body-sm text-on-surface focus:outline-none focus:border-primary`}
                          />
                          {errors.businessName && (
                            <span className="text-error text-xs">{errors.businessName}</span>
                          )}
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Komoditas / Jenis Usaha
                          </label>
                          <input
                            type="text"
                            placeholder="Contoh: Kelontong Sembako / Sayuran"
                            value={formData.businessType}
                            onChange={(e) => handleInputChange('businessType', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-body-sm text-on-surface focus:outline-none focus:border-primary"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ================= STEP 3: SIMPANAN & IURAN ================= */}
              {currentStep === 3 && (
                <div className="flex flex-col gap-space-md animate-in fade-in duration-300">
                  <div className="border-b border-outline-variant/20 pb-space-xs">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Langkah 3: Pemilihan Simpanan Awal & Iuran
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Sesuai AD/ART Koperasi Merah Putih, simpanan menjadi modal gotong royong yang berhak atas pembagian SHU.
                    </p>
                  </div>

                  {/* Simpanan Pokok & Wajib (Fixed) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {/* Pokok */}
                    <div className="p-space-md rounded-2xl bg-surface border border-outline-variant/30 flex flex-col justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="font-label-sm text-primary uppercase font-bold text-[11px]">
                          Simpanan Pokok (1 Kali Selamanya)
                        </span>
                        <span className="font-headline-md text-headline-md font-bold text-on-surface font-mono">
                          Rp 100.000
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                          Dibayarkan satu kali saat mendaftar menjadi anggota resmi koperasi.
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold mt-space-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Terkunci otomatis
                      </span>
                    </div>

                    {/* Wajib */}
                    <div className="p-space-md rounded-2xl bg-surface border border-outline-variant/30 flex flex-col justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="font-label-sm text-secondary uppercase font-bold text-[11px]">
                          Simpanan Wajib (Bulan Pertama)
                        </span>
                        <span className="font-headline-md text-headline-md font-bold text-on-surface font-mono">
                          Rp 25.000 <span className="text-body-sm font-normal text-on-surface-variant">/ bln</span>
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                          Iuran bulanan anggota yang menjadi dasar perhitungan porsi SHU tahunan.
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold mt-space-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Wajib per bulan
                      </span>
                    </div>
                  </div>

                  {/* Simpanan Sukarela Awal */}
                  <div className="flex flex-col gap-space-xs bg-surface p-space-md rounded-2xl border border-outline-variant/30">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Setoran Simpanan Sukarela Awal (Tabungan Cair):
                    </label>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">
                      Dapat ditarik sewaktu-waktu dan mendapatkan bagi hasil bulanan.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[0, 50000, 100000, 250000].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handleInputChange('simpananSukarela', val)}
                          className={`py-2 px-3 rounded-xl font-label-md transition-all ${
                            formData.simpananSukarela === val
                              ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                              : 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface hover:bg-surface-container'
                          }`}
                        >
                          {val === 0 ? 'Rp 0' : formatRupiah(val)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pilihan Metode Pembayaran */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Metode Pembayaran Setoran Awal:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                      {[
                        { id: 'transfer', label: 'Transfer Bank Desa', desc: 'BRI / BNI / Mandiri / BSI' },
                        { id: 'qris', label: 'QRIS Merah Putih', desc: 'Scan dari dompet digital apa saja' },
                        { id: 'cash', label: 'Tunai di Kantor Unit', desc: 'Bayar saat pengambilan buku fisik' },
                      ].map((m) => (
                        <div
                          key={m.id}
                          onClick={() => handleInputChange('paymentMethod', m.id)}
                          className={`p-space-sm rounded-xl border cursor-pointer transition-all ${
                            formData.paymentMethod === m.id
                              ? 'border-primary bg-primary-fixed/20 shadow-sm'
                              : 'border-outline-variant/30 bg-surface hover:bg-surface-container-low'
                          }`}
                        >
                          <span className="font-label-md text-on-surface font-bold block">{m.label}</span>
                          <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">{m.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Panel Total Ringkasan Pembayaran Awal */}
                  <div className="p-space-md rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
                    <div className="flex flex-col text-left">
                      <span className="font-label-sm text-[11px] uppercase tracking-wider font-semibold text-emerald-800">
                        Total Biaya Masuk Pertama Kali
                      </span>
                      <span className="font-body-sm text-emerald-900">
                        (Pokok Rp 100rb + Wajib Rp 25rb + Sukarela {formatRupiah(formData.simpananSukarela)})
                      </span>
                    </div>
                    <span className="font-display-lg text-headline-lg font-black text-emerald-700 font-mono">
                      {formatRupiah(totalPayment)}
                    </span>
                  </div>
                </div>
              )}

              {/* ================= STEP 4: BERKAS KYC & VERIFIKASI ================= */}
              {currentStep === 4 && (
                <div className="flex flex-col gap-space-md animate-in fade-in duration-300">
                  <div className="border-b border-outline-variant/20 pb-space-xs">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Langkah 4: Unggah Dokumen Verifikasi (KYC)
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Unggah foto dokumen jelas tanpa terpotong (Format JPG, PNG, atau PDF, ukuran maksimal 2 MB). Berkas Anda aman dan hanya diproses di sisi perangkat Anda.
                    </p>
                  </div>

                  {/* Grid 2 Upload Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {/* Foto e-KTP */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Foto e-KTP Asli <span className="text-primary">*</span>
                      </label>
                      <div className="border-2 border-dashed border-outline-variant/50 rounded-2xl p-space-md text-center bg-surface flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-colors relative">
                        {ktpPreview ? (
                          <div className="flex flex-col items-center gap-2">
                            <img
                              alt="Pratinjau KTP"
                              className="h-28 w-auto rounded-lg object-contain shadow-sm border border-outline-variant/30"
                              src={ktpPreview}
                            />
                            <span className="font-label-sm text-xs text-emerald-700 font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Berkas KTP Terpilih ({ktpFile?.name || 'ktp.jpg'})
                            </span>
                          </div>
                        ) : (
                          <>
                            <div className="w-10 h-10 rounded-full bg-primary-container/10 text-primary flex items-center justify-center">
                              <Upload className="w-5 h-5" />
                            </div>
                            <span className="font-label-md text-xs font-semibold text-on-surface">
                              Klik untuk pilih foto e-KTP
                            </span>
                            <span className="font-body-sm text-[11px] text-on-surface-variant">
                              JPG, PNG, atau PDF (Maks. 2 MB)
                            </span>
                          </>
                        )}
                        <input
                          type="file"
                          accept="image/jpeg,image/png,application/pdf"
                          onChange={(e) => handleFileUpload(e, 'ktpFile')}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>
                      {errors.ktpFile && (
                        <span className="text-error font-body-sm text-[12px] flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.ktpFile}
                        </span>
                      )}
                    </div>

                    {/* Foto Selfie dengan e-KTP */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Foto Selfie Memegang e-KTP <span className="text-primary">*</span>
                      </label>
                      <div className="border-2 border-dashed border-outline-variant/50 rounded-2xl p-space-md text-center bg-surface flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-colors relative">
                        {selfiePreview ? (
                          <div className="flex flex-col items-center gap-2">
                            <img
                              alt="Pratinjau Selfie"
                              className="h-28 w-auto rounded-lg object-contain shadow-sm border border-outline-variant/30"
                              src={selfiePreview}
                            />
                            <span className="font-label-sm text-xs text-emerald-700 font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Berkas Selfie Terpilih ({selfieFile?.name || 'selfie.jpg'})
                            </span>
                          </div>
                        ) : (
                          <>
                            <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                              <User className="w-5 h-5" />
                            </div>
                            <span className="font-label-md text-xs font-semibold text-on-surface">
                              Klik untuk foto selfie memegang KTP
                            </span>
                            <span className="font-body-sm text-[11px] text-on-surface-variant">
                              Wajah dan tulisan KTP terlihat jelas
                            </span>
                          </>
                        )}
                        <input
                          type="file"
                          accept="image/jpeg,image/png,application/pdf"
                          onChange={(e) => handleFileUpload(e, 'selfieFile')}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>
                      {errors.selfieFile && (
                        <span className="text-error font-body-sm text-[12px] flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.selfieFile}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Surat Keterangan Usaha (Opsional) */}
                  <div className="flex flex-col gap-1 pt-1">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Surat Keterangan Usaha / Domisili dari RT/RW Desa{' '}
                      <span className="text-on-surface-variant font-normal text-xs">(Opsional)</span>
                    </label>
                    <div className="p-3 rounded-xl bg-surface border border-outline-variant/30 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-on-surface font-body-sm text-xs">
                        <FileText className="w-4 h-4 text-primary" />
                        <span>{skuFile ? skuFile.name : 'Belum ada berkas tambahan yang dipilih'}</span>
                      </div>
                      <label className="px-3 py-1 bg-surface-container rounded-lg text-xs font-bold text-primary hover:bg-surface-container-high cursor-pointer">
                        Pilih Berkas
                        <input
                          type="file"
                          accept="image/jpeg,image/png,application/pdf"
                          onChange={(e) => handleFileUpload(e, 'skuFile')}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Persetujuan AD/ART */}
                  <div className="p-space-md bg-surface-container-low rounded-2xl flex flex-col gap-space-xs border border-outline-variant/30 mt-space-xs">
                    <label className="flex items-start gap-space-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                        className="mt-1 w-4 h-4 text-primary accent-primary rounded"
                      />
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Saya menyatakan tunduk pada Anggaran Dasar & Anggaran Rumah Tangga (AD/ART) serta regulasi yang berlaku di Koperasi Desa Merah Putih. <span className="text-primary">*</span>
                      </span>
                    </label>
                    {errors.agreeTerms && (
                      <span className="text-error text-[12px] ml-6">{errors.agreeTerms}</span>
                    )}

                    <label className="flex items-start gap-space-xs cursor-pointer mt-1">
                      <input
                        type="checkbox"
                        checked={formData.agreeSumpah}
                        onChange={(e) => handleInputChange('agreeSumpah', e.target.checked)}
                        className="mt-1 w-4 h-4 text-primary accent-primary rounded"
                      />
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Seluruh data yang saya cantumkan adalah sah dan benar, bertujuan untuk kemajuan gotong royong ekonomi desa tanpa unsur penipuan. <span className="text-primary">*</span>
                      </span>
                    </label>
                    {errors.agreeSumpah && (
                      <span className="text-error text-[12px] ml-6">{errors.agreeSumpah}</span>
                    )}
                  </div>
                </div>
              )}

              {/* NAVIGATION BUTTONS (KEMBALI / LANJUT / TINJAU) */}
              <div className="pt-space-md border-t border-outline-variant/20 flex items-center justify-between gap-space-sm">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-space-md py-3 rounded-full bg-surface-container text-on-surface font-label-md font-bold hover:bg-surface-container-high transition-colors flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Kembali</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-space-xl py-3 rounded-full bg-primary-container text-on-primary font-label-lg font-bold shadow-md hover:bg-primary transition-all flex items-center gap-1.5 active:scale-95"
                  >
                    <span>Langkah Selanjutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      if (validateStep4()) {
                        setShowReviewModal(true);
                      }
                    }}
                    className="px-space-xl py-3 rounded-full bg-primary-container text-on-primary font-label-lg font-bold shadow-lg hover:bg-primary transition-all flex items-center gap-2 active:scale-95"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Tinjau & Kirim Pendaftaran</span>
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* RIGHT: PERSISTENT SIDEBAR (4 COLS) */}
          <aside className="lg:col-span-4 flex flex-col gap-space-md lg:sticky lg:top-24">
            {/* PRATINJAU KARTU ANGGOTA DIGITAL */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
                Kartu Anggota Digital Anda (Pratinjau Live)
              </span>
              <div className="relative w-full rounded-2xl bg-gradient-to-br from-[#9e001f] via-[#c8102e] to-[#750015] p-space-md text-on-primary shadow-xl overflow-hidden aspect-[1.58/1] flex flex-col justify-between border border-white/10">
                {/* Decorative Kawung Stamp */}
                <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none">
                  <svg fill="currentColor" height="220" viewBox="0 0 100 100" width="220">
                    <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="4" />
                    <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
                  </svg>
                </div>

                {/* Top Row: Logo & Chip */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-xs text-white">
                      KD
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm font-bold tracking-wider block leading-tight text-white">
                        KOPERASI DESA
                      </span>
                      <span className="font-label-sm text-[10px] text-white/80 tracking-widest uppercase">
                        MERAH PUTIH
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-white font-label-sm text-[10px] font-bold backdrop-blur-sm">
                    CALON ANGGOTA
                  </span>
                </div>

                {/* Chip Visual */}
                <div className="w-10 h-7 rounded bg-amber-200/80 my-1 relative overflow-hidden flex items-center justify-center shadow-inner">
                  <div className="w-full h-0.5 bg-amber-400/70" />
                </div>

                {/* Member Name & Profession (Live Preview) */}
                <div className="relative z-10">
                  <span className="font-label-sm text-[10px] text-white/70 block uppercase tracking-wider">
                    Nama Anggota
                  </span>
                  <span className="font-headline-sm text-headline-sm font-bold tracking-wide truncate block text-white font-mono">
                    {formData.fullName || 'Nama Calon Anggota'}
                  </span>
                  <span className="font-label-sm text-label-sm text-white/90 font-medium truncate block">
                    {formData.profession}
                  </span>
                </div>

                {/* Bottom Row: Member ID & Unit */}
                <div className="flex items-end justify-between relative z-10 pt-2 border-t border-white/20 text-white">
                  <div>
                    <span className="font-label-sm text-[9px] text-white/70 block">NOMOR INDUK SEMENTARA</span>
                    <span className="font-mono text-label-md text-label-md tracking-wider font-bold">
                      KDMP-2025-XXXX
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-right">
                    <span className="font-label-sm text-label-sm font-bold">
                      Unit {formData.village || 'Cibodas'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 KEUNTUNGAN MENJADI ANGGOTA */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs pb-space-xs border-b border-surface-container">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  5 Keuntungan Anggota
                </h3>
              </div>
              <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Hak SHU Tahunan:</strong> Bagi hasil keuntungan RAT tunai.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Pinjaman Bunga 0.8%:</strong> Modal kerja tanpa rentenir.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Diskon Grosir Sembako:</strong> Harga khusus pupuk & benih.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Serapan Hasil Panen:</strong> Penjualan hasil bumi berkeadilan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Pelatihan Usaha Gratis:</strong> Bimbingan pembukuan & pasar digital.</span>
                </li>
              </ul>
            </div>

            {/* BANTUAN CALL CENTER */}
            <div className="bg-surface-container-high rounded-2xl p-space-md shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Butuh Bantuan Pengisian?
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Jika mengalami kendala pengisian online, pendamping desa kami siap mendampingi langsung.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Pendamping%20Desa,%20saya%20butuh%20bantuan%20pendaftaran"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center justify-center gap-2 px-space-md py-2.5 bg-surface-container-lowest text-primary hover:bg-surface rounded-xl font-label-md font-bold shadow-sm transition-all text-center"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Pendamping (0812-3456-7890)</span>
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* ================= REVIEW MODAL ================= */}
      {showReviewModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-margin"
          onClick={() => setShowReviewModal(false)}
          onKeyDown={(e) => e.key === 'Escape' && setShowReviewModal(false)}
        >
          <div
            className="bg-surface-container-lowest max-w-xl w-full rounded-3xl p-space-lg shadow-2xl border border-outline-variant/30 max-h-[90vh] overflow-y-auto flex flex-col gap-space-md animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-xs">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Tinjau Ulang Data Pendaftaran
              </h3>
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container"
              >
                ✕
              </button>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Pastikan seluruh data yang tercantum sudah benar sebelum mengirimkan permohonan ke pengurus koperasi.
            </p>

            <div className="flex flex-col gap-space-xs text-body-sm text-on-surface">
              <div className="bg-surface p-space-sm rounded-xl flex flex-col gap-1">
                <span className="font-label-sm text-primary font-bold">1. Identitas Pemohon</span>
                <div>Nama: <strong>{formData.fullName}</strong></div>
                <div>NIK: <strong className="font-mono">{formData.nik}</strong></div>
                <div>Lahir: {formData.birthPlace}, {formData.birthDate} ({formData.gender})</div>
                <div>Profesi: {formData.profession}</div>
                <div>WhatsApp: {formData.whatsapp}</div>
              </div>

              <div className="bg-surface p-space-sm rounded-xl flex flex-col gap-1">
                <span className="font-label-sm text-primary font-bold">2. Alamat & Usaha</span>
                <div>Alamat: {formData.address}, RT/RW {formData.rtRw}</div>
                <div>Wilayah: {formData.village}, {formData.subdistrict}, {formData.regency}</div>
                <div>Usaha: {formData.hasBusiness === 'ya' ? `${formData.businessName} (${formData.businessType || 'Aktif'})` : 'Belum Memiliki Usaha'}</div>
              </div>

              <div className="bg-surface p-space-sm rounded-xl flex flex-col gap-1">
                <span className="font-label-sm text-primary font-bold">3. Simpanan & Pembayaran</span>
                <div>Simpanan Pokok: <strong>Rp 100.000</strong></div>
                <div>Simpanan Wajib (Bln 1): <strong>Rp 25.000</strong></div>
                <div>Simpanan Sukarela Awal: <strong>{formatRupiah(formData.simpananSukarela)}</strong></div>
                <div className="pt-1 border-t border-outline-variant/20 font-bold text-emerald-700 flex justify-between">
                  <span>Total Setoran Awal:</span>
                  <span className="font-mono">{formatRupiah(totalPayment)}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-space-sm pt-space-xs border-t border-outline-variant/20">
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="px-space-md py-2.5 rounded-full bg-surface-container text-on-surface font-label-md font-bold"
              >
                Ubah Data
              </button>
              <button
                type="button"
                onClick={handleSubmitRegistration}
                className="px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg font-bold shadow-md hover:bg-primary"
              >
                Ya, Kirim Pendaftaran Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
