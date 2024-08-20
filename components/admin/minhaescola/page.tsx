"use client";

import CustomSelect from "@/components/basecomponents/selectComponent";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoDocumentText, IoLocationSharp } from "react-icons/io5";
import { MdAddAPhoto } from "react-icons/md";
import ReactImageUploading from "react-images-uploading";
import { maskBr } from "js-brasil";
import { toast } from "react-toastify";

const Minhaescola: React.FC = () => {
  const [sobre, setSobre] = useState<boolean>(false);
  const [endereco, setEndereco] = useState(false);
  const [midias, setMidias] = useState<boolean>(false);
  const [images, setImages] = useState([]);
  const [contato, setContato] = useState<boolean>(false);
  const [documentos, setDocumentos] = useState<boolean>(false);
  const [ensino, setEnsino] = useState<string[]>([
    "Ensino Básico",
    "Ensino Técnico",
    "Ensino Superior",
  ]);

  const setEnsinoValue = (item: any) => {
    item && item._id && setEnsino(item._id);
  };

  const { register, watch, handleSubmit } = useForm();

  const fetchSchool = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/schools-details`
    );
    const data = await response.json();
    console.log(data);
  };

  const postSchoolInfo = async (schoolData) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/schools-details/add`,
        {
          method: "POST",
          body: JSON.stringify(schoolData),
        }
      );
      const data = await response.json();
      toast.success(data.success);
    } catch (error) {
      toast.error("Erro ao salvar escola");
    }
  };

  const onSubmitSchool = (data) => {
    console.log(data);
    postSchoolInfo(data);
  };
  const onSubmitAddress = (data) => {
    console.log(data);
    postSchoolInfo(data);
  };

  const onSubmitMedia = (data) => {};

  const onSubmitContact = (data) => {
    console.log(data);
    postSchoolInfo(data);
  };

  const onSubmitDocuments = (data) => {
    console.log(data);
    postSchoolInfo(data);
  };

  const onChangeImages = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  useEffect(() => {
    fetchSchool();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <p className="text-3xl font-bold">Dados da escola</p>
      <p className="text-xs">
        Esta será a identidade da sua escola em nosso portal, todas as
        informações abaixo estarão na sua página. É importante que todos os
        campos estejam preenchidos e conferidos antes do envio.
      </p>
      <p className="p-5 border border-orange-700 text-orange-700 rounded-lg">
        obs: as alterações podem levar algumas horas até aparecerem no site.
      </p>
      <div className="flex flex-col gap-5 border bg-slate-50 p-12 rounded-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setSobre(!sobre)}
        >
          <div className="flex gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#a00ec8"
                  d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4v-12a64 64 0 0 0-64-64m61 112H35a3 3 0 0 0-3 3v237a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3M224 307.43A28.57 28.57 0 0 1 195.43 336h-70.86A28.57 28.57 0 0 1 96 307.43v-70.86A28.57 28.57 0 0 1 124.57 208h70.86A28.57 28.57 0 0 1 224 236.57Z"
                />
              </svg>
            </span>
            <span className="font-semibold text-lg"> Sobre a Escola</span>
          </div>
          <div className="flex gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#36c80e"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="17.1"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
            </span>
            <span className={`${sobre && "rotate-180"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#a20fe6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m112 184l144 144l144-144"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          className={`${
            !sobre && "hidden"
          } flex flex-col transition-all translate-x-7`}
        >
          <form className="flex-col" onSubmit={handleSubmit(onSubmitSchool)}>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Nome da escola
              </label>
              <input
                placeholder="nome exemplo"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolName")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Grau de ensino
              </label>
              <CustomSelect
                items={ensino}
                setItem={setEnsinoValue}
                filterName="Ensino"
                {...register("schoolgrade")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Razão Social
              </label>
              <input
                placeholder="razão social da escola"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolSocialReason")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                CNPJ
              </label>
              <input
                placeholder="xx.xxxxx.xxxx.xxx.xx"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolCNPJ")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Nome do Responsável
              </label>
              <input
                placeholder="nome do responsável legal"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolResponsibleName")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                CPF do Responsável
              </label>
              <input
                placeholder="cpf do responsável legal"
                maxLength={11}
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolResponsibleCPF")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Cargo do Responsável
              </label>
              <input
                placeholder="carg do responsável legal"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolResponsibleRole")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Email do Responsável
              </label>
              <input
                placeholder="email do responsável legal"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolResponsibleEmail")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Celular do Responsável
              </label>
              <input
                placeholder="celular do responsável legal"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolResponsiblePhone")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Nome da Secretária principal
              </label>
              <input
                placeholder="nome completo da secretária principal"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolSecretaryName")}
              />
            </div>
            <button
              className="bg-orange-600 p-3 w-40 text-xs rounded-full text-white"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-5 border bg-slate-50 p-12 rounded-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setEndereco(!endereco)}
        >
          <div className="flex gap-2">
            <IoLocationSharp size={20} className="text-purple-700" />
            <span className="font-semibold text-lg">Endereço</span>
          </div>
          <div className="flex gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#36c80e"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="17.1"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
            </span>
            <span className={`${endereco && "rotate-180"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#a20fe6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m112 184l144 144l144-144"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          className={`${
            !endereco && "hidden"
          } flex flex-col transition-all translate-x-7`}
        >
          <span>Preencha as informações de endereço do seu colégio</span>
          <form
            className="flex-col gap-4"
            onSubmit={handleSubmit(onSubmitAddress)}
          >
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                CEP
              </label>
              <input
                placeholder="digite seu CEP"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolCEP")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Logradouro (rua, avenida)
              </label>
              <input
                placeholder="digite seu logradouro"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolStreet")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Número
              </label>
              <input
                placeholder="digite o número do seu endereço"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolNumber")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Complemento
              </label>
              <input
                placeholder="ex: bloco, próxima ao, etc"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolComplement")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Bairro
              </label>
              <input
                placeholder="digite seu bairro"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolNeighborhood")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Cidade
              </label>
              <input
                placeholder="digite sua cidade"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolCity")}
              />
            </div>
            <div className="flex-col my-4">
              <label className="text-xs" htmlFor="">
                Estado
              </label>
              <input
                placeholder="digite seu estado"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolState")}
              />
            </div>
            <button
              className="bg-orange-600 p-3 w-40 text-xs rounded-full text-white"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-5 border bg-slate-50 p-12 rounded-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setMidias(!midias)}
        >
          <div className="flex gap-2">
            <MdAddAPhoto size={20} className="text-purple-700" />
            <span className="font-semibold text-lg">Mídias</span>
          </div>
          <div className="flex gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#36c80e"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="17.1"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
            </span>
            <span className={`${midias && "rotate-180"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#a20fe6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m112 184l144 144l144-144"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          className={`${
            !midias && "hidden"
          } flex flex-col transition-all translate-x-7`}
        >
          <span>
            Faça o Upload de algumas imagens que serão salvas para sua escola
          </span>
          <ReactImageUploading
            multiple
            value={images}
            onChange={onChangeImages}
            maxNumber={6}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="mt-4 flex flex-col w-full">
                <div className="w-full flex flex-row items-center gap-8 mb-8">
                  <button
                    className={`${
                      isDragging
                        ? { color: "bg-red-500 text-white text-xs" }
                        : "bg-white border border-orange-600 border-dashed text-orange-600 p-3 rounded-full w-fit text-xs"
                    }`}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Clique aqui ou arraste para enviar suas imagens (max: 6)
                  </button>
                  <button
                    className="text-xs text-orange-600"
                    onClick={onImageRemoveAll}
                  >
                    Limpar imagens
                  </button>
                </div>
                <div className="flex flex-row justify-around flex-wrap">
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-between"
                    >
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="flex-row gap-2 items-center mt-3">
                        <button
                          className="bg-orange-600 text-white text-xs p-2 w-fit rounded-full mr-2"
                          onClick={() => onImageUpdate(index)}
                        >
                          Atualizar
                        </button>
                        <button
                          className="border text-red-600 text-xs p-2 border-red-500 rounded-full"
                          onClick={() => onImageRemove(index)}
                        >
                          Remover
                        </button>
                      </div>
                      {/* <hr /> */}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ReactImageUploading>
        </div>
      </div>
      <div className="flex flex-col gap-5 border bg-slate-50 p-12 rounded-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setContato(!contato)}
        >
          <div className="flex gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#a20fe6"
                  d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"
                />
              </svg>
            </span>
            <span className="font-semibold text-lg"> Contato</span>
          </div>
          <div className="flex gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#36c80e"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="17.1"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
            </span>
            <span className={`${contato && "rotate-180"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#a20fe6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m112 184l144 144l144-144"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          className={`${
            !contato && "hidden"
          } flex flex-col transition-all translate-x-7`}
        >
          <span>
            Informe seu telefone de contato para eventuais emergências
          </span>
          <form onSubmit={handleSubmit(onSubmitContact)}>
            <div className="flex-col my-2">
              <label htmlFor="">Telefone</label>
              <input
                maxLength={9}
                placeholder="(xx) xxxxx-xxxx"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolPhone")}
              />
            </div>
            <div className="flex-col my-2">
              <label htmlFor="">Celular</label>
              <input
                maxLength={11}
                placeholder="(xx) xxxxx-xxxx"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
                {...register("schoolCellphone")}
              />
            </div>
            <button
              className="bg-orange-600 p-3 w-40 text-xs rounded-full text-white"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-5 border bg-slate-50 p-12 rounded-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setDocumentos(!documentos)}
        >
          <div className="flex gap-2">
            <IoDocumentText size={20} className="text-purple-700" />
            <span className="font-semibold text-lg">
              {" "}
              Documentos necessários para matrícula
            </span>
          </div>
          <div className="flex gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#36c80e"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="17.1"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
            </span>
            <span className={`${documentos && "rotate-180"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#a20fe6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m112 184l144 144l144-144"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          className={`${
            !documentos && "hidden"
          } flex flex-col transition-all translate-x-7`}
        >
          <span>
            Gestor Escolar, por favor, Informe a documentação exigida pela sua
            instituição de ensino para efetuar a matrícula:
          </span>
          <form onSubmit={handleSubmit(onSubmitDocuments)}>
            <div className="flex-col my-2">
              <label className="text-xs" htmlFor="">
                Informe documento 1 (caso haja)
              </label>
              <input
                placeholder="nome do documento"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex-col my-2">
              <label className="text-xs" htmlFor="">
                Informe documento 2 (caso haja)
              </label>
              <input
                placeholder="nome do documento"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex-col my-2">
              <label className="text-xs" htmlFor="">
                Informe documento 3 (caso haja)
              </label>
              <input
                placeholder="nome do documento"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              className="bg-orange-600 p-3 w-40 text-xs rounded-full text-white"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Minhaescola;
