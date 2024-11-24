"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/app/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/ui/sheet";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Inicio", visibleAt: "lg" },
    { href: "/quienes-somos", label: "¿Quiénes Somos?", visibleAt: "lg" },
    { href: "/educacion-prevencion", label: "Educación y Prevención", visibleAt: "xl" },
    { href: "/programas-clinicos", label: "Programas Clínicos", visibleAt: "2xl" },
    { href: "/cij", label: "CIJ", visibleAt: "lg" },
    { href: "/lgbt", label: "LGBT+", visibleAt: "xl" },
    { href: "/contacto", label: "Contacto", visibleAt: "lg" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#00D4E7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/codiscun.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </Link>

          {/* Navegación */}
          <nav className="hidden lg:flex flex-grow justify-center">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center justify-center text-white hover:text-gray-200 px-4 py-2 rounded-md text-sm sm:text-base font-semibold ${
                    item.visibleAt === "lg" ? "lg:inline hidden" : ""
                  } ${
                    item.visibleAt === "xl" ? "xl:inline hidden" : ""
                  } ${item.visibleAt === "2xl" ? "2xl:inline hidden" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Botones */}
          <div className="flex items-center space-x-5">
            {/* Botón "Donar" */}
            <Link
              href="/donar"
              className="group flex flex-col items-center transition-transform duration-300 hover:scale-110 lg:inline-flex hidden"
            >
              <Image
                src="/images/Donarblanco.png"
                alt="Donar"
                width={40}
                height={40}
                className="group-hover:hidden"
              />
              <Image
                src="/images/DonarRojo.png"
                alt="Donar Hover"
                width={40}
                height={40}
                className="hidden group-hover:block"
              />
              <span className="mt-2 text-white text-sm font-semibold group-hover:text-red-500 transition-colors duration-300">
                Donar
              </span>
            </Link>

            {/* Menú Hamburguesa */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white"
                >
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-[#00D4E7] text-white"
              >
                <nav className="flex flex-col space-y-5 mt-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-white hover:text-gray-200 px-4 py-3 rounded-md text-lg font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  {/* Botón "Donar" en el menú lateral */}
                  <Link
                    href="/donar"
                    className="group flex flex-col items-center transition-transform duration-300 hover:scale-110"
                  >
                    <Image
                      src="/images/Donarblanco.png"
                      alt="Donar"
                      width={40}
                      height={40}
                      className="group-hover:hidden"
                    />
                    <Image
                      src="/images/DonarRojo.png"
                      alt="Donar Hover"
                      width={40}
                      height={40}
                      className="hidden group-hover:block"
                    />
                    <span className="mt-2 text-white text-sm font-semibold group-hover:text-red-500 transition-colors duration-300">
                      Donar
                    </span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
