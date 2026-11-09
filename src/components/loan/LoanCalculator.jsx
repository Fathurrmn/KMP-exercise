import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ShieldCheck, Headphones } from 'lucide-react';

const LOAN_TYPES = [
  { id: 'mikro', label: 'Usaha Mikro', rate: 0.008, rateLabel: '0.8%/bln' },
  { id: 'tani', label: 'Musim Tani', rate: 0.007, rateLabel: '0.7%/bln' },
  { id: 'pendidikan', label: 'Pendidikan', rate: 0.006, rateLabel: '0.6%/bln' },
];

const TENORS = [6, 12, 18, 24, 36];

export default function LoanCalculator() {
  const [selectedType, setSelectedType] = useState(LOAN_TYPES[0]);
  const [amount, setAmount] = useState(10000000);
  const [tenor, setTenor] = useState(12);

  const monthlyPrincipal = amount / tenor;
  const monthlyInterest = amount * selectedType.rate;
  const monthlyInstallment = Math.round(monthlyPrincipal + monthlyInterest);
  const totalInterest = Math.round(monthlyInterest * tenor);
  const totalRepayment = amount + totalInterest;
  const estimatedShu = Math.round(totalInterest * 0.25);

  const formatRupiah = (val) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  return (
    <div className="bg-surface-container-lowest rounded-3xl p-space-lg lg:p-space-xl shadow-lg border border-outline-variant/30">
      {/* Header Kalkulator */}
      <div className="flex flex-col max-w-2xl gap-space-xs mb-space-lg">
        <div className="inline-flex items-center gap-space-xs text-primary font-label-md">
          <Calculator className="w-5 h-5 text-primary" />
          <span className="uppercase tracking-wider font-bold">Kalkulator Transparan</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
          Kalkulator Simulasi Pinjaman Modal Usaha
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Hitung estimasi angsuran bulanan Anda dengan bunga transparan, tanpa biaya administrasi terselubung dan bagi hasil SHU yang kembali ke kantong Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        {/* Left Column: Form Kontrol (7 Kolom) */}
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          {/* Pilihan Tujuan Pembiayaan */}
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-label-md text-on-surface font-semibold">
              Tujuan Pembiayaan:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {LOAN_TYPES.map((type) => {
                const isActive = selectedType.id === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-2.5 rounded-xl text-center font-label-md transition-all ${
                      isActive
                        ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    <div>{type.label}</div>
                    <span className={`text-[10px] font-normal ${isActive ? 'opacity-90' : 'opacity-75'}`}>
                      Bunga {type.rateLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Slider Plafon Pinjaman */}
          <div className="flex flex-col gap-space-xs bg-surface p-space-md rounded-2xl border border-outline-variant/20">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                Plafon Pinjaman
              </span>
              <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
                {formatRupiah(amount)}
              </span>
            </div>
            <input
              type="range"
              id="loan-amount-slider"
              aria-label="Plafon Pinjaman"
              aria-valuetext={formatRupiah(amount)}
              min={1000000}
              max={50000000}
              step={500000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container"
            />
            <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant font-medium">
              <span>Rp 1.000.000</span>
              <span>Maks. Rp 50.000.000</span>
            </div>
          </div>

          {/* Pilihan Tenor */}
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-label-md text-on-surface font-semibold">
              Jangka Waktu Angsuran (Tenor):
            </label>
            <div className="flex flex-wrap gap-2">
              {TENORS.map((t) => {
                const isActive = tenor === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTenor(t)}
                    className={`px-4 py-2 rounded-xl font-label-md transition-all ${
                      isActive
                        ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    {t} Bulan
                  </button>
                );
              })}
            </div>
          </div>

          {/* Catatan Jaminan Gotong Royong */}
          <div className="flex items-start gap-space-xs text-on-surface-variant bg-surface-container/60 p-space-sm rounded-xl border border-outline-variant/20">
            <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <p className="font-body-sm text-body-sm leading-relaxed">
              Pinjaman ini bersumber dari gotong royong tabungan warga. Sisa Hasil Usaha (SHU) atas jasa pinjaman akan dibagikan kembali kepada seluruh anggota pada RAT tahunan.
            </p>
          </div>
        </div>

        {/* Right Column: Live Calculation Box (5 Kolom) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-surface to-red-50/50 p-space-lg rounded-2xl flex flex-col gap-space-md shadow-sm border border-outline-variant/30">
          <div className="flex flex-col gap-1 pb-space-sm border-b border-outline-variant/20">
            <span className="font-label-md text-label-md text-on-surface-variant font-medium">
              Estimasi Angsuran Bulanan:
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display-lg text-display-lg text-primary tracking-tight font-extrabold font-mono">
                {formatRupiah(monthlyInstallment)}
              </span>
              <span className="font-label-md text-label-md text-on-surface-variant">/ bulan</span>
            </div>
          </div>

          {/* Rincian Finansial */}
          <div className="flex flex-col gap-space-xs font-body-md text-body-md">
            <div className="flex justify-between items-center py-1">
              <span className="text-on-surface-variant">Pokok Pinjaman:</span>
              <span className="font-semibold text-on-surface font-mono">{formatRupiah(amount)}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-on-surface-variant">Suku Bunga Koperasi:</span>
              <span className="font-semibold text-on-surface">{(selectedType.rate * 100).toFixed(2)}% / bulan (Flat)</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-on-surface-variant">Total Bunga Berjalan:</span>
              <span className="font-semibold text-on-surface font-mono">{formatRupiah(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-on-surface-variant">Total Nilai Pelunasan:</span>
              <span className="font-bold text-on-surface font-mono">{formatRupiah(totalRepayment)}</span>
            </div>
            <div className="flex justify-between items-center py-2 px-3 bg-emerald-50 rounded-lg text-emerald-800 border border-emerald-200/50">
              <span className="font-label-sm font-medium">Estimasi Dividen SHU Kembali:</span>
              <span className="font-label-md font-bold font-mono">~ {formatRupiah(estimatedShu)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-space-xs pt-space-xs">
            <Link
              to="/daftar-anggota"
              className="w-full py-3.5 bg-primary-container text-on-primary font-label-lg text-label-lg font-bold rounded-xl text-center shadow-md hover:bg-primary transition-all active:scale-95"
            >
              Ajukan Pinjaman Sekarang
            </Link>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Koperasi%20Desa,%20saya%20ingin%20konsultasi%20pinjaman"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium rounded-xl text-center hover:bg-surface-container transition-colors flex items-center justify-center gap-1.5 border border-outline-variant/30"
            >
              <Headphones className="w-4 h-4 text-secondary" />
              <span>Konsultasi Pendampingan Usaha</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

