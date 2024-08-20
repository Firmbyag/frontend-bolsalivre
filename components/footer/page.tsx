import Link from "next/link";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 bg-purple-600 text-white">
      <div className="grid grid-cols-2 lg:flex lg:justify-around lg:gap-5 lg:px-40 px-10 py-5">
        <div className="flex flex-col gap-2 my-4">
          <p className="text-lg font-semibold">Parceiros</p>
          <div className="flex flex-col gap-1">
            <Link href="/mais-alunos">
              <span className="text-xs">Quero ser parceiro</span>
            </Link>
            <Link href="/blog">
              <span className="text-xs">Blog Gestores</span>
            </Link>
            <Link href="">
              <span className="text-xs">Área do Gestor</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 my-4">
          <p className="text-lg font-semibold">Encontre bolsas</p>
          <div className="flex flex-col gap-1">
            <Link href="/escola/busca">
              <span className="text-xs">Instituições de Ensino</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 my-4">
          <p className="text-lg font-semibold">Institucional</p>
          <div className="flex flex-col gap-1">
            <Link href="/">
              <span className="text-xs">Sobre o Bolsa Livre</span>
            </Link>
            <Link href="/artigos">
              <span className="text-xs">Educação é para todos</span>
            </Link>
            <Link href="">
              <span className="text-xs">Trabalhe conosco</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 my-4">
          <p className="text-lg font-semibold">Outras bolsas</p>
          <div className="flex flex-col gap-1">
            <Link href="">
              <span className="text-xs">Faculdades com Bolsa</span>
            </Link>
            <Link href="">
              <span className="text-xs">Cursos Técnicos com Bolsa</span>
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col gap-10">
            <p className="text-lg font-semibold">
              Transparência
            </p>
            <div className="flex flex-col gap-3">
            <a href=""><span>Termos de uso</span></a>
            <a href=""><span>Política de privacidade</span></a>
            <a href=""><span>Política de cookies</span></a>
            <a href=""><span>Imprensa</span></a>
            </div>
        </div> */}
      </div>
      <div className="md:flex lg:px-40 lg:gap-20 sm:px-6">
        <div className="flex gap-5 items-center my-3">
          <span className="bg-purple-700 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">(21) 2143-9986</span>
            <span className="font-light">Seg. a Sex. - 8am a 6pm</span>
          </div>
        </div>
        <div className="flex gap-3 items-center my-3">
          <AiOutlineQuestionCircle size={42} />
          <span className="ml-1 text-base font-light">
            Tire suas dúvidas em nossa central de ajuda
          </span>
        </div>
      </div>
      <div className="lg:flex flex-col justify-center items-center font-light gap-4 lg:px-40 px-10 py-10 bg-purple-800 text-slate-200">
        <p className="font-normal">
          Todos os direitos reservados a Bolsa Livre • CNPJ 17.669.221/0001-50
        </p>
        <a href="https://firmby.site/" target="_blank" className="text-xs">
          desenvolvido por Firmby
        </a>
      </div>
    </div>
  );
};

export default Footer;
