import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/images/logo.png";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";
import socialFacebookImage from "@/public/images/social/facebook.svg";
import socialYoutubeImage from "@/public/images/social/youtube.svg";
import socialInstagramImage from "@/public/images/social/instagram.svg";
import socialSoundcloudImage from "@/public/images/social/soundcloud.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-stone-900 text-white border-t-4 border-white/85 border-double" id="footer">
      <div className="max-w-screen-md mx-auto p-4 flex flex-col md:flex-row justify-evenly items-center md:gap-10">
        <nav className="order-2 md:order-1 flex-1 flex flex-col items-center md:items-end">
          <Link className="w-fit hoverable white" href="/">
            Accueil
          </Link>
          <Link className="w-fit hoverable white" href="la-carte">
            La carte des pizzas
          </Link>
        </nav>
        <Image src={logoImage} alt="Pizza Denis depuis 1984" height={150} className="order-1 md:order-2 flex-1 my-10 invert" />
        <nav className="order-3 md:order-3 flex-1 flex flex-col items-center md:items-start mb-10 md:mb-0">
          <Link className="w-fit hoverable white" href="equipe">
            L&apos;équipe
          </Link>
          <Link className="w-fit hoverable white" href="contact">
            Nous contacter
          </Link>
        </nav>
      </div>
      <div className="w-fit mx-auto mb-14 flex-1 flex items-center gap-5">
        <SocialMediaIcon name="Facebook" link="https://www.facebook.com/people/Pizza-Denis/100054484358825/?locale=fr_FR" image={socialFacebookImage} />
        <SocialMediaIcon name="Youtube" link="https://www.youtube.com/@pizzadenis/videos" image={socialYoutubeImage} />
        <SocialMediaIcon name="Soundcloud" link="https://soundcloud.com/pizzadenis" image={socialSoundcloudImage} />
        <SocialMediaIcon name="Instagram" link="https://www.instagram.com" image={socialInstagramImage} />
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
