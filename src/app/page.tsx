"use client";
import Image from "next/image";
import Footer from "./footer/page";
import { useState } from "react";
import Profesional from "./profesional/page";
export default function Home() {
  const [pagina, setPagina] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-4xl">
        <div className="mx-auto w-full top-0" id="Imagen Cabecera">
          <Image
            src={"/portada.webp"}
            alt="portada"
            className="max-w-4xl h-80"
            width={1250}
            height={256}
          />
        </div>
        <div className="w-full bg-slate-800 font-serif text-white  dark:bg-white p-2 flex flex-row justify-evenly dark:text-black">
          <div
            className={`cursor-pointer ${
              pagina == "profesional" ? "font-bold" : ""
            }`}
            onClick={() => {
              setPagina("profesional");
            }}
          >
            Perfil Profesional
          </div>
          <div
            className={`cursor-pointer ${
              pagina == "estudios" ? "font-bold" : ""
            }`}
            onClick={() => {
              setPagina("estudios");
            }}
          >
            Estudios
          </div>
          <div
            className={`cursor-pointer ${
              pagina == "experiencia" ? "font-bold" : ""
            }`}
            onClick={() => {
              setPagina("experiencia");
            }}
          >
            Experiencia Laboral
          </div>
          <div
            className={`cursor-pointer ${
              pagina == "referencia" ? "font-bold" : ""
            }`}
            onClick={() => {
              setPagina("referencia");
            }}
          >
            Referencias
          </div>
          <div
            className={`cursor-pointer ${pagina == "anexo" ? "font-bold" : ""}`}
            onClick={() => {
              setPagina("anexo");
            }}
          >
            Anexos
          </div>
        </div>
        <div className="">
          {pagina && pagina == "profesional" ? (
            <Profesional />
          ) : pagina == "estudios" ? (
            ""
          ) : pagina == "experiencia" ? (
            ""
          ) : pagina == "referencia" ? (
            ""
          ) : pagina == "anexo" ? (
            ""
          ) : (
            <div className="dark:bg-gray-400 h-[500px]"></div>
          )}
        </div>
        <Footer />
      </div>
    </main>
  );
}
