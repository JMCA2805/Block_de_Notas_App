function Nav() {
  return (
    <>
      <header className="h-12 w-full">
        <nav className="flex	items-center justify-center h-12 bg-cyan-400 shadow-lg">
          <a className="w-1/6 flex items-center justify-center" >
            <span className=" text-xl font-extrabold text-center">Block de Notas</span>
          </a>
          <div className="w-5/6 h-full flex items-center justify-end">
            <button className="w-1/6 flex items-center justify-center">
              <img src="src\assets\moon.png" className="bg-cyan-200 w-10 h-10 rounded-full border-2 border-black hover:border-blue-950"></img>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
