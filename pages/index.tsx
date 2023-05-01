import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import MainSlider from "@/components/MainSlider/MainSlider";
import Head from "next/head";
import Image from "next/image";
import cheeseImage from "@/public/images/fromage.jpg";
import youngDenisImage from "@/public/images/denis-1984.jpeg";
import truckImage from "@/public/images/camion.jpeg";
import shopImage from "@/public/images/magasin.jpeg";
import Link from "next/link";

export default function HomePage() {
  const pageTitle: string = "Pizza Denis | Pizzas artisanales au feu de bois à emporter";
  const pageDescription: string =
    "Venez découvrir nos pizzas artisanales et savoureuses préparées avec amour au feu de bois avec des ingrédients frais et de qualité pour vous offrir une expérience gustative unique ! Située à quelques kilomètres de Perpignan, Barcarès et Canet en Roussillon, notre pizzeria est facilement accessible pour les locaux et les visiteurs de passage. Commandez et emportez votre pizza pour déguster chez vous, sur la plage ou en vacances. Ne manquez pas nos pizzas gourmandes, nos pizzas aux fruits de mer ou nos végétariennes. Jetez un oeil au menu et contactez-nous dès maintenant pour passer commande !";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>
      <main>
        <MainSlider />
        <Title text="PIZZA DENIS" whiteOutline />
        <Subtitle>Qui sommes-nous ?</Subtitle>
        <section className="md:max-w-3xl mx-auto mb-14 px-5">
          <p className="mb-5">
            Situés à Saint-Laurent de la Salanque, à quelques kilomètres de Perpignan, Barcarès et Canet en Roussillon, nous sommes une pizzeria familiale qui vous propose des pizzas artisanales et
            savoureuses préparées avec amour au feu de bois avec des ingrédients frais et de qualité pour régaler vos papilles !
          </p>{" "}
          <div className="flex flex-col-reverse items-center my-5 sm:block sm:m-0">
            <Image className="h-auto m-0 sm:mb-5 sm:ml-5 float-right rounded-lg shadow-md" src={cheeseImage} alt="Le cantal jeune délicieux que nous utilisons dans nos pizzas" width={300} />
            <p className="mb-5">
              Nous travaillons avec des produits frais et de qualité pour vous offrir une expérience gustative unique. Notre persillade est faite maison (vous nous en direz des nouvelles !) ainsi que
              notre sauce Pili-pili, sauce piquante pour les amateurs de piment 🌶️
            </p>
          </div>
          <p className="mb-5">
            Que vous soyez des riverains ou simplement de passage, vous pouvez facilement vous rendre à notre pizzeria pour prendre à emporter nos pizzas gourmandes, nos pizzas aux fruits de mer ou
            nos végétariennes.{" "}
            <Link className="font-black text-green-800 underline" href="/la-carte">
              Jetez donc un oeil à la carte
            </Link>{" "}
            et contactez-nous lors des horaires d&apos;ouverture pour passer commande !
          </p>
        </section>
        <Subtitle>L&apos;histoire de Pizza Denis</Subtitle>
        <section className="md:max-w-3xl mx-auto px-5">
          <div className="flex items-center mx-auto my-10 m-0">
            <Image className="h-auto mr-5 rounded-lg shadow-md" src={youngDenisImage} alt="Denis en 1984" width={90} />
            <p className="text-sm md:text-base italic">
              Nous sommes le 6 juin 1984 quand un jeune homme prénommé Denis, alors âgé de 20 ans, se lança dans une aventure rocambolesque, ne se souciant pas que son avenir allait être bouleversé.
            </p>
          </div>
          <div className="flex flex-col-reverse items-center my-5 sm:block sm:m-0">
            <Image className="h-auto m-0 sm:mb-5 sm:ml-5 float-right rounded-lg shadow-md" src={truckImage} alt="Le camion de Denis" width={300} />
            <p className="mb-5">
              Tout commença par l&apos;achat d&apos;un camion Citroën H.Y : il avait dans l&apos;idée de faire le tour de France avec son groupe de rock et de confectionner des sandwichs pour les
              vendre. Malheureusement, son groupe n&apos;avait pas les mêmes attentes donc pour cause de désaccord, ils mirent fin à leurs relations. Denis, décomposé, se retrouva seul avec sa femme
              et son camion... Puis un jour, son grand frère Richard lui rendit une petite visite et lui conseilla de venir voir son patron pizzaïolo situé à Perpignan, ce que Denis fît : il y resta 4
              jours consécutifs pendant lesquels il passa ses journées assis devant lui à le regarder travailler, à scruter tous ses faits et gestes dans le moindre détail sans jamais rien toucher,
              car c&apos;est ce qui lui avait ordonné de faire : <span className="italic">&quot;Assieds-toi et regardes !&quot;</span> Il y a une chose qu&apos;il faut savoir, c&apos;est qu&apos;à ce
              moment-là, Denis n&apos;avait encore jamais de sa vie dégusté une pizza, c&apos;est dire si c&apos;était un univers inconnu pour lui !
            </p>
          </div>
          <p className="mb-5">
            Après cette expérience bénéfique, Denis rentra chez lui, s&apos;entraîna sans relâche, dans un premier temps à faire la pâte, les pâtons, puis les garnins, à les faire cuire.
            <br />
            Au début, il faut bien avouer que c&apos;était chaotique mais avec de l&apos;entraînement et beaucoup de volonté, il réussit. Il finit par se lançer et commença à travailler sur les
            marchés, au Barcarés, à Pia, à Bompas, à Saint Laurent de la Salanque en face du café bleu <span className="italic">&quot;Le commerce&quot;</span> ou bien en face de la mairie, beaucoup
            s&apos;en rappellent !
          </p>
          <div className="flex flex-col-reverse items-center my-5 sm:block sm:m-0">
            <Image className="w-auto m-0 sm:mb-5 sm:mr-5 float-left rounded-lg shadow-md" src={shopImage} alt="La facade du magasin Pizza Denis de nuit" height={350} />
            <p className="mb-5">
              Avec les années, Denis se créa une réputation, un nom, une clientèle fidèle qui lui permit de se rapprocher des gens à tel point que ses clients sont devenus des amis, il les a vu
              vieillir, donner la vie pour certains, malheureusement mourir, cela fait partie des côtés du commerce. C&apos;est une expérience qui l&apos;a beaucoup enrichi humainement et qui
              perdure... Il continua à travailler pendant une dizaine d&apos;années avec son camion, à faire les marchés, jusqu&apos;au jour où il décida de vendre son camion pour pouvoir
              s&apos;installer dans un magasin à Saint Laurent de la Salanque.
              <br />
              Le 6 juin 1993, une nouvelle aventure commença : fini les déplacements, les marchés, Denis avait enfin gagné sa notoriété, une stabilité et un certain équilibre. Depuis, quelques années
              se sont encore écoulées et il travaille avec ses deux filles Charlotte et Manon, c&apos;est un père et un homme comblé ! Jamais il n&apos;aurait imaginé vivre une telle expérience, ce
              métier lui a beaucoup apporté et il en est reconnaissant !
            </p>
          </div>
          <p className="mb-10">
            Il lui reste encore quelques années avant de prendre sa retraite et en attendant, il continuera à régaler nos papilles avec ses filles 🍕 on lui souhaite encore plein de bonnes choses à
            vivre et qui sait, de vivre encore plein de belles aventures !
          </p>
        </section>
      </main>
    </>
  );
}
