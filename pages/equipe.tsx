import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import Head from "next/head";
import Image from "next/image";

export default function TeamPage() {
  const pageTitle: string = "Pizza Denis | L'équipe";
  const pageDescription: string =
    "Découvrez l'équipe de choc de Pizza Denis, votre pizzeria à Saint Laurent de la Salanque. Nous sommes une équipe de passionnés qui met tout en œuvre pour vous offrir avec amour une expérience gustative unique. Chez Pizza Denis, nous avons à cœur de vous régaler avec des pizzas artisanales préparées au feu de bois avec des ingrédients frais et de qualité. Nous vous proposons des pizzas gourmandes, des pizzas aux fruits de mer ou des pizzas végétariennes. N'hésitez pas à nous contacter pour passer commande et emporter vos pizzas à déguster chez vous, sur la plage ou en vacances. Nous sommes impatients de vous régaler !";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>
      <main className="wooden-wall p-5 md:py-16">
        <Title text="L'équipe" whiteOutline />
        <Subtitle whiteOutline>
          Nous sommes une équipe de passionnés qui met tout en œuvre pour vous
          acueillir chalereusement et vous préparer des pizzas artisanales avec
          amour !
        </Subtitle>
        <section className="max-w-screen-xl mx-auto px-4"></section>
      </main>
    </>
  );
}
