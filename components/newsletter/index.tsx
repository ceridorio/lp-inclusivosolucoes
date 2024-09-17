import Link from "next/link";

export function NewsLetter() {
  return (
    <div className="bg-contact-bg no-underline bg-cover h-screen">
      <div className="container h-full flex flex-col text-white p-5 gap-8 justify-center">
        <h3 className="text-4xl font-semibold max-w-screen-sm">
          Pronto para Transformar Suas Vendas?
        </h3>
        <p className="text-2xl max-w-screen-md">
          Entre em contato agora e descubra como a Consultoria Comercial da
          Inclusivo Soluções pode alavancar o sucesso do seu negócio.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=5511981046535&text=Vim%20pelo%20site%20da%20Inclusivo%20Solu%C3%A7%C3%B5es%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"
          target="_blank"
          aria-label="whatsapp"
          className="bg-blue500 rounded-full w-36 items-center justify-center flex p-3 mt-24"
        >
          Contate-nos
        </Link>
      </div>
    </div>
  );
}
