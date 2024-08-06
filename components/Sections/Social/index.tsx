import Image from "next/image";

export default function Social() {
  return (
    <div className="flex items-center justify-between h-screen relative">
      <div className="flex flex-col gap-5">
        <p className="font-semibold poppins text-3xl">
          GESTÃO DE REDES SOCIAIS
        </p>
        <p className="text-lg">
          Estratégias poderosas para tornar sua presença <br /> online uma força
          no mercado.
        </p>
      </div>
      <Image
        src={"./social_media.svg"}
        alt="midias sociais"
        height={500}
        width={500}
        priority
        className="drop-shadow-md"
      />
    </div>
  );
}
