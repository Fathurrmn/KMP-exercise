import React, { useState } from 'react';
import { TrendingUp, ShoppingBag, Info } from 'lucide-react';
import { formatRupiah } from '../../utils/formatters';

// 12 bulan data perbandingan 2024 vs 2025
const MONTHLY_SHU_DATA = [
  { month: 'Jan', h24: 38, h25: 48, val24: 1100000, val25: 1420500, status: 'realized' },
  { month: 'Feb', h24: 42, h25: 58, val24: 1220000, val25: 1720000, status: 'realized' },
  { month: 'Mar', h24: 45, h25: 60, val24: 1310000, val25: 1780000, status: 'projected' },
  { month: 'Apr', h24: 50, h25: 68, val24: 1450000, val25: 2010000, status: 'projected' },
  { month: 'Mei', h24: 48, h25: 64, val24: 1390000, val25: 1900000, status: 'projected' },
  { month: 'Jun', h24: 55, h25: 74, val24: 1600000, val25: 2190000, status: 'projected' },
  { month: 'Jul', h24: 60, h25: 78, val24: 1740000, val25: 2310000, status: 'projected' },
  { month: 'Agu', h24: 62, h25: 82, val24: 1800000, val25: 2430000, status: 'projected' },
  { month: 'Sep', h24: 58, h25: 85, val24: 1680000, val25: 2520000, status: 'projected' },
  { month: 'Okt', h24: 65, h25: 90, val24: 1890000, val25: 2670000, status: 'projected' },
  { month: 'Nov', h24: 70, h25: 94, val24: 2030000, val25: 2790000, status: 'projected' },
  { month: 'Des', h24: 75, h25: 100, val24: 2180000, val25: 2850000, status: 'projected' },
];

export default function ShuMonthlyChart() {
  const [hoveredMonth, setHoveredMonth] = useState(null);

  return (
    <div className="rounded-xl bg-surface-container-lowest p-space-md lg:p-space-lg shadow-[0_4px_24px_rgba(31,41,55,0.04)] border border-outline-variant/30 flex flex-col gap-space-md">
      {/* Header & Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div className="flex flex-col">
          <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
            Grafik Akumulasi & Proyeksi SHU Bulanan
          </h3>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Perbandingan Realisasi 2024 vs Estimasi Berjalan 2025 (IDR Ribuan)
          </span>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
            <span className="w-3 h-3 rounded bg-surface-container-highest inline-block border border-outline-variant/40" />
            <span>Realisasi 2024</span>
          </div>
          <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-primary font-bold">
            <span className="w-3 h-3 rounded bg-primary inline-block" />
            <span>Proyeksi 2025</span>
          </div>
        </div>
      </div>

      {/* Highlight Metric Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
        <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-sm border border-outline-variant/20">
          <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Rata-rata Akumulasi SHU</span>
            <span className="font-label-lg text-label-lg font-bold text-on-surface">Rp 237.500 / Bulan</span>
          </div>
        </div>
        <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-sm border border-outline-variant/20">
          <div className="w-9 h-9 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Kontribusi Tertinggi Anggota</span>
            <span className="font-label-lg text-label-lg font-bold text-on-surface">Pupuk & Sembako Toko (42%)</span>
          </div>
        </div>
      </div>

      {/* Interactive Bar Chart Visual (Stitch 1:1) */}
      <div className="w-full pt-space-md pb-space-xs flex flex-col gap-space-xs relative">
        {/* Floating Tooltip when hovered */}
        {hoveredMonth && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-on-surface text-surface text-xs rounded-lg px-3 py-1.5 shadow-lg flex items-center gap-3 z-20 pointer-events-none transition-all">
            <span className="font-bold text-primary-fixed">{hoveredMonth.month}</span>
            <span>2024: {formatRupiah(hoveredMonth.val24)}</span>
            <span>2025 ({hoveredMonth.status === 'realized' ? 'Berjalan' : 'Proyeksi'}): <strong className="text-secondary-fixed">{formatRupiah(hoveredMonth.val25)}</strong></span>
          </div>
        )}

        {/* Chart Bars */}
        <div className="h-52 w-full flex items-end justify-between gap-1 sm:gap-2.5 px-2 pt-6 border-b border-outline-variant/30">
          {MONTHLY_SHU_DATA.map((item) => (
            <div
              key={item.month}
              onMouseEnter={() => setHoveredMonth(item)}
              onMouseLeave={() => setHoveredMonth(null)}
              className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer relative"
            >
              <div className="flex items-end gap-1 w-full justify-center h-full">
                {/* 2024 Bar */}
                <div
                  className="w-2 sm:w-3.5 bg-surface-container-highest rounded-t-sm transition-all duration-300 group-hover:opacity-80"
                  style={{ height: `${item.h24}%` }}
                  title={`${item.month} 2024: ${formatRupiah(item.val24)}`}
                />
                {/* 2025 Bar */}
                <div
                  className={`w-2 sm:w-3.5 rounded-t-sm transition-all duration-300 group-hover:scale-y-105 ${
                    item.status === 'realized'
                      ? 'bg-primary'
                      : 'bg-primary/30 border border-dashed border-primary'
                  }`}
                  style={{ height: `${item.h25}%` }}
                  title={`${item.month} 2025: ${formatRupiah(item.val25)}`}
                />
              </div>
              <span
                className={`font-label-sm text-xs transition-colors ${
                  item.month === 'Feb'
                    ? 'text-primary font-bold'
                    : 'text-on-surface-variant group-hover:text-primary'
                }`}
              >
                {item.month}
              </span>
            </div>
          ))}
        </div>

        {/* Legend notes */}
        <div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-2 px-1">
          <span className="flex items-center gap-1">
            <Info className="w-3.5 h-3.5 text-secondary" />
            Batang garis putus-putus menunjukkan proyeksi kalkulasi hingga tutup buku Desember 2025.
          </span>
          <span className="font-semibold text-primary">Tahun Berjalan: Feb 2025</span>
        </div>
      </div>
    </div>
  );
}

