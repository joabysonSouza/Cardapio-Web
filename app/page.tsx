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
      <header className="md:w-full h-32 flex flex-col items-center sm:h-64">
        <h1 className=" md:text-black text-4xl font-medium sm:text-6xl mt-4">Menu Do dia</h1>
       
        <button
          className="md: w-56 h-16 mt-8 bg-blue-500  flex-wrap hover:bg-blue-700 text-white font-bold  rounded-3xl sm:w-auto ml-8  sm:px-6 sm:h-16"
          onClick={ToggleModal}
        >
          Cadrastar novo Item
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
