import Image from "next/image";

export default function Mobile() {
  return (
    <div className="flex items-center justify-between h-screen relative">
      <div className="w-full bg-[#f2f2f2] h-96 rounded-2xl shadow-md z-10 mx-5 mt-32" />
      <div className="bg-white w-full rounded-2xl h-[26rem] z-20 absolute top-[12.5rem] left-0 shadow-md">
        <div className="flex items-center h-full relative justify-between">
          <div className="text-left ml-20 gap-4 flex flex-col">
            <p className="poppins text-3xl font-semibold ">
              Desenvolvimento de apps
            </p>
            <p className="text-lg font-light">
              Transformaremos suas ideias em aplicativos práticos <br /> para
              impulsionar seu negócio.
            </p>
          </div>

          <Image
            src={"./mobile.svg"}
            width={500}
            height={500}
            alt="mobile"
            priority
            className="-mt-32 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
