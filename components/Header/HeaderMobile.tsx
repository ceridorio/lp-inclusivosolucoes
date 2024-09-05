"use client";

import { Facebook, Instagram, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function HeaderMobile() {
  const [nav, setNav] = useState(false);

  function handleCloseMobileMenu() {
    setNav(false);
  }

  function handleOpenMobileMenu() {
    setNav(!nav);
  }

  return (
    <>
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

      {nav && (
        <ul
          className={`fixed top-0 left-0 w-screen h-screen bg-hero-bg text-gray-500 text-2xl transform transition-all duration-700 ease-in-out gap-6 ${
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
    </>
  );
}
