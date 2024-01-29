import React, { useRef } from "react";
import Input from "../Input";
import Card from "../Card";
import axios, { AxiosPromise } from "axios";

interface ModalProps {
  isOpen: boolean;
  ToggleModal: () => void;
}

export default function Modal({ isOpen, ToggleModal }: ModalProps) {
  const NameRef = useRef<HTMLInputElement | null>(null);
  const ValueRef = useRef<HTMLInputElement | null>(null);
  const ImgRef = useRef<HTMLInputElement | null>(null);

  const CreateCards = async () => {
    if (
      !NameRef.current?.value ||
      !ValueRef.current?.value ||
      !ImgRef.current?.value
    ) {
      return;
    } else {
      const response = await axios.post("http://localhost:3000/dados", {
        Name: NameRef.current?.value,
        Url: ImgRef.current?.value,
        Price: ValueRef.current?.value,
      });
    }

    ToggleModal();
  };

  if (isOpen == true) {
    return (
      <div className=" bg-black bg-opacity-50 w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center">
        <div className="text-black bg-slate-50 w-2/3 h-auto ">
          <div className="flex justify-between m-3">
            <h1> adicionar ao cardapio</h1>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
              onClick={ToggleModal}
            >
              fechar
            </button>
          </div>
          <Input name="Nome Do prato" inputRef={NameRef} />
          <Input name="Url Da Imagem" inputRef={ImgRef} />
          <Input name="Valor Do prato" inputRef={ValueRef} />

          <button
            onClick={CreateCards}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
          >
            Criar
          </button>
        </div>
      </div>
    );
  }

  return null;
}
