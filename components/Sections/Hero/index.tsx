import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center justify-between h-screen">
      <div className="gap-4 flex flex-col">
        <p className="text-7xl poppins uppercase font-semibold text-darkGray">
          inclusivo
        </p>
        <p className="text-7xl poppins font-semibold uppercase text-blue500 italic">
          soluções
        </p>
        <p className="text-xl text-darkGray tracking-widest">
          Transformando sonhos em lucros
        </p>
      </div>
      <Image
        src={"./profit.svg"}
        alt="imagem"
        width={600}
        height={600}
        priority
      />
    </div>
  );
}
