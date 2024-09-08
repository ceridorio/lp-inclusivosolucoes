"use client";

import { Rocket } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { HeaderMobile } from "./HeaderMobile";

interface Props {
  title?: string;
  description?: string;
  className?: string;
  hasButtons?: boolean;
  hasToggle?: boolean;
}

export function Header({
  title,
  description,
  className,
  hasButtons = false,
  hasToggle = false,
}: Props) {
  return (
    <div
      className={twMerge([
        "h-screen w-full py-8 bg-no-repeat bg-cover text-white",
        className,
      ])}
    >
      <div className="px-3 md:px-10 flex gap-x-24 self-start">
        <div className="flex items-center gap-x-4">
          <h1 className="text-2xl poppins cursor-default">
            INCLUSIVO <span className="italic text-blue500">SOLUÇÕES</span>
          </h1>
        </div>

        <div className="hidden items-center gap-16 md:flex">
          <Link href="#">Início</Link>
          <Link href="/social-media">Gestão de mídias sociais</Link>
          <Link href="#">Consultorias comerciais</Link>
          <Link href="#">Desenvolvimento de apps</Link>
        </div>

        <HeaderMobile />
      </div>

      <div className="flex flex-col self-center h-full items-center justify-center gap-8 px-2">
        {hasToggle && (
          <div className="flex items-center gap-4 bg-white text-blue500 p-2 rounded-full px-4 font-semibold">
            <Rocket />
            Conecte-se ao futuro
          </div>
        )}

        <h2 className="text-4xl md:text-7xl text-center font-semibold max-w-[55rem]">
          {title}
        </h2>
        <p className="text-center px-4 md:px-20 md:text-lg font-semibold">
          {description}
        </p>

        {hasButtons && (
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="bg-blue500 rounded-full w-36 h-12 items-center justify-center flex text-sm hover:scale-105 transition-all ease-in"
            >
              Saiba mais
            </Link>
            <Link
              href="#"
              className="bg-[#001727] rounded-full h-12 w-36 items-center justify-center flex text-sm hover:scale-105 transition-all ease-in"
            >
              Nossos serviços
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
