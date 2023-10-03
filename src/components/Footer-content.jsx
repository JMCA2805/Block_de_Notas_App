import React from "react";

function FooterContent() {
  return (
    <section className="px-6 mb-2 flex footer-container">
      <div className="w-72 footer-item">
        <a href="https://github.com/Ochoaadev" className="flex items-center ml-2">
          <div className="w-1/2">Adolfo Ochoa:</div>
          <div className="w-1/2 flex"><img id="theme_git" className="h-6 ml-1 mr-1" alt="Logo de Github" /> Ochoaadev</div>
        </a>
      </div>
      <div className="w-72 footer-item">
        <a href="https://github.com/JMCA2805" className="flex items-center ml-2">
          <div className="w-1/2">Jose M. Camacho:</div>
          <div className="w-1/2 flex"> <img id="theme_git" className="h-6 ml-1 mr-1" alt="Logo de Github" /> JMCA2805</div>
        </a>
      </div>
      <div className="w-72 footer-item">
        <a href="https://github.com/YetzeniaM7" className="flex items-center ml-2">
          <div className="w-1/2">Yetzenia Mendoza:</div>
          <div className="w-1/2 flex"><img id="theme_git" className="h-6 ml-1 mr-1" alt="Logo de Github" /> YetzeniaM7</div>
        </a>
      </div>
      <div className="w-72 footer-item">
        <a href="https://github.com/CJPM27" className="flex items-center ml-2">
          <div className="w-1/2">Carlos Pimiento:</div>
          <div className="w-1/2 flex"><img id="theme_git" className="h-6 ml-1 mr-1" alt="Logo de Github" /> CJPM27</div>
        </a>
      </div>
    </section>
  );
}

export default FooterContent;