import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex items-center justify-between h-screen">
      <Image
        src={"./doubts.svg"}
        alt="imagem"
        width={500}
        height={500}
        priority
      />
      <div className="flex flex-col gap-5 mr-5">
        <p className="font-semibold text-darkGray text-4xl poppins">
          o que é uma{" "}
          <span className="text-blue500 italic text-5xl"> Startup</span> ?
        </p>
        <p className="text-justify max-w-[34rem] text-lg leading-relaxed">
          Startup é uma empresa nova e inovadora, com um modelo de negócio
          inovador, focada em resolver problemas específicos, geralmente no
          campo da tecnologia, com capacidade de crescimento rápido e busca por
          novas oportunidades de mercado.
        </p>
      </div>
    </div>
  );
}
