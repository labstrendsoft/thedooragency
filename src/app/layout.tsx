import type { Metadata } from 'next';
import { Geist, Geist_Mono, Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '../layout/header/Header';
import Footer from '../layout/footer/Footer';
import ScrollToTop from '@/common/components/customize/ScrollToTop';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
const montserrat = Montserrat({
  weight: ['400', '500', '600', '800', '900'], // Definir los pesos que necesitas
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} font-montserrat min-h-[100vh] antialiased`}
      >
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
