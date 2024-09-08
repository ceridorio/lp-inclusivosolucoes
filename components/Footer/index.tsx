import { Facebook, Instagram, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#001727] text-white">
      <div className="container py-16">
        <div className="flex flex-col md:flex-row w-full md:justify-between gap-10">
          <div className="gap-4 flex flex-col text-sm">
            <h3 className="font-semibold text-xl">Sobre nós</h3>
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="rounded-full flex items-center justify-center size-12 bg-white text-blue500"
              >
                <Facebook />
              </Link>
              <Link
                href="#"
                className="rounded-full flex items-center justify-center size-12 bg-white text-blue500"
              >
                <Instagram />
              </Link>
            </div>
          </div>

          <div className="gap-4 flex flex-col text-sm">
            <h3 className="font-semibold text-xl">Links</h3>

            <Link href="#">Gestão de mídias sociais</Link>
            <Link href="#">Consultorias Comerciais</Link>
            <Link href="#">Desenvolvimento de Apps</Link>
          </div>

          <div className="gap-4 flex flex-col text-sm">
            <h3 className="font-semibold text-xl">Contato</h3>
            <div className="flex items-center gap-2">
              <MapPin />
              <p>Rua Professor Mário Zini, 210 - Leme, SP</p>
            </div>

            <p>inclusivorepresentacoes@gmail.com</p>

            <p>+55(11) 98104-6535</p>
          </div>
        </div>
      </div>
      <p className="self-center text-center pb-5 text-xs mt-10">
        &copy; Inclusivo Soluções All Rights Reserved, 2024
      </p>
    </footer>
  );
}
