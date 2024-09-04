"use client";

import { Facebook, Instagram, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [nav, setNav] = useState(false);

  function handleCloseMobileMenu() {
    setNav(false);
  }

  function handleOpenMobileMenu() {
    setNav(!nav);
  }

  return (
    <div className="h-screen w-full py-8 bg-hero-bg text-white">
      <div className="px-3 md:px-10 flex gap-x-24 self-start">
        <div className="flex items-center gap-x-4">
          <h1 className="text-2xl poppins cursor-default">
            INCLUSIVO <span className="italic text-blue500">SOLUÇÕES</span>
          </h1>
        </div>

        <div className="hidden items-center gap-16 md:flex">
          <Link href="#">Início</Link>
          <Link href="#">Gestão de mídias sociais</Link>
          <Link href="#">Consultorias comerciais</Link>
          <Link href="#">Desenvolvimento de apps</Link>
        </div>

        <div
          onClick={handleOpenMobileMenu}
          className="cursor-pointer pr-4 z-10 lg:hidden"
        >
          {nav ? (
            <X size={30} className="text-white" />
          ) : (
            <Menu size={30} className="text-white" />
          )}
        </div>
      </div>

      {nav && (
        <ul
          className={`fixed top-0 left-0 w-full max-w-md h-screen bg-hero-bg text-gray-500 text-2xl transform transition-all duration-700 ease-in-out gap-6 ${
            nav
              ? "translate-x-0 opacity-100 duration-700"
              : "translate-x-full opacity-0"
          } flex flex-col justify-center items-center`}
        >
          <li>
            <Link href="#">Início</Link>
          </li>
          <li>
            <Link href="#">Gestão de mídias sociais</Link>
          </li>
          <li>
            <Link href="#">Consultorias comerciais</Link>
          </li>
          <li>
            <Link href="#">Desenvolvimento de apps</Link>
          </li>
          <li className="flex gap-4 mt-6">
            <Link
              href="https://api.whatsapp.com/send/?phone=5513996555013&text&type=phone_number&app_absent=0"
              target="_blank"
              aria-label="whatsapp"
              className="gap-3 mr-2 hover:opacity-80 bg-white rounded-full size-9 items-center justify-center flex"
            >
              <Image
                alt="whatsapp"
                src={"./whatsapp.svg"}
                width={22}
                height={22}
              />
            </Link>
            <Link
              href="https://m.facebook.com/eaejuniorandrade/"
              target="_blank"
              aria-label="facebook"
              className="gap-3 mr-2 hover:opacity-80 bg-white rounded-full size-9 items-center justify-center flex text-blue500"
            >
              <Facebook size={22} />
            </Link>
            <Link
              href="https://www.instagram.com/engjrandrade?igsh=MXFrcWl1NnBzbWE5cg%3D%3D"
              target="_blank"
              aria-label="instagram"
              className="gap-3 hover:opacity-80 bg-white rounded-full size-9 items-center justify-center flex text-blue500"
            >
              <Instagram size={22} />
            </Link>
          </li>
        </ul>
      )}

      <div className="flex flex-col self-center h-full items-center justify-center gap-8 px-2">
        <h2 className="text-4xl md:text-7xl text-center font-semibold max-w-[55rem]">
          Transformando sonhos em lucros
        </h2>
        <p className="text-center px-4 md:px-20 md:text-lg font-semibold">
          Desde os 7 anos, as vendas são a minha verdadeira paixão. Hoje, aos 36
          anos, essa paixão se transformou em uma carreira sólida e dedicada a
          impulsionar negócios. Com 14 anos de experiência no setor de álbuns de
          formatura, impactei mais de 12 mil famílias em todo o Brasil. Minha
          jornada me ensinou a entender profundamente os clientes e a oferecer
          soluções que realmente fazem a diferença.
        </p>
      </div>
    </div>
  );
}
