import Image from "next/image";

export default function Finance() {
  return (
    <div className="flex items-center justify-around h-dvh">
      <Image
        src={"./finance.svg"}
        alt="financeiro"
        height={500}
        width={500}
        priority
        className="drop-shadow-md"
      />

      <div className="flex flex-col gap-5">
        <p className="text-3xl poppins font-semibold uppercase">financeiro</p>
        <p className="text-lg">
          Desbloqueamos recursos e aceleramos o crescimento <br /> do seu
          empreendimento.
        </p>
      </div>
    </div>
  );
}
