"use client";
import Card from "./Components/Card";
import { ReactElement, useState } from "react";
import Modal from "./Components/Modal";
import axios from "axios";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [cards, setCards] = useState<ReactElement[]>([]);

  const ToggleModal = () => {
    setOpenModal(!openModal);
  };
  
  

  return (
    <>
      <header className=" w-full flex justify-between p-4 m-4">
        <h1 className=" text-black text-6xl font-medium ">Menu Do dia</h1>
        <button
          className="md: w-auto bg-blue-500 mr-6 px-6 hover:bg-blue-700 text-white font-bold  rounded-3xl "
          onClick={ToggleModal}
        >
          Cadrastar Item
        </button>
      </header>
      <main className="flex gap-3 flex-wrap m-10 absolute">
        <Modal
          isOpen={openModal}
          ToggleModal={() => setOpenModal(!openModal)}
         
        />

        <Card />

      
      </main>
    </>
  );
}
