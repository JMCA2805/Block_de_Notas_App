import React from "react";
import "../footer.css";
import FooterContent from "./footer-content";

function Footer() {
  return (
    <>
      <footer className="bg-white border-gray-300 mt-auto overflow-hidden dark:bg-gray-950 border-t dark:border-gray-800 dark:text-white">
        <span className="text-base font-extrabold px-5 ">Block de Notas</span>
        <FooterContent />
        <div className="flex justify-center items-center bg-cyan-500 h-8 dark:bg-blue-950 ">
          <div className="text-center text-gray-700 dark:text-gray-300">
            Block de Notas © 2023 Copyright
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
