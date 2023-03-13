import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/images/logo.png";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className="w-full bg-stone-900 text-white border-t-4 border-white/50 border-double" id="footer">
      <div className="max-w-screen-md mx-auto p-4 flex justify-evenly items-center md:gap-10">
        <nav className="flex-1 flex flex-col items-end">
          <Link className="w-fit hoverable white" href="/">
            Accueil
          </Link>
          <Link className="w-fit hoverable white" href="la-carte">
            La carte des pizzas
          </Link>
          <Link className="w-fit hoverable white" href="equipe">
            L&apos;équipe
          </Link>
          <Link className="w-fit hoverable white" href="contact">
            Nous contacter
          </Link>
        </nav>
        <Image src={logoImage} alt="Pizza Denis depuis 1984" height={150} className="flex-1 my-10 invert" />
        <div className="flex-1">
          <SocialMedia />
        </div>
      </div>
      <hr className="my-1 opacity-10" />
      <p className="w-fit mx-auto py-1 text-center text-stone-600">
        <a className="hoverable white text-xs" href="https://adrienmasa.net">
          Fait avec ♥ par Adrien Masanet
        </a>
      </p>
    </footer>
  );
};

export default Footer;
