import { useEffect, useState } from "react";
function Nav() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches){
      return "dark"
    }
    return "light"
  });

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
      document.getElementById("theme").style.content =' url("src/assets/sun.png")'
    } else {
      document.querySelector("html").classList.remove("dark");
      document.getElementById("theme").style.content = 'url("src/assets/moon.png")'
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <header className="h-12 w-full">
        <nav className="flex	items-center justify-center h-12 bg-cyan-500 shadow-lg dark:bg-blue-950 ">
          <a className="w-1/6 flex items-center justify-center">
            <span className=" text-xl font-extrabold text-center dark:text-white">
              Block de Notas
            </span>
          </a>
          <div className="w-5/6 h-full flex items-center justify-end">
            <button
              className="w-1/6 flex items-center justify-center "
              onClick={handleChangeTheme}
            >
              <div className="w-9 h-9 shadow-lg bg-cyan-300 hover:bg-cyan-400 rounded-full hover:dark:bg-blue-800 dark:bg-blue-600 flex items-center justify-center">
              <img
                id="theme"
                className="w-7 h-7 "
              ></img>
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
