import React from 'react';

import Link from 'next/link';
type Props = {
  titulo: string;
  descripcion: string;
  id?: string;
};

export const CardService = ({ titulo, descripcion }: Props) => {
  return (
    <Link
      href="/servicios#nuestros-servicios"
      className="border-thedooragency-negro group hover:border-thedooragency-azul flex flex-col space-y-2 border-b pb-6 transition-colors duration-300 ease-in-out"
    >
      <h3 className="text-thedooragency-negro group-hover:text-thedooragency-azul text-base font-bold transition-colors duration-300 ease-in-out">
        {titulo}
      </h3>
      <div className="flex items-center justify-between">
        <p className="text-thedooragency-negro group-hover:text-thedooragency-azul max-w-[260px] text-sm transition-colors duration-300 ease-in-out sm:max-w-[450px] md:max-w-[300px] lg:max-w-[400px]">
          {descripcion}
        </p>
        <div className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 ease-in-out group-hover:rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M20 0C8.95406 0 0 8.95406 0 20C0 31.0459 8.95406 40 20 40C31.0459 40 40 31.0459 40 20C40 8.95406 31.0459 0 20 0ZM29.1166 12.0085C28.7562 14.2346 28.3929 16.4594 28.024 18.6827C27.8869 19.5124 27.3753 19.9505 26.6982 19.8389C26.0283 19.7286 25.6905 19.1477 25.8233 18.311C26.0099 17.1421 26.2049 15.976 26.3958 14.8071C26.3534 14.7859 26.311 14.7647 26.2686 14.7449L25.8078 15.2057C21.2057 19.8078 16.6049 24.4099 12.0014 29.0106C11.3032 29.7074 10.4254 29.6085 10.0777 28.8014C9.90389 28.3958 9.94629 28.0141 10.2403 27.6777C10.3731 27.5265 10.5187 27.3866 10.6615 27.2452C15.1774 22.7279 19.6947 18.212 24.2106 13.6947L24.6714 13.2339C24.5272 13.0163 24.3562 13.1223 24.2148 13.135C23.1322 13.2353 22.0509 13.3512 20.9682 13.4516C20.1837 13.5251 19.6466 13.1279 19.5887 12.4481C19.5322 11.8035 19.9816 11.3159 20.735 11.2382C23.0784 10.9979 25.4233 10.7604 27.7696 10.5329C28.7534 10.4382 29.2763 11.0163 29.1166 12.0085Z"
              className="fill-thedooragency-negro group-hover:fill-thedooragency-azul transition-colors duration-300"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};
