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
        <nav className="flex	items-center justify-center h-12 bg-cyan-400 shadow-lg dark:bg-blue-950 ">
          <a className="w-1/6 flex items-center justify-center">
            <span className=" text-xl font-extrabold text-center dark:text-white">
              Block de Notas
            </span>
          </a>
          <div className="w-5/6 h-full flex items-center justify-end">
            <button
              className="w-1/6 flex items-center justify-center"
              onClick={handleChangeTheme}
            >
              <img
                id="theme"
                className="bg-cyan-200 w-10 h-10 rounded-full border-2 border-black hover:border-blue-950 dark:border-white dark:hover:border-cyan-400 dark:bg-blue-400"
              ></img>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
