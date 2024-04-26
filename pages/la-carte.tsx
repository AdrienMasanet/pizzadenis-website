import Filters from "@/components/Menu/Filters";
import Menu from "@/components/Menu/Menu";
import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import AccordionMenu from "@/components/AccordionMenu/AccordionMenu";
import Head from "next/head";
import usePizzaList from "@/hooks/usePizzaList";
import Ingredient from "@/interfaces/Ingredient";
import getSupplements from "@/utils/getSupplements";

export default function MenuPage() {
  const { filteredPizzaList } = usePizzaList();
  const pageTitle: string = "Pizza Denis | La carte des pizzas au menu";
  const pageDescription: string =
    "Découvrez notre carte de pizzas artisanales préparées au feu de bois avec des ingrédients frais et de qualité. Chez Pizza Denis, nous avons à cœur de vous offrir une expérience gustative unique. Consultez notre menu en ligne et contactez-nous par téléphone pour passer commande et emporter vos pizzas à déguster chez vous, sur la plage ou en vacances. Ne manquez pas nos pizzas gourmandes, nos pizzas aux fruits de mer ou nos pizzas végétariennes. Nous sommes impatients de vous régaler !";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>
      <main className="wooden-wall p-5 md:py-16">
        <Title text="Nos pizzas" whiteOutline />
        <Subtitle whiteOutline>
          Voici la carte des pizzas que vous pouvez commander à emporter ! Elles sont préparées au feu de bois avec des ingrédients frais et délicieux. Nous vous proposons des pizzas gourmandes, des
          pizzas aux fruits de mer ou des pizzas végétariennes, à vous de choisir !
        </Subtitle>
        <section className="max-w-screen-xl mx-auto">
          <AccordionMenu
            items={[
              {
                title: "Boissons",
                children: (
                  <ul className="text-sm">
                    <li>
                      Bouteille de vin : <span className="underline">6€</span>
                    </li>
                    <li>
                      Bouteille de soda : <span className="underline">3€</span>
                    </li>
                    <li>
                      Canette de soda : <span className="underline">2€</span>
                    </li>
                  </ul>
                ),
              },
              {
                title: "Suppléments",
                children: (
                  <ul className="text-sm">
                    {Object.keys(getSupplements()).map((supplementsByPrice) => (
                      <li key={supplementsByPrice}>
                        {getSupplements()[supplementsByPrice].map((supplement: Ingredient, index) => (
                          <span key={supplement.name}>
                            &nbsp;
                            {supplement.name}
                            {index < getSupplements()[supplementsByPrice].length - 1 ? ", " : ""}
                          </span>
                        ))}
                        &nbsp;: <span className="underline">{supplementsByPrice}€</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ]}
          />
          <Filters />
          <Menu pizzas={filteredPizzaList} />
        </section>
      </main>
    </>
  );
}
