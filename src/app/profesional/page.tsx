"use client";
import React from "react";
import { motion } from "framer-motion";

function Profesional() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100, y: -100 }} // Posición inicial fuera de la pantalla
        animate={{ opacity: 1, x: 0, y: 0 }} // Posición final en la pantalla
        transition={{ duration: 1 }} // Duración de la animación en segundos
      >
        <div className="dark:bg-gray-300 p-4 dark:text-black font-semibold text-justify text-lg max-w-4xl flex flex-col justify-center h-[500px]">
          <span className="mx-auto p-4 font-bold text-2xl tracking-widest italic font-[oswald]">
            PERFIL PROFESIONAL
          </span>
          <span className="p-2">
            Soy una persona responsable, puntual y creativa con dos años de
            experiencia en programación, destacándome en lenguajes como PHP y
            JavaScript, así como en el manejo de librerías como Next.js y React.
            Además, poseo experiencia como auxiliar de bodega, lo que me ha
            proporcionado habilidades clave en organización y gestión de
            inventarios.
          </span>
          <span className="p-2">
            Mi capacidad para trabajar en equipo y colaborar con desarrolladores
            y diseñadores se complementa con una excelente habilidad para
            resolver problemas y adaptarme a nuevos entornos y tecnologías.
            Considero que mi combinación de habilidades técnicas y experiencia
            en logística me convierte en un recurso valioso para cualquier
            proyecto.
          </span>
        </div>
      </motion.div>
    </>
  );
}

export default Profesional;
