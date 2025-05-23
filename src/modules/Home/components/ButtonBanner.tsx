import Link from 'next/link';
import React from 'react';

export const ButtonBanner = () => {
  return (
    <Link
      href="#"
      className="rounded-full border border-white px-6 py-4 text-sm text-white md:text-base"
    >
      Tenemos lo que necesitas
    </Link>
  );
};
