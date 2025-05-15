import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/common/data/social';
// import logoTrend from '@public/logoTheDoor.webp';

export default function Footer() {
  return (
    <footer className="bg-thedooragency-negro border-t border-gray-700 px-6 pt-6 pb-6 text-[#FFFFFF]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-10 md:flex-row">
        {/* <Image
          src={logoTrend}
          alt="logo de trendacademy"
          className="h-auto w-[80px] object-contain will-change-transform"
        /> */}
        <span className="text-xs"> © 2025 Thedooragency</span>

        <div className="flex flex-col items-center gap-2 text-xs md:flex-row md:gap-4 lg:gap-8 lg:text-sm">
          <Link href="/" className="hover:text-gray-300">
            Política de Cookies
          </Link>
          <Link href="/nosotros" className="hover:text-gray-300">
            Privacidad
          </Link>
          <Link href="/contacto" className="hover:text-gray-300">
            Términos y Condiciones{' '}
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  className="h-[20px] w-[20px] object-contain transition-opacity hover:opacity-80"
                />
              </Link>
            ))}
          </div>
          <span className="text-xs"> Contacta con Nosotros</span>
        </div>
      </div>
    </footer>
  );
}
