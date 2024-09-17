import { Header } from "@/components/Header";
import { CloudUpload, Handshake, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Development() {
  return (
    <>
      <Header
        className="bg-develop-bg"
        title="Um App Personalizado que Revoluciona Seu Negócio!"
        description="Imagine um aplicativo feito sob medida para sua empresa, que não só organiza e automatiza cada aspecto dos seus eventos, mas também cria uma conexão direta e irresistível com seus clientes. Um app que reflete a identidade da sua marca, impressiona seus clientese faz com que seu negócio se destaque da concorrência. Com nosso app, o que antes era um desafio agora se torna sua maior vantagem."
      />

      <div className="container py-12 flex flex-col lg:flex-row gap-4 justify-center items-center">
        <Image
          src="/doubt.png"
          alt="doubt"
          className="rounded-lg"
          width={500}
          height={597}
        />
        <div className="md:px-6 flex flex-col gap-8">
          <h2 className="font-semibold text-4xl text-center">
            Sua Empresa Está Pronta para Dominar o Mercado de Formaturas e
            Eventos?
          </h2>
          <p className="text-[#696969]">
            Em um setor tão dinâmico quanto o de formaturas e eventos, cada
            segundo conta. Agora, imagine se você pudesse transformar a maneira
            como gerencia seu negócio, encantando seus clientes com uma
            experiência impecável e maximizando suas vendas —tudo ao mesmo
            tempo.{" "}
            <b>Isso não é apenas um sonho, é uma realidade ao seu alcance.</b>
          </p>
          <p className="text-[#696969]">
            Você já se sentiu sobrecarregado tentando manter tudo em ordem? A
            organização de eventos é complexa, e sem um sistema centralizado,
            <b>
              os erros são inevitáveis. A comunicação com os clientes fica
              truncada, os processos de venda se tornam uma dor de cabeça, e as
              oportunidades de conquistar novos clientes simplesmente escapam
              por entre os dedos. Você merece mais do que isso
            </b>{" "}
            e seus clientes também.
          </p>
        </div>
      </div>

      <div className="container py-12 flex flex-col text-center w-full items-center lg:mb-16">
        <h2 className="text-center font-semibold text-xl md:text-3xl max-w-screen-md">
          Visualize o que você pode conquistar com o nosso app
        </h2>

        <p className="text-[#696969] font-medium text-center mt-8 max-w-screen-md mx-3">
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
                Processos Perfeitos
              </p>
            </div>
            <p className="text-sm text-[#696969] text-left">
              Tudo o que você precisa, desde a inscrição de participantes até a
              gestão de pagamentos, organizado em um único lugar, eliminando o
              caos e economizando tempo.
            </p>
          </div>

          <div className="bg-[#f2f6ff] w-full max-w-[417px] p-3 rounded-xl border-[1px] border-[#c0c2db] flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <Target
                className="bg-white rounded-full text-blue500 p-3"
                size={42}
              />
              <p className="text-xs md:text-base text-blue700 font-bold">
                Clientes Encantados
              </p>
            </div>
            <p className="text-sm text-[#696969] text-left">
              Notificações personalizadas, atualizações em tempo real e uma
              experiência de usuário tão fluida que seus clientes não vão querer
              outra empresa.
            </p>
          </div>

          <div className="bg-[#f2f6ff] w-full max-w-[417px] p-3 rounded-xl border-[1px] border-[#c0c2db] flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <Handshake
                className="bg-white rounded-full text-blue500 p-3"
                size={42}
              />
              <p className="text-xs md:text-base text-blue700 font-bold">
                Vendas que Fluem
              </p>
            </div>
            <p className="text-sm text-[#696969] text-left">
              Um sistema de vendas e pagamentos integrado que não apenas
              facilita a vida do seu cliente, mas também{" "}
              <b>impulsiona suas receitas</b>.
            </p>
          </div>

          <div className="bg-[#f2f6ff] w-full max-w-[417px] p-3 rounded-xl border-[1px] border-[#c0c2db] flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <Handshake
                className="bg-white rounded-full text-blue500 p-3"
                size={42}
              />
              <p className="text-xs md:text-base text-blue700 font-bold">
                Decisões Poderosas
              </p>
            </div>
            <p className="text-sm text-[#696969] text-left">
              Com dados e relatórios acessíveis em tempo real, cada decisão sua
              será embasada, estratégica, e voltada para o crescimento.
            </p>
          </div>
        </div>

        <div className="py-8 flex flex-col gap-5 mx-3 items-center">
          <p className="text-4xl font-semibold">
            Nosso Diferencial: Conhecemos o Mercado Como Ninguém
          </p>
          <p className="text-[#696969] text-justify lg:max-w-screen-lg lg:text-center">
            Com mais de 14 anos de experiência no ramo de formaturas e eventos,
            <b>sabemos exatamente o que formandos e suas famílias desejam</b>.
            Não somos apenas mais uma empresa de tecnologia, somos especialistas
            em transformar a experiência dos seus clientes e maximizar o sucesso
            do seu negócio
          </p>

          <Link
              href="https://api.whatsapp.com/send/?phone=5511981046535&text=Vim%20pelo%20site%20da%20Inclusivo%20Solu%C3%A7%C3%B5es%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20desenvolvimento%20de%20apps&type=phone_number&app_absent=0"
              target="_blank"
              aria-label="whatsapp"
              className="mt-8 bg-blue500 p-3 rounded-3xl text-white font-semibold w-48 text-center hover:scale-105 transition-all ease-in-out"
            >
            Entrar em contato
          </Link>
        </div>
      </div>
    </>
  );
}
