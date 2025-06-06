'use client';

import { useEffect, useState, useRef } from 'react';
import LogoRevealLoader from './Loader';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    const handleReady = () => {
      if (document.readyState === 'complete' && !isLoadedRef.current) {
        // Solo si no está ya marcado como cargado
        isLoadedRef.current = true;

        // Asegura mínimo 400ms visibles
        timeoutRef.current = setTimeout(() => {
          setIsLoading(false);
        }, 400);
      }
    };

    // Si ya está cargado, disparar handleReady directamente
    if (document.readyState === 'complete') {
      handleReady();
    } else {
      document.addEventListener('readystatechange', handleReady);
    }

    // Cleanup
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.removeEventListener('readystatechange', handleReady);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="bg-thedooragency-negro fixed inset-0 z-50 flex items-center justify-center">
      <LogoRevealLoader />
    </div>
  );
}
