import { useState } from "react";

const Hamburger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-menu"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};

const X = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

const ToggleNavbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="sm:hidden flex">
      <button
        onClick={() => setToggleNav(!toggleNav)}
        className="transiton-all"
      >
        {toggleNav ? <X /> : <Hamburger />}
      </button>

      <div
        className={`${
          !toggleNav && "hidden"
        } top-[103%] -right-2 -left-2 h-52 absolute bg-background text-primary transition-all`}
      >
        <ul onClick={() => setToggleNav(false)} className="flex flex-col justify-center items-center gap-4 py-5">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mi</a>
          <a href="#proyectos">Proyectos</a>
          <a
            href="#contacto"
            className="bg-primary dark:bg-accent 
            text-white rounded-full py-2 px-3 hover:text-white 
            hover:scale-105 saturate-150 transition-all duration-150"
          >
            Contacto
          </a>
        </ul>
      </div>
    </div>
  );
};

export default ToggleNavbar;
