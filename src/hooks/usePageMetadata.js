import { useEffect } from 'react';

export function usePageMetadata(title, description) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Koperasi Desa Merah Putih`;
    }
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
  }, [title, description]);
}

export default usePageMetadata;

