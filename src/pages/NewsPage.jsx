import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  FileDown,
  CalendarCheck,
  Send,
  AlertCircle,
  Tag,
  CheckCircle2,
  X,
  Sparkles,
} from 'lucide-react';
import IMAGES from '../constants/images';
import KawungPattern from '../components/common/KawungPattern';
import usePageMetadata from '../hooks/usePageMetadata';
import {
  NEWS_CATEGORIES,
  FEATURED_NEWS,
  NEWS_ARTICLES,
  UPCOMING_AGENDAS,
  PUBLIC_DOCUMENTS,
} from '../data/news';

export default function NewsPage() {
  usePageMetadata(
    'Warta & Informasi Terkini',
    'Pusat informasi transparansi kegiatan, rilis hasil usaha gotong royong, edukasi kemandirian pangan, serta agenda berkala musyawarah desa.'
  );

  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadModalDoc, setDownloadModalDoc] = useState(null);
  const [newsletterPhone, setNewsletterPhone] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [activeArticleModal, setActiveArticleModal] = useState(null);

  // Combined Category Filter + Live Search Query
  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((article) => {
      const matchCategory =
        selectedCategory === 'Semua' || article.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterPhone.trim()) return;
    setNewsletterSubscribed(true);
  };

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface py-space-xl">
        <KawungPattern className="absolute -top-16 -right-16 w-96 h-96 opacity-[0.03] text-primary" />
        <div className="max-w-7xl mx-auto px-margin relative z-10 flex flex-col gap-space-xs text-center items-center">
          <span className="font-label-md text-label-md text-primary font-bold tracking-wider uppercase bg-primary-fixed/40 px-3 py-1 rounded-full border border-primary/10">
            Pusat Informasi & Transparansi
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg font-extrabold text-on-surface tracking-tight max-w-3xl">
            Warta & Informasi Terkini Koperasi Desa Merah Putih
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Ikuti dinamika kegiatan gotong royong, laporan kinerja permodalan usaha, penyaluran sarana tani, dan agenda musyawarah warga desa.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-margin py-space-md lg:py-space-lg flex flex-col gap-space-xl">
        {/* ================= BERITA UTAMA (FEATURED ARTICLE) ================= */}
        {selectedCategory === 'Semua' && !searchQuery && (
          <section className="w-full">
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-lg border border-outline-variant/30 grid grid-cols-1 lg:grid-cols-12 group hover:shadow-xl transition-all">
              <div className="lg:col-span-7 h-64 sm:h-80 lg:h-auto overflow-hidden relative">
                <img
                  alt={FEATURED_NEWS.title}
                  src={FEATURED_NEWS.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-sm font-bold text-xs shadow-md">
                  Warta Unggulan Terkini
                </span>
              </div>

              <div className="lg:col-span-5 p-space-lg lg:p-space-xl flex flex-col justify-between gap-space-md bg-surface-container-lowest">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="px-2 py-0.5 rounded bg-primary-fixed/30 text-primary font-semibold">
                      {FEATURED_NEWS.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {FEATURED_NEWS.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {FEATURED_NEWS.readTime}
                    </span>
                  </div>

                  <h2 className="font-headline-lg text-headline-md sm:text-headline-lg font-bold text-on-surface tracking-tight leading-snug group-hover:text-primary transition-colors">
                    {FEATURED_NEWS.title}
                  </h2>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {FEATURED_NEWS.summary}
                  </p>
                </div>

                <div className="pt-space-xs border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="font-label-sm text-xs text-on-surface-variant">
                    Penulis: {FEATURED_NEWS.author}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveArticleModal(FEATURED_NEWS)}
                    className="inline-flex items-center gap-1.5 font-label-md text-primary font-bold hover:underline"
                  >
                    <span>Baca Lengkap</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================= SEARCH & CATEGORY FILTER BAR ================= */}
        <section className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {NEWS_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-primary-container text-on-primary shadow-sm'
                      : 'bg-surface text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-on-surface-variant absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari berita atau warta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-surface border border-outline-variant/40 text-on-surface text-body-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </section>

        {/* ================= MAIN CONTENT 2-COLUMN (GRID 8 COLS + SIDEBAR 4 COLS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* LEFT: ARTICLES GRID (8 COLS) */}
          <div className="lg:col-span-8 flex flex-col gap-space-md">
            {/* Results count label */}
            <div className="flex items-center justify-between text-body-sm text-on-surface-variant px-1">
              <span>
                Menampilkan <strong>{filteredArticles.length}</strong> artikel{' '}
                {selectedCategory !== 'Semua' && `dalam kategori "${selectedCategory}"`}
                {searchQuery && ` untuk pencarian "${searchQuery}"`}
              </span>
              {(selectedCategory !== 'Semua' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Semua');
                    setSearchQuery('');
                  }}
                  className="text-xs font-bold text-primary hover:underline"
                >
                  Reset Filter
                </button>
              )}
            </div>

            {/* Articles List / Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30 group"
                  >
                    <div>
                      <div className="h-44 w-full overflow-hidden relative">
                        <img
                          alt={article.title}
                          src={article.image}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary-container text-on-primary text-[11px] font-bold shadow-sm">
                          {article.category}
                        </span>
                      </div>
                      <div className="p-space-md flex flex-col gap-space-xs">
                        <div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            {article.date}
                          </span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="font-headline-sm text-sm sm:text-base font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {article.title}
                        </h3>
                        <p className="font-body-sm text-xs text-on-surface-variant line-clamp-3 leading-relaxed mt-1">
                          {article.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-space-md pt-0 border-t border-outline-variant/20 flex items-center justify-between text-xs">
                      <span className="text-on-surface-variant text-[11px] truncate max-w-[140px]">
                        {article.author}
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveArticleModal(article)}
                        className="font-bold text-primary hover:underline flex items-center gap-1"
                      >
                        <span>Baca Warta</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="bg-surface-container-lowest p-space-xl rounded-2xl border border-outline-variant/30 text-center flex flex-col items-center gap-space-sm my-4">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                  <Search className="w-8 h-8 opacity-40" />
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Tidak Ada Berita Ditemukan
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  Maaf, tidak ada artikel yang cocok dengan kata kunci "<strong>{searchQuery}</strong>" dalam kategori {selectedCategory}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Semua');
                    setSearchQuery('');
                  }}
                  className="mt-2 px-space-md py-2.5 rounded-full bg-primary-container text-on-primary font-label-md font-bold shadow-sm"
                >
                  Tampilkan Semua Warta
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: SIDEBAR (4 COLS) */}
          <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
            {/* AGENDA KEGIATAN DESA */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs pb-space-xs border-b border-outline-variant/20">
                <CalendarCheck className="w-5 h-5 text-secondary" />
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Agenda & Kegiatan Mendatang
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {UPCOMING_AGENDAS.map((agenda) => (
                  <div
                    key={agenda.title}
                    className="p-3 rounded-xl bg-surface border border-outline-variant/20 flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-primary flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {agenda.date} ({agenda.time})
                      </span>
                      <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold">
                        {agenda.tag}
                      </span>
                    </div>
                    <span className="font-label-md text-xs font-bold text-on-surface leading-snug">
                      {agenda.title}
                    </span>
                    <span className="text-[11px] text-on-surface-variant">
                      📍 {agenda.location}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* UNDUH DOKUMEN PUBLIK */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs pb-space-xs border-b border-outline-variant/20">
                <FileDown className="w-5 h-5 text-primary" />
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Unduh Dokumen Publik
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                {PUBLIC_DOCUMENTS.map((doc) => (
                  <div
                    key={doc.title}
                    className="p-3 rounded-xl bg-surface border border-outline-variant/20 flex items-center justify-between gap-2 hover:bg-surface-container-low transition-colors"
                  >
                    <div className="flex flex-col">
                      <span className="font-label-md text-xs font-bold text-on-surface leading-tight">
                        {doc.title}
                      </span>
                      <span className="text-[10px] text-on-surface-variant font-mono mt-0.5">
                        {doc.size} • Tahun {doc.year}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setDownloadModalDoc(doc.title)}
                      className="p-2 rounded-lg bg-surface-container text-primary hover:bg-primary-container hover:text-on-primary transition-colors shrink-0"
                      title="Unduh Berkas PDF"
                    >
                      <FileDown className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* NEWSLETTER WHATSAPP */}
            <div className="bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-2xl p-space-md shadow-md flex flex-col gap-space-xs">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-primary-container font-bold">
                Warta Langsung ke HP Anda
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-white">
                Berlangganan Kabar Desa via WA
              </h3>
              <p className="font-body-sm text-xs text-on-primary/90 leading-relaxed">
                Dapatkan notifikasi jadwal pembagian pupuk subsidi dan edaran SHU tanpa tertinggal.
              </p>

              {newsletterSubscribed ? (
                <div className="mt-2 p-3 rounded-xl bg-white/20 backdrop-blur-md flex items-center gap-2 text-xs font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Terima kasih! Nomor Anda telah terdaftar.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="mt-2 flex flex-col gap-2">
                  <input
                    type="tel"
                    placeholder="Nomor WhatsApp (misal: 0812...)"
                    value={newsletterPhone}
                    onChange={(e) => setNewsletterPhone(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white text-on-surface text-xs placeholder:text-on-surface-variant/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl bg-surface-container-lowest text-primary hover:bg-surface-container font-label-md text-xs font-bold shadow transition-all active:scale-95 flex items-center justify-center gap-1"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Daftar Notifikasi WA</span>
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* ================= MODAL UNDUH DOKUMEN CONTOH ================= */}
      {downloadModalDoc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-margin"
          onClick={() => setDownloadModalDoc(null)}
          onKeyDown={(e) => e.key === 'Escape' && setDownloadModalDoc(null)}
        >
          <div
            className="bg-surface-container-lowest max-w-md w-full rounded-3xl p-space-lg shadow-2xl border border-outline-variant/30 text-center flex flex-col items-center gap-space-md animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-container/10 text-primary flex items-center justify-center">
              <FileDown className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-xs text-primary font-bold uppercase tracking-wider">
                Dokumen Publik Resmi
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                {downloadModalDoc}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Dokumen contoh, belum tersedia dalam versi unduhan publik online. Dokumen fisik sah dapat diperoleh langsung di kantor sekretariat Balai Koperasi Desa Merah Putih.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDownloadModalDoc(null)}
              className="w-full py-3 rounded-full bg-primary-container text-on-primary font-label-md font-bold shadow-md hover:bg-primary transition-all active:scale-95"
            >
              Tutup Penjelasan
            </button>
          </div>
        </div>
      )}

      {/* ================= MODAL BACA WARTA LENGKAP ================= */}
      {activeArticleModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-margin"
          onClick={() => setActiveArticleModal(null)}
          onKeyDown={(e) => e.key === 'Escape' && setActiveArticleModal(null)}
        >
          <div
            className="bg-surface-container-lowest max-w-2xl w-full rounded-3xl p-space-lg shadow-2xl border border-outline-variant/30 max-h-[90vh] overflow-y-auto flex flex-col gap-space-md animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary text-xs font-bold">
                {activeArticleModal.category}
              </span>
              <button
                type="button"
                onClick={() => setActiveArticleModal(null)}
                className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-56 w-full rounded-2xl overflow-hidden">
              <img
                alt={activeArticleModal.title}
                src={activeArticleModal.image}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span>{activeArticleModal.date}</span>
                <span>•</span>
                <span>{activeArticleModal.readTime}</span>
                <span>•</span>
                <span>Oleh: {activeArticleModal.author}</span>
              </div>
              <h2 className="font-headline-lg text-headline-md font-bold text-on-surface">
                {activeArticleModal.title}
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed pt-2">
                {activeArticleModal.content || activeArticleModal.summary}
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Koperasi Desa Merah Putih berkomitmen menjaga transparansi informasi dan penyampaian warta berkala bagi seluruh anggota kelompok tani dan pelaku usaha binaan di lingkungan desa.
              </p>
            </div>

            <div className="pt-space-xs border-t border-outline-variant/20 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveArticleModal(null)}
                className="px-space-md py-2 rounded-full bg-primary-container text-on-primary font-label-md font-bold"
              >
                Tutup Warta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
