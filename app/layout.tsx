import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import "./globals.css";

const poppins= Poppins({ subsets: ["latin"] , weight:["300", "800"]});

export const metadata: Metadata = {
  title: "Cardapio do dia",
  description: "Adicione o novo prato no cardapio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
