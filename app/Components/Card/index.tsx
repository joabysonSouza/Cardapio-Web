"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImBin2 } from "react-icons/im";

interface DataProps {
  Name: string;
  Price: number;
  Url: string;
  _id: string;
}

export default function Card() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/dados");
        setData(response.data);
      } catch (error) {
        console.error("houve algum erro :", error);
      }
    };

    fetchData();
  }, [data]);

  const DeleteCard = async (_id: string) => {
    const response = await axios.delete(`http://localhost:3000/dados/${_id}`);
    return response;
  };

  return data.map((item) => (
    <div key={item._id}>
      <div className="md:max-w-80 text-xl text-slate-950 p-4 bg-gray-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:max-w-80">
        <h1 className="p-2 text-2xl font-medium">Prato: {item.Name}</h1>
        <img src={item.Url} className="w-full h-64" />
        <span className=" font-bold">Preço: R${item.Price} </span>
        <div className="flex justify-end">
          <button
            onClick={() => {
              DeleteCard(item._id);
            }}
          >
            <ImBin2 className="text-red-800" />
          </button>
        </div>
      </div>
    </div>
  ));
}
