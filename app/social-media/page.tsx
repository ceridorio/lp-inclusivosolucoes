import { Header } from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, CloudUpload, Handshake, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <>
      <Header
        className="bg-media-bg bg-center"
        title="Torne-se uma referência nas redes!"
      />

      <div className="container">
        <div className="py-12 flex flex-col lg:flex-row justify-between lg:my-16 items-center">
          <div className="max-w-[600px] flex flex-col gap-8 md:gap-20">
            <div className="max-w-[600px] flex flex-col mt-6 gap-6">
              <h2 className="text-xl md:text-4xl font-bold">
                Alcance Resultados Reais com a Expertise da Inclusivo Soluções
              </h2>
              <p className="text-[#696969] font-semibold">
                Sua empresa de eventos e formaturas investe em redes sociais,
                mas os resultados ainda estão longe do que você precisa? As
                curtidas não se traduzem em vendas, e os anúncios pagos parecem
                ser um desperdício?
                <br />
                Nós temos a solução.
              </p>
            </div>

            <div className="flex gap-8 flex-col md:flex-row">
              <div className="flex flex-col gap-5 max-w-screen-xs">
                <Check
                  className="bg-blue500 rounded-full p-2"
                  color="#FFFFFF"
                  size={32}
                />

                <p className="text-blue700 text-xl font-bold">
                  Experiência no mercado
                </p>

                <span>
                  Na Inclusivo Soluções, acumulamos mais de 14 anos de
                  experiência no setor de formaturas e eventos. Começamos no
                  presencial e, nos últimos cinco anos, migramos para o mundo
                  online.
                </span>
              </div>

              <div className="flex flex-col gap-5 max-w-screen-xs">
                <Check
                  className="bg-blue500 rounded-full p-2"
                  color="#FFFFFF"
                  size={32}
                />

                <p className="text-blue700 text-xl font-bold">
                  Sucesso de vendas
                </p>

                <span>
                  Sabemos exatamente o que formandos e suas famílias desejam e
                  utilizamos esse conhecimento para transformar sua presença
                  digital em uma verdadeira máquina de vendas.
                </span>
              </div>
            </div>
          </div>

          <Image
            src="/service-management.png"
            width={472}
            height={477}
            alt="service"
            className="rounded-2xl mt-8 lg:mt-0 object-cover"
          />
        </div>

        <div className="py-12 flex flex-col lg:flex-row justify-between mt-8 lg:my-16 items-center">
          <Image
            src="/marketing-solutions.png"
            className="rounded-2xl"
            width={472}
            height={477}
            alt="marketing"
          />

          <div className="max-w-[600px] flex flex-col mt-8">
            <h2 className="text-4xl font-bold text-center">
              Conteúdo Que Conecta e Converte
            </h2>
            <p className="text-[#696969] font-medium text-left mt-8">
              Vá além das imagens bonitas e crie uma conexão genuína com seu
              público-alvo.
            </p>
            <p className="text-[#696969] font-medium text-left">
              Os jovens e os pais que compõem seu público buscam autenticidade.
              Criamos conteúdos humanizados que ressoam com suas emoções,
              utilizando vídeos intencionais e histórias reais para engajar e
              converter de forma eficaz.
              <br />
              Nós temos a solução.
            </p>

            <Link
              href="#"
              className="mt-8 bg-blue500 p-3 rounded-3xl text-white font-semibold w-48 text-center hover:scale-105 transition-all ease-in-out"
            >
              Entrar em contato
            </Link>
          </div>
        </div>

        <div className="py-12 flex flex-col text-center w-full items-center lg:mb-16">
          <h2 className="text-center font-semibold text-xl md:text-3xl max-w-screen-md">
            Estratégia Personalizada e Impactante! <br /> Destaque-se no mercado
            com uma estratégia digital alinhada aos objetivos da sua empresa.
          </h2>

          <p className="text-[#696969] font-medium text-center mt-8 max-w-screen-md">
            Não basta postar aleatoriamente. Com nossa experiência no setor,
            desenvolvemos estratégias personalizadas que garantem que sua marca
            se destaque e atinja os resultados que você busca.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 mt-9">
            <div className="bg-[#f2f6ff] w-full max-w-[417px] p-3 rounded-xl border-[1px] border-[#c0c2db] flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <CloudUpload
                  className="bg-white rounded-full text-blue500 p-3"
                  size={42}
                />
                <p className="text-xs md:text-base text-blue700 font-bold">
                  Gestão Precisa de Anúncios Pagos
                </p>
              </div>
              <p className="text-sm text-[#696969] text-left">
                Gaste cada centavo de forma inteligente com anúncios que geram
                retorno real.
              </p>
            </div>

            <div className="bg-[#f2f6ff] w-full max-w-[417px] p-3 rounded-xl border-[1px] border-[#c0c2db] flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <Target
                  className="bg-white rounded-full text-blue500 p-3"
                  size={42}
                />
                <p className="text-xs md:text-base text-blue700 font-bold">
                  Land Pages Que Convertem
                </p>
              </div>
              <p className="text-sm text-[#696969] text-left">
                Transforme interesse em vendas reais com Land Pages projetadas
                para converter.
              </p>
            </div>

            <div className="bg-[#f2f6ff] w-full max-w-[417px] p-3 rounded-xl border-[1px] border-[#c0c2db] flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <Handshake
                  className="bg-white rounded-full text-blue500 p-3"
                  size={42}
                />
                <p className="text-xs md:text-base text-blue700 font-bold">
                  Monitoramento e Ajuste Contínuo
                </p>
              </div>
              <p className="text-sm text-[#696969] text-left">
                Mantenha-se relevante e otimizado com ajustes em tempo real.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row py-12 w-full gap-6 items-center lg:items-start lg:justify-between">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="font-bold text-4xl lg:mt-12">
              Não deixe sua empresa perder oportunidades valiosas.
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="mb-6">
                <AccordionTrigger className="text-sm font-semibold">
                  Gestão Precisa de Anúncios Pagos
                </AccordionTrigger>
                <AccordionContent className="text-[#696969] font-medium px-6">
                  Não desperdice recursos com anúncios ineficazes. Gerenciamos
                  suas campanhas publicitárias com precisão, garantindo que elas
                  alcancem as pessoas certas no momento certo, gerando
                  conversões reais.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="mb-6">
                <AccordionTrigger className="text-sm font-semibold">
                  O que é uma Land Page?
                </AccordionTrigger>
                <AccordionContent className="text-[#696969] font-medium px-6">
                  Uma <b>Land Page</b> (ou página de aterrissagem) é uma página
                  específica do seu site criada com um único objetivo:{" "}
                  <b>converter visitantes em leads ou clientes</b>. Ela foca em
                  uma única ação, como preencher um formulário ou realizar uma
                  compra, eliminando distrações e aumentando as chances de
                  conversão.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="mb-6">
                <AccordionTrigger className="text-sm font-semibold">
                  Por que você precisa de uma Land Page?
                </AccordionTrigger>
                <AccordionContent className="text-[#696969] font-medium px-6">
                  No mundo digital, as primeiras impressões são cruciais. Uma
                  Land Page bem projetada ajuda a capturar informações valiosas,
                  melhorar a eficácia das suas campanhas de marketing, e
                  maximizar o retorno sobre seu investimento.{" "}
                  <b>
                    Sem uma Land Page, você pode estar perdendo potenciais
                    clientes e vendas importantes.
                  </b>{" "}
                  <br />
                  Nós criamos Land Pages otimizadas que capturam a atenção do
                  visitante e os guiam diretamente para a ação, aumentando suas
                  vendas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-sm font-semibold">
                  Monitoramento e Ajuste Contínuo
                </AccordionTrigger>
                <AccordionContent className="text-[#696969] font-medium px-6">
                  O cenário digital muda rapidamente, e o que funcionou ontem
                  pode não funcionar hoje. Monitoramos suas campanhas de perto e
                  fazemos ajustes rápidos para garantir que você esteja sempre à
                  frente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Image
              src="/faq1.png"
              width={520}
              height={300}
              alt="faq1"
              className="mb-6"
            />
            <div className="flex justify-between">
              <Image src="/faq2.png" width={245} height={303} alt="faq2" />
              <Image src="/faq3.png" width={245} height={303} alt="faq3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
