'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Home, Briefcase, Users, Phone, Mail } from 'lucide-react';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@shadcnui/sheet';
import { Button } from '@shadcnui/button';
import { Separator } from '@shadcnui/separator';
import logoTrendBlack from '@public/logoBlack.webp';
import Image from 'next/image';
import { socialLinks } from '@/common/data/social';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="bg-transparent hover:bg-transparent md:hidden"
        >
          <Menu className="size-8 text-white" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] p-0 sm:w-[350px]">
        <div className="flex h-full flex-col">
          <SheetHeader className="border-b p-6 text-left">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-bold">
                <Image
                  src={logoTrendBlack}
                  alt="logo de trendacademy"
                  className="h-auto w-[80px] object-contain will-change-transform"
                />
              </SheetTitle>
            </div>
          </SheetHeader>

          <nav className="flex-1 overflow-auto px-6 py-6">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <Home className="h-5 w-5" />
                  <span className="text-sm font-medium">Inicio</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/trabajos/todos"
                  className="hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <Briefcase className="h-5 w-5" />
                  <span className="text-sm font-medium">Trabajos</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <Users className="h-5 w-5" />
                  <span className="text-sm font-medium">Sobre Nosotros</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-sm font-medium">Contacto</span>
                </Link>
              </li>
            </ul>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h3 className="text-muted-foreground text-sm font-semibold">Contáctanos</h3>
              <div className="space-y-2">
                <a
                  href="tel:+123456789"
                  className="flex items-center gap-3 p-2 text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a
                  href="mailto:info@agencia.com"
                  className="flex items-center gap-3 p-2 text-sm transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@agencia.com</span>
                </a>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="bg-thedooragency-negro flex items-center rounded-full p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    className="h-[16px] w-[16px] object-contain transition-opacity hover:opacity-80"
                  />
                </Link>
              ))}
            </div>
          </nav>

          <div className="border-t p-6">
            <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
              <span>Hablar por WhatsApp</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
