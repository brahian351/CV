"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-slate-800 p-4 dark:bg-white">
        <hr className="border-white max-w-lg mx-auto dark:border-black border-2 " />
        <div className="flex justify-center gap-4 p-2">
          <div className="flex gap-4 p-2 items-center">
            {/* GITHUB */}
            <div
              className="p-2 rounded-md h-fit bg-gray-500 dark:bg-black cursor-pointer"
              onClick={() => {
                window.open("https://github.com/brahian351", "_blank");
              }}
            >
              <FaGithub size="2em" color="white" />
            </div>
            {/* LINKEDIN */}
            <div
              className="p-2 rounded-md h-fit bg-gray-500 dark:bg-black cursor-pointer"
              onClick={() => {
                window.open(
                  "www.linkedin.com/in/brahian-orozco-27709a251",
                  "_blank"
                );
              }}
            >
              <FaLinkedinIn size="2em" color="white" />
            </div>
          </div>
          {/* DATOS PERSONALES */}
          <div className="p-2 flex flex-col">
            <span className="text-gray-300 dark:text-black font-bold">
              Brahian Andres Orozco Salguero
            </span>
            <span className="text-gray-300 dark:text-black">
              Cra 4 bis #75-50 Ibagué - Tolima
            </span>
            <div>
              <span className="font-bold text-gray-300 dark:text-black">
                Tel:
              </span>
              <a
                href="tel:3022462456"
                className="text-gray-300 dark:text-black underline-0"
              >
                {" "}
                +57 302 2462456
              </a>
            </div>
            <div>
              <span className="font-bold text-gray-300 dark:text-black">
                Email:
              </span>
              <a
                href="mailto:brahiangamer@gmail.com"
                className="text-gray-300 dark:text-black underline-0"
              >
                {" "}
                brahiangamer@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
