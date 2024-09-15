import Image from "next/image";

interface BannerCardProps {
  image: string;
  title: string;
  description: string;
}

export function BannerCard({ image, title, description }: BannerCardProps) {
  return (
    <div className="w-full max-w-[20rem] h-full max-h-[16rem] rounded-lg relative flex justify-end">
      <Image
        src={image}
        alt="calc"
        width={320}
        height={256}
        className="rounded-lg"
      />
      <div className="bg-white absolute bottom-0 rounded-br-lg pb-1 px-2 items-end flex flex-col w-[92%] self-end">
        <p className="font-semibold text-[#001727]">{title}</p>
        <span className="text-[#696969] text-[10px] text-left flex mt-1">
          {description}
        </span>
      </div>
    </div>
  );
}
