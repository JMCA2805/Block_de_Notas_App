function Footer() {
  return (
    <>
      <footer className="bg-cyan-400 mt-auto border-t-4 overflow-hidden">
        <span className="text-base font-extrabold px-5 ">Block de Notas</span>
        <section>
          <div className="w-72">
            <a href="https://github.com/Ochoaadev" className="flex items-center ml-2 ">
              Adolfo Ochoa:
              <img src="src\assets\GitHub_Black.png" className="h-6 ml-1 mr-1" alt="Logo de Github"/> Ochoaadev
            </a>
          </div>
          <div  className="w-72">
            <a href="https://github.com/JMCA2805" className="flex items-center ml-2">
              Jose M. Camacho:
              <img src="src\assets\GitHub_Black.png" className="h-6 ml-1 mr-1" alt="Logo de Github" /> JMCA2805
            </a>
          </div>
          <div  className="w-72">
            <a href="https://github.com/YetzeniaM7" className="flex items-center ml-2">
              Yetzenia Mendoza:
              <img src="src\assets\GitHub_Black.png" className="h-6 ml-1 mr-1" alt="Logo de Github" /> YetzeniaM7
            </a>
          </div>
          <div  className="w-72">
            <a href="https://github.com/CJPM27" className="flex items-center ml-2">
              Carlos Pimiento:
              <img src="src\assets\GitHub_Black.png" className="h-6 ml-1 mr-1" alt="Logo de Github" /> CJPM27
            </a>
          </div>
        </section>
        <div className="flex justify-center items-center bg-blue-950 h-8">
          <div className="text-center text-gray-200">
            Block de Notas © 2023 Copyright
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
