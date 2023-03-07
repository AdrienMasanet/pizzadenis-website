import MenuBarItem from "./MenuBarItem";

const MenuBar = () => {
  return (
    <header className="flex justify-center">
      <nav className="menubar fixed w-fit flex p-2 my-2 gap-5 justify-center text-center font-roastchicken rounded-lg bg-stone-50/60 border border-black/20 backdrop-blur-sm shadow-lg z-10 uppercase">
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
