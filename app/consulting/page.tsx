import { Header } from "@/components/Header";
import { CloudUpload, Handshake, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { bannerCards } from "./card";
import { BannerCard } from "./components/banner-card";

export default function Consulting() {
  return (
    <>
      <Header
        className="bg-consulting-bg bg-center"
        title="Inove suas vendas e lidere o mercado de eventos e formaturas"
        description="Desde os 7 anos, as vendas são a minha verdadeira paixão. Hoje, aos 36 anos, essa paixão se transformou em uma carreira sólida e dedicada a impulsionar negócios. Com 14 anos de experiência no setor de álbuns de formatura, impactei mais de 12 mil famílias em todo o Brasil.
        Minha jornada me ensinou a entender profundamente os clientes e a oferecer soluções que realmente fazem a diferença."
      />

      <div className="container flex flex-col items-center lg:flex-row py-12 justify-between w-full gap-4">
        <Image
          src="/life.jpg"
          alt="Leonardo Jardim"
          width={376}
          height={445}
          className="rounded-2xl"
        />
        <div className="text-center max-w-screen-md flex flex-col gap-6 mt-8">
          <p className="font-semibold text-4xl">
            Destaques da Minha Experiência
          </p>
          <p className="text-[#696969] text-left">
            Processos de Vendas Estratégicos: Desenvolvi métodos de vendas para
            mentorias com valores de R$ 25 mil, R$ 45 mil e R$ 60 mil, gerando
            mais de R$ 460 mil em faturamento.
          </p>
          <div className="flex flex-col md:flex-row justify-between mt-7 gap-5">
            <div className="flex flex-col gap-5 text-left">
              <p className="text-[#001727] font-semibold">
                Processos de Vendas Estratégicos
              </p>
              <span className="text-[#696969]">
                Realizei R$ 18.000.000 em vendas, ajudando empresas a superar
                desafios e a aproveitar oportunidades.
              </span>
            </div>

            <div className="flex flex-col gap-5 text-left">
              <p className="text-[#001727] font-semibold text-base">
                Vendas de Impacto
              </p>
              <span className="text-[#696969]">
                Auxilio empresas a criar processos de vendas eficazes, focados
                em resultados sólidos e mensuráveis.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 flex flex-col text-center w-full items-center lg:mb-16">
        <h2 className="text-center font-semibold text-xl md:text-3xl max-w-screen-md">
          Experiência em Ofertas que Convertem
        </h2>

        <p className="text-[#696969] font-medium text-center mt-8 max-w-screen-md">
          Minha expertise em vendas de álbuns de formatura é baseada em quatro
          segmentos de ofertas altamente eficazes
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-3 gap-6 mt-9">
          <div className="bg-[#f2f6ff] w-full max-w-[417px] p-3 rounded-xl border-[1px] border-[#c0c2db] flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <CloudUpload
                className="bg-white rounded-full text-blue500 p-3"
                size={42}
              />
              <p className="text-xs md:text-base text-blue700 font-bold">
                Vendas com Visitas Domiciliares
              </p>
            </div>
            <p className="text-sm text-[#696969] text-left">
              Realizo visitas às casas dos clientes com álbuns físicos prontos
              para entrega, criando uma conexão emocional e uma experiência de
              compra personalizada.
            </p>
          </div>

          <div className="bg-[#f2f6ff] w-full max-w-[417px] p-3 rounded-xl border-[1px] border-[#c0c2db] flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <Target
                className="bg-white rounded-full text-blue500 p-3"
                size={42}
              />
              <p className="text-xs md:text-base text-blue700 font-bold">
                Vendas com Apresentação Digital em Domicílios e Empresas
              </p>
            </div>
            <p className="text-sm text-[#696969] text-left">
              Utilizo tablets para apresentar álbuns, facilitando a venda e a
              produção sem a necessidade de estoque físico
            </p>
          </div>

          <div className="bg-[#f2f6ff] w-full max-w-[417px] p-3 rounded-xl border-[1px] border-[#c0c2db] flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <Handshake
                className="bg-white rounded-full text-blue500 p-3"
                size={42}
              />
              <p className="text-xs md:text-base text-blue700 font-bold">
                Vendas que Geram Experiências
              </p>
            </div>
            <p className="text-sm text-[#696969] text-left">
              Em eventos como o Dia da Família, combino tecnologia e praticidade
              para oferecer experiências envolventes e memoráveis.
            </p>
          </div>

          <div className="bg-[#f2f6ff] w-full max-w-[417px] p-3 rounded-xl border-[1px] border-[#c0c2db] flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <Handshake
                className="bg-white rounded-full text-blue500 p-3"
                size={42}
              />
              <p className="text-xs md:text-base text-blue700 font-bold">
                Vendas Online à Distância
              </p>
            </div>
            <p className="text-sm text-[#696969] text-left">
              Facilito vendas remotamente por meio de plataformas online,
              proporcionando comodidade ao cliente sem comprometer a qualidade
              do atendimento.
            </p>
          </div>
        </div>

        <div className="py-8 flex flex-col gap-5 mx-3">
          <p className="text-4xl font-semibold">O Desafio</p>
          <p className="text-[#696969] text-justify lg:max-w-screen-md lg:text-center">
            Empresas de eventos e formaturas enfrentam desafios como, falta de
            processos claros, dificuldade em se adaptar às novas gerações e a
            necessidade constante de inovação. A Inclusivo Soluções se destaca
            ao oferecer a expertise necessária para superar esses obstáculos.
          </p>
        </div>

        <div className="container py-12 flex flex-col gap-5">
          <h2 className="text-3xl font-semibold">Nossa Solução</h2>
          <p className="text-[#696969] text-center">
            A consultoria da Inclusivo Soluções vai além de um serviço; é uma
            <br /> parceria estratégica que leva seu negócio a um novo nível.
            <br /> Oferecemos:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-3 gap-6 mt-2">
            {bannerCards.map((item) => (
              <BannerCard
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div className="container py-12 flex flex-col gap-6 text-center items-center">
          <h2 className="font-semibold text-4xl">
            Pronto para Transformar Suas Vendas?
          </h2>

          <p className="text-[#696969] text-center max-w-screen-md">
            Entre em contato agora e descubra como a Consultoria Comercial da
            Inclusivo Soluções pode alavancar o sucesso do seu negócio.
          </p>

          <Link
            href="#"
            className="bg-blue500 p-3 px-5 text-center text-white rounded-full hover:scale-105 transition-all ease-linear duration-300"
          >
            Entre em contato
          </Link>
        </div>
      </div>
    </>
  );
}
