
"use client"
import { LegacyRef, useState } from "react";

export interface InputProps {
  name: string;
  inputRef: any

}

export default function Input({ name, inputRef}: InputProps) {
; // Adicione um estado local

  

  return (
    <div className="mb-6">
      <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">
        {name}
      </label>
      <input
        ref={inputRef}
        type="text"
        className="block w-full p-4 border-solid border-4 rounded-md  border-gray-400 focus:border-blue-700 "
      />
    </div>
  );
}
