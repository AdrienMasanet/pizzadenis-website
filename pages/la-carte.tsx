import Filters from "@/components/Menu/Filters";
import Menu from "@/components/Menu/Menu";
import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import Head from "next/head";
import usePizzaList from "@/hooks/usePizzaList";

export default function MenuPage() {
  const { filteredPizzaList } = usePizzaList();

  return (
    <>
      <Head>
        <title>Pizza Denis | La carte des pizzas au menu</title>
        <meta name="description" content="Découvrez notre carte de pizzas artisanales préparées au feu de bois avec des ingrédients frais et de qualité. Chez Pizza Denis, nous avons à cœur de vous offrir une expérience gustative unique. Consultez notre menu en ligne et contactez-nous par téléphone pour passer commande et emporter vos pizzas à déguster chez vous, sur la plage ou en vacances. Ne manquez pas nos pizzas gourmandes, nos pizzas aux fruits de mer ou nos pizzas végétariennes. Nous sommes impatients de vous régaler !" />
      </Head>
      <main className="wooden-wall py-16 p-5">
        <Title text="Nos pizzas" whiteOutline />
        <Subtitle whiteOutline>Voici la carte des pizzas que vous pouvez commander à emporter ! Elles sont préparées au feu de bois avec des ingrédients frais et délicieux. Nous vous proposons des pizzas gourmandes, des pizzas aux fruits de mer ou des pizzas végétariennes ! À vous de choisir !</Subtitle>
        <section className="max-w-screen-xl mx-auto md:px-4">
          <Filters />
          <Menu pizzas={filteredPizzaList} />
        </section>
      </main>
    </>
  );
}
