import {
  BadgeCheck,
  ChevronRight,
  Lightbulb,
  MonitorSmartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="flex items-center justify-between bg-[#01194c] py-8"
      id="services"
    >
      <div className="gap-4 flex flex-col px-3 md:px-0 md:container p-8">
        <div className="flex flex-col md:flex-row w-full gap-6 items-center md:justify-center">
          <div className="flex flex-col bg-white p-5 rounded-md gap-4 max-w-[376px] max-h-[360px] w-full h-full">
            <div className="flex items-center justify-center bg-[#f1f5ff] rounded-full size-12 text-blue500">
              <BadgeCheck />
            </div>
            <p className="font-semibold text-xl">Gestão de mídias sociais</p>
            <span className="text-[#696969]">
              Estrategias poderosas para tornar sua presença online uma força no
              mercado.
            </span>
            <Link href="/social-media" className="flex text-xs items-center">
              Saiba mais <ChevronRight size={14} />{" "}
            </Link>
          </div>

          <div className="flex flex-col bg-white p-5 rounded-md gap-4 max-w-[376px] max-h-[360px] w-full h-full">
            <div className="flex items-center justify-center bg-[#f1f5ff] rounded-full size-12 text-blue500">
              <Lightbulb />
            </div>
            <p className="font-semibold text-xl">Consultorias Comerciais</p>
            <span className="text-[#696969]">
              Expertise para impulsionar vendas e levar seu negocio a novos
              patamares.
            </span>
            <Link
              href="https://api.whatsapp.com/send/?phone=5511981046535&text&type=phone_number&app_absent=0"
              target="_blank"
              aria-label="whatsapp"
              className="flex text-xs items-center"
            >
              Saiba mais <ChevronRight size={14} />
            </Link>
          </div>

          <div className="flex flex-col bg-white p-5 rounded-md gap-4 max-w-[376px] max-h-[360px] w-full h-full">
            <div className="flex items-center justify-center bg-[#f1f5ff] rounded-full size-12 text-blue500">
              <MonitorSmartphone />
            </div>
            <p className="font-semibold text-xl">Desenvolvimento de Apps</p>
            <span className="text-[#696969]">
              Transformaremos suas ideias em aplicativos práticos para
              impulsionar seu negócio.
            </span>
            <Link href="#" className="flex text-xs items-center">
              Saiba mais <ChevronRight size={14} />{" "}
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-white gap-4 mt-8 items-center">
          <h2 className="text-left text-sm md:text-center md:text-base md:max-w-screen-lg">
            Fundada em 2019, a Inclusivo Soluções apoia empresas e
            empreendedores do setor de eventos e formaturas, combinando
            tecnologia de ponta com comunicação eficaz para unir o tradicional
            ao digital. A empresa oferece soluções personalizadas, incluindo
            desenvolvimento de aplicativos, gestão de mídias sociais e
            consultoria, com o objetivo de transformar desafios em oportunidades
            e impulsionar o crescimento do setor. Comprometida com a criação de
            experiências únicas, a Inclusivo Soluções busca revitalizar o
            mercado, assegurando o sucesso e a inovação para cada cliente.
          </h2>

          <div className="flex items-center gap-2 w-f">
            <Image
              src={"/founder.jpg"}
              alt="founder"
              width={70}
              height={70}
              className="rounded-full"
            />
            <p className="text-xs text-white">
              Leonardo Jardim / CEO & Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
