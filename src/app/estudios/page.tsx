"use client";
import React from "react";
import { motion } from "framer-motion";

function Estudios() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100, y: -100 }} // Posición inicial fuera de la pantalla
        animate={{ opacity: 1, x: 0, y: 0 }} // Posición final en la pantalla
        transition={{ duration: 1 }} // Duración de la animación en segundos
      >
        <div className="dark:bg-gray-300 p-4 dark:text-black font-semibold text-justify text-lg max-w-4xl flex flex-col justify-center h-[500px]">
          <span className="mx-auto p-4 font-bold text-2xl tracking-widest italic font-[oswald]">
            ESTUDIOS
          </span>
          <div className="grid grid-cols-2 justify-evenly items-center">
            {/* ESTUDIO SECUNDARIOS */}
            <div className="p-2 font-bold ">Estudios Secundarios</div>
            <div className="p-2">
              Bachiller técnico <br />
              Institución Educativa Técnica San José <br />
              Ibagué - Tolima <br />
              05/12/2018
            </div>
            {/* ESTUDIOS UNIVERSITARIOS */}
            <div className="p-2 font-bold">Estudios Universitarios</div>
            <div className="p-2">
              Ingenieria en Sistemas <br />
              Universidad del Tolima <br />
              Ibagué - Tolima <br />
              En curso (Semestre III)
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Estudios;
