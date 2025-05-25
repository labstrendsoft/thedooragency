'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Home, Briefcase, Users, Phone, FolderKanban } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@shadcnui/sheet';
import { Button } from '@shadcnui/button';
import logoTrendBlack from '@public/logoBlack.webp';
import Image from 'next/image';

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
              <SheetDescription className="hidden"></SheetDescription>
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
                  href="/servicios"
                  className="hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <FolderKanban className="h-5 w-5" />
                  <span className="text-sm font-medium">Lo que Hacemos</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/trabajos"
                  className="hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <Briefcase className="h-5 w-5" />
                  <span className="text-sm font-medium">Trabajos</span>
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
