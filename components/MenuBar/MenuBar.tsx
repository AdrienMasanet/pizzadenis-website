import MenuBarItem from "./MenuBarItem";
import { useState, useLayoutEffect } from "react";

const MenuBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkViewportWidth = () => {
    console.log(window.innerWidth);
    if (typeof window !== "undefined") {
      window.innerWidth >= 768 ? setIsSmallScreen(false) : setIsSmallScreen(true);
    }
  };

  const switchPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.location.pathname = e.target.value;
  };

  useLayoutEffect(() => {
    checkViewportWidth();
    window.addEventListener("resize", checkViewportWidth);
    return () => {
      window.removeEventListener("resize", checkViewportWidth);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <header className="flex justify-center">
        <select value={window.location.pathname} className="fixed w-5/6 p-2 top-5 text-center font-roastchicken rounded-lg bg-stone-50/60 border border-black/20 backdrop-blur-sm shadow-lg z-50 uppercase outline-none" onChange={switchPage}>
          <option value="/">Accueil</option>
          <option value="/la-carte">La carte des pizzas</option>
          <option value="/equipe">L&apos;équipe</option>
          <option value="/contact">Nous contacter</option>
        </select>
      </header>
    );
  }

  return (
    <header className="flex justify-center">
      <nav className="menubar fixed w-fit flex p-2 top-5 gap-5 justify-center text-center font-roastchicken rounded-lg bg-stone-50/60 border border-black/20 backdrop-blur-sm shadow-lg z-50 uppercase">
        <MenuBarItem text="Accueil" link="/" />
        <hr className="w-2 bg-black border border-black  m-auto" />
        <MenuBarItem text="La carte des pizzas" link="la-carte" />
        <hr className="w-2 bg-black border border-black  m-auto" />
        <MenuBarItem text="L'équipe" link="equipe" />
        <hr className="w-2 bg-black border border-black  m-auto" />
        <MenuBarItem text="Nous contacter" link="contact" />
      </nav>
    </header>
  );
};

export default MenuBar;
