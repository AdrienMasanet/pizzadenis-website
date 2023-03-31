import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import pizzaboxImage from "@/public/images/pizzabox.png";
import Head from "next/head";
import Image from "next/image";
import { useState, useLayoutEffect } from "react";

export default function Error404Page() {
  const [footerHeight, setFooterHeight] = useState<number>(0);

  // Get the height of the footer to set the height of <main> and fill the viewport with the content
  useLayoutEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) setFooterHeight(footer.offsetHeight);
  }, [footerHeight]);

  return (
    <>
      <Head>
        <title>Pizza Denis | La carte des pizzas au menu</title>
        <meta name="description" content="Découvrez notre carte de pizzas artisanales préparées au feu de bois avec des ingrédients frais et de qualité. Chez Pizza Denis, nous avons à cœur de vous offrir une expérience gustative unique. Consultez notre menu en ligne et contactez-nous par téléphone pour passer commande et emporter vos pizzas à déguster chez vous, sur la plage ou en vacances. Ne manquez pas nos pizzas gourmandes, nos pizzas aux fruits de mer ou nos pizzas végétariennes. Nous sommes impatients de vous régaler !" />
      </Head>
      <main className="wooden-wall p-5 flex flex-col justify-center items-center" style={{ minHeight: `calc(100vh - ${footerHeight}px)` }}>
        <Title text="Oups..." whiteOutline />
        <Subtitle whiteOutline>Il semblerait que cette page n&apos;existe pas !</Subtitle>
        <Image src={pizzaboxImage} alt="Boîte à pizza vide" className="my-20 drop-shadow-md select-none" />
      </main>
    </>
  );
}
