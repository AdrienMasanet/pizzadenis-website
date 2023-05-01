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
        <title>Pizza Denis | Page non trouvée</title>
      </Head>
      <main className="wooden-wall p-5 md:py-16 flex flex-col justify-center items-center" style={{ minHeight: `calc(100vh - ${footerHeight}px)` }}>
        <Title text="Oups..." whiteOutline />
        <Subtitle whiteOutline>Il semblerait que cette page n&apos;existe pas !</Subtitle>
        <Image src={pizzaboxImage} alt="Boîte à pizza vide" className="my-auto drop-shadow-md select-none" height={400} />
      </main>
    </>
  );
}
