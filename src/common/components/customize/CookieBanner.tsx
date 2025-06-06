'use client';
//ejemplo de banner de cookies, no se esta usando
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Aquí puedes inicializar Analytics o reCAPTCHA si quieres
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full flex-col items-center justify-between bg-black p-4 text-white sm:flex-row">
      <p className="text-sm">
        Este sitio usa cookies para mejorar tu experiencia. Puedes aceptar o rechazar su uso.
      </p>
      <div className="mt-2 flex gap-2 sm:mt-0">
        <button
          className="rounded bg-green-600 px-4 py-1 hover:bg-green-700"
          onClick={handleAccept}
        >
          Aceptar
        </button>
        <button className="rounded bg-red-600 px-4 py-1 hover:bg-red-700" onClick={handleReject}>
          Rechazar
        </button>
      </div>
    </div>
  );
}
