"use client";

import { Rocket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <div
      className={twMerge([
        "h-screen w-full py-8 bg-no-repeat bg-cover text-white",
        className,
      ])}
    >
      <div className="px-3 flex w-full items-center w-full justify-between">
        <div className="flex items-center gap-x-4">
          <h1 className="text-2xl poppins cursor-default">
            INCLUSIVO <span className="italic text-blue500">SOLUÇÕES</span>
          </h1>
        </div>

        <div className="hidden items-center lg:flex w-full justify-around text-sm container:text-base">
          <Link
            href="/"
            className={twMerge(
              pathname === "/" ? "border-b-2 border-b-blue500" : "",
              "hover:text-blue500"
            )}
          >
            Início
          </Link>
          <Link
            href="/social-media"
            className={twMerge(
              pathname === "/social-media" ? "border-b-2 border-b-blue500" : "",
              "hover:text-blue500"
            )}
          >
            Gestão de mídias sociais
          </Link>
          <Link
            href="/consulting"
            className={twMerge(
              pathname === "/consulting" ? "border-b-2 border-b-blue500" : "",
              "hover:text-blue500"
            )}
          >
            Consultorias comerciais
          </Link>
          <Link
            href="/development"
            className={twMerge(
              pathname === "/development" ? "border-b-2 border-b-blue500" : "",
              "hover:text-blue500"
            )}
          >
            Desenvolvimento de apps
          </Link>
        </div>

        <Link
          href="https://api.whatsapp.com/send/?phone=5511981046535&text=Vim%20pelo%20site%20da%20Inclusivo%20Solu%C3%A7%C3%B5es%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"
          target="_blank"
          aria-label="whatsapp"
          className="hidden lg:flex justify-center items-center bg-blue500 p-2 rounded-3xl text-white font-semibold w-48 text-center hover:scale-105 transition-all ease-in-out"
          >
          Fale conosco
        </Link>

        <HeaderMobile />
      </div>

      <div className="flex flex-col self-center h-full items-center justify-center gap-8 px-2">
        {hasToggle && (
          <div className="flex items-center gap-4 bg-white text-blue500 p-2 rounded-full px-4 font-semibold">
            <Rocket />
            Conecte-se ao futuro
          </div>
        )}

        <h2 className="text-4xl md:text-5xl text-center font-semibold max-w-[55rem]">
          {title}
        </h2>
        <p className="text-center px-4 md:px-20 md:text-lg font-semibold">
          {description}
        </p>

        {hasButtons && (
          <div className="flex items-center gap-4">
            <Link
              href="https://api.whatsapp.com/send/?phone=5511981046535&text&type=phone_number&app_absent=0"
              target="_blank"
              aria-label="whatsapp"
              className="bg-blue500 rounded-full w-36 h-12 items-center justify-center flex text-sm hover:scale-105 transition-all ease-in"
            >
              Saiba mais
            </Link>
            <Link
              href="#services"
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
