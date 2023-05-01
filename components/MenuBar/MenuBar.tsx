import MenuBarItem from "./MenuBarItem";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logoImage from "@/public/images/logo.png";

const MenuBar = () => {
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutsideMobileMenu = useCallback(
    (event: MouseEvent) => {
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen]
  );

  const checkViewportWidth = useCallback(() => {
    if (typeof window !== "undefined") {
      window.innerWidth >= 768 ? setIsSmallScreen(false) : setIsSmallScreen(true);
    }
  }, []);

  useEffect(() => {
    checkViewportWidth();
    window.addEventListener("resize", checkViewportWidth);
    window.addEventListener("click", handleClickOutsideMobileMenu);
    return () => {
      window.removeEventListener("resize", checkViewportWidth);
      window.removeEventListener("click", handleClickOutsideMobileMenu);
    };
  }, [handleClickOutsideMobileMenu, checkViewportWidth]);

  if (isSmallScreen) {
    return (
      <header className="pb-12">
        <div className="-top-px z-30 w-full fixed bg-stone-50/80 backdrop-blur-sm">
          <div className={`${isMobileMenuOpen ? "" : "border-b border-black/20 shadow-md transition-all duration-700 delay-500"} px-4 py-2 flex justify-between align-middle`}>
            <Image
              className="select-none"
              src={logoImage}
              alt="Pizza Denis depuis 1984"
              width={50}
              priority
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push("/");
              }}
            />
            <div
              className="relative w-8 h-8 my-auto transition-all duration-300 ease-out"
              onClick={(event) => {
                event.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              style={{ rotate: isMobileMenuOpen ? "0deg" : "-180deg" }}
            >
              <svg
                className="absolute transition-[opacity,transform] duration-300"
                viewBox="0 0 60 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: isMobileMenuOpen ? "0" : "1", transform: isMobileMenuOpen ? "scale(0)" : "scale(1)" }}
              >
                <line x1="10" y1="15" x2="50" y2="15" />
                <line x1="10" y1="30" x2="50" y2="30" />
                <line x1="10" y1="45" x2="50" y2="45" />
              </svg>
              <svg
                className="absolute transition-[opacity,transform] duration-300"
                viewBox="0 0 60 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: !isMobileMenuOpen ? "0" : "1", transform: !isMobileMenuOpen ? "scale(0)" : "scale(1)" }}
              >
                <line x1="15" y1="15" x2="45" y2="45" />
                <line x1="45" y1="15" x2="15" y2="45" />
              </svg>
            </div>
          </div>
          <nav
            ref={mobileMenuRef}
            className={`${isMobileMenuOpen ? "border-b border-black/20 shadow-2xl" : "py-0 shadow-none"} transition-all duration-700 overflow-hidden select-none`}
            style={{ maxHeight: isMobileMenuOpen ? mobileMenuRef.current?.scrollHeight + "px" : "0px" }}
          >
            <ul className="flex flex-col gap-5 w-fit mx-auto pt-5 pb-10 text-center font-bignoodletitling text-lg select-none">
              <MenuBarItem text="Accueil" link="/" onClickCallback={() => setIsMobileMenuOpen(false)} />
              <MenuBarItem text="La carte des pizzas" link="/la-carte" onClickCallback={() => setIsMobileMenuOpen(false)} />
              {/*<MenuBarItem text="L'équipe" link="/equipe" onClickCallback={() => setIsMobileMenuOpen(false)} />*/}
              <MenuBarItem text="Nous contacter" link="/contact" onClickCallback={() => setIsMobileMenuOpen(false)} />
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="flex justify-center">
      <nav className="menubar fixed w-fit flex p-3 px-7 top-5 gap-10 justify-center text-2xl text-center font-roastchicken rounded-lg bg-stone-50/60 border border-black/20 backdrop-blur-sm shadow-lg z-50 uppercase">
        <MenuBarItem text="Accueil" link="/" />
        <hr className="w-2 bg-black border border-black  m-auto" />
        <MenuBarItem text="La carte des pizzas" link="/la-carte" />
        {/*
        <hr className="w-2 bg-black border border-black  m-auto" />
        <MenuBarItem text="L'équipe" link="/equipe" />
        */}
        <hr className="w-2 bg-black border border-black  m-auto" />
        <MenuBarItem text="Nous contacter" link="/contact" />
      </nav>
    </header>
  );
};

export default MenuBar;
