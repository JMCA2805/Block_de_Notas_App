function Footer() {
  return (
    <>
      <footer className="bg-white border-gray-300 mt-auto overflow-hidden dark:bg-gray-950 border-t dark:border-gray-800 dark:text-white">
        <span className="text-base font-extrabold px-5 ">Block de Notas</span>
        <section className="px-6 mb-2 ">
          <div className="w-72">
            <a href="https://github.com/Ochoaadev" className="flex items-center ml-2">
              <div className="w-1/2">Adolfo Ochoa:</div>
              <div className="w-1/2 flex"><img id="theme_git" className="h-6 ml-1 mr-1" alt="Logo de Github"/> Ochoaadev</div>    
            </a>
          </div>
          <div  className="w-72">
            <a href="https://github.com/JMCA2805" className="flex items-center ml-2">
              <div className="w-1/2">Jose M. Camacho:</div>
              <div className="w-1/2 flex"> <img id="theme_git" className="h-6 ml-1 mr-1" alt="Logo de Github" /> JMCA2805</div>

            </a>
          </div>
          <div  className="w-72">
            <a href="https://github.com/YetzeniaM7" className="flex items-center ml-2">
              <div className="w-1/2">Yetzenia Mendoza:</div>
              <div className="w-1/2 flex"><img id="theme_git" className="h-6 ml-1 mr-1" alt="Logo de Github" /> YetzeniaM7</div>
            </a>
          </div>
          <div  className="w-72">
            <a href="https://github.com/CJPM27" className="flex items-center ml-2">
              <div className="w-1/2">Carlos Pimiento:</div>
              <div className="w-1/2 flex"><img id="theme_git" className="h-6 ml-1 mr-1" alt="Logo de Github" /> CJPM27</div>
              
            </a>
          </div>
        </section>
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
