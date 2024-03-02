"use client";
import React from "react";
import { motion } from "framer-motion";

function Experiencia() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -150, y: -150 }} // Posición inicial fuera de la pantalla
        animate={{ opacity: 1, x: 0, y: 0 }} // Posición final en la pantalla
        transition={{ duration: 1 }} // Duración de la animación en segundos
      >
        <div className="dark:bg-gray-300 p-4 dark:text-black font-semibold text-justify text-lg max-w-4xl flex flex-col justify-center h-[580px]">
          <span className="mx-auto p-4 font-bold text-2xl tracking-widest italic font-[oswald]">
            EXPERIENCIA LABORAL
          </span>
          <div className="grid grid-cols-2 justify-evenly items-center">
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }} // Posición inicial fuera de la pantalla
              animate={{ opacity: 1, x: 0, y: 0 }} // Posición final en la pantalla
              transition={{ duration: 2 }} // Duración de la animación en segundos
            >
              {/* SYGESCOL */}
              <div className="p-2 w-full">
                <h2 className="text-center font-bold">
                  Sistemas e Informática Ivhorsnet S.A.S
                </h2>
                <h6 className="text-base">
                  <span className="font-bold"> CARGO:</span> Desarrollador
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">JEFE INMEDIATO:</span> John
                  Delgado
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">TELEFONO:</span>{" "}
                  <a href="tel:3216393736" className="text-black">
                    3216393736
                  </a>
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">TIEMPO LABORADO:</span> 28 de
                  octubre 2021 - 5 de marzo 2023
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">FUNCIONES REALIZADAS:</span> A mí
                  cargo tenía funciones como: <br /> Desarrollo de páginas web,
                  soporte a los distintos clientes de manera (Presencial,
                  virtual, telefónica).
                </h6>
              </div>
            </motion.div>
            {/* CONTACTAMOS */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }} // Posición inicial fuera de la pantalla
              animate={{ opacity: 1, x: 0, y: 0 }} // Posición final en la pantalla
              transition={{ duration: 2 }} // Duración de la animación en segundos
            >
              <div className="p-2 w-full">
                <h2 className="text-center font-bold">CONTACTAMOS</h2>
                <h6 className="text-base">
                  <span className="font-bold"> CARGO:</span> Operador Logístico
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">JEFE INMEDIATO:</span> Karol
                  Gisell Ospina Granobles
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">TELEFONO:</span>{" "}
                  <a href="tel:3223123619" className="text-black">
                    3223123619
                  </a>
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">TIEMPO LABORADO:</span> 10 de mayo
                  2023 - 20 mayo 2023
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">FUNCIONES REALIZADAS:</span> A mí
                  cargo tenía funciones como: <br /> Carpe y Descarpe de las
                  distintas mulas de la empresa, inventario y ordenamiento de
                  los distintos productos a entregar.
                </h6>
              </div>
            </motion.div>
            {/* GRAN ALIANZA */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 0 }} // Posición inicial fuera de la pantalla
              animate={{ opacity: 1, x: 0, y: 0 }} // Posición final en la pantalla
              transition={{ duration: 2 }} // Duración de la animación en segundos
              className="col-span-2"
            >
              <div className="p-2 w-full">
                <h2 className="text-center font-bold">
                  Distribuidora y Cacharrería Gran Alianza
                </h2>
                <h6 className="text-base">
                  <span className="font-bold"> CARGO:</span> Auxiliar de bodega
                  y atención de clientes
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">JEFE INMEDIATO:</span> Diego Vera
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">TELEFONO:</span>{" "}
                  <a href="tel:3175004407" className="text-black">
                    3175004407
                  </a>
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">TIEMPO LABORADO:</span> 11 de
                  enero 2024 - 17 febrero de 2024
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">FUNCIONES REALIZADAS:</span> A mí
                  cargo tenía funciones como: <br /> Revisar inventario y
                  rotación de los distintos productos, preparar los distintos
                  pedidos a ser despachados, surtir las distintas secciones del
                  local
                </h6>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Experiencia;
