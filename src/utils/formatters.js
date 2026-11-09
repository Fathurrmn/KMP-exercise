/**
 * Utility formatter for Rupiah currency using Intl.NumberFormat id-ID
 * @param {number|string} val
 * @returns {string} e.g. "Rp 18.450.000"
 */
export const formatRupiah = (val) => {
  const num = Number(val);
  if (isNaN(num)) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(num)
    .replace(/\s+/g, ' ');
};

/**
 * Utility formatter for dates in Indonesian
 * @param {string|Date} dateStr
 * @returns {string} e.g. "24 Feb 2025"
 */
export const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

