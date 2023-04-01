import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import MainSlider from "@/components/MainSlider/MainSlider";
import Head from "next/head";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Pizza Denis</title>
        <meta name="description" content="Venez découvrir nos pizzas artisanales et savoureuses préparées avec amour au feu de bois avec des ingrédients frais et de qualité pour vous offrir une expérience gustative unique ! Située à quelques kilomètres de Perpignan, Barcarès et Canet en Roussillon, notre pizzeria est facilement accessible pour les locaux et les visiteurs de passage. Commandez et emportez votre pizza pour déguster chez vous, sur la plage ou en vacances. Ne manquez pas nos pizzas gourmandes, nos pizzas aux fruits de mer ou nos végétariennes. Jetez un oeil au menu et contactez-nous dès maintenant pour passer commande !" />
      </Head>
      <main>
        <MainSlider />
        <Title text="PIZZA DENIS" whiteOutline />
        <Subtitle>Bienvenue sur notre site</Subtitle>
        <section className="max-w-screen-xl mx-auto px-4 my-24">
          <p className="mb-5">Magna Lorem et amet duis et mollit tempor id. Proident occaecat sunt aute excepteur quis duis proident sint. Culpa elit ut sint reprehenderit eu in nulla id qui. Sint voluptate aliqua eiusmod officia magna ut irure velit culpa quis nostrud fugiat. Dolore minim proident minim non officia ex ex occaecat ea aliquip. Fugiat est qui veniam et magna magna laboris. Magna id nostrud fugiat sint nostrud ut. Aliquip irure esse culpa deserunt ut reprehenderit amet velit. Lorem proident esse minim irure elit dolor deserunt cupidatat. Sit aute velit dolor mollit ut dolore qui in. Irure cillum minim amet ut velit laborum eiusmod minim occaecat exercitation proident voluptate esse cillum. Aliquip enim dolor ut eiusmod enim. Ut proident laboris do occaecat tempor enim consequat duis fugiat nostrud elit tempor commodo. Labore laboris velit occaecat commodo commodo. Sunt dolore sint deserunt fugiat magna commodo elit laborum consectetur Lorem.</p>
          <p className="mb-5">Magna Lorem et amet duis et mollit tempor id. Proident occaecat sunt aute excepteur quis duis proident sint. Culpa elit ut sint reprehenderit eu in nulla id qui. Sint voluptate aliqua eiusmod officia magna ut irure velit culpa quis nostrud fugiat. Dolore minim proident minim non officia ex ex occaecat ea aliquip. Fugiat est qui veniam et magna magna laboris. Magna id nostrud fugiat sint nostrud ut. Aliquip irure esse culpa deserunt ut reprehenderit amet velit. Lorem proident esse minim irure elit dolor deserunt cupidatat. Sit aute velit dolor mollit ut dolore qui in. Irure cillum minim amet ut velit laborum eiusmod minim occaecat exercitation proident voluptate esse cillum. Aliquip enim dolor ut eiusmod enim. Ut proident laboris do occaecat tempor enim consequat duis fugiat nostrud elit tempor commodo. Labore laboris velit occaecat commodo commodo. Sunt dolore sint deserunt fugiat magna commodo elit laborum consectetur Lorem.</p>
          <p className="mb-5">Magna Lorem et amet duis et mollit tempor id. Proident occaecat sunt aute excepteur quis duis proident sint. Culpa elit ut sint reprehenderit eu in nulla id qui. Sint voluptate aliqua eiusmod officia magna ut irure velit culpa quis nostrud fugiat. Dolore minim proident minim non officia ex ex occaecat ea aliquip. Fugiat est qui veniam et magna magna laboris. Magna id nostrud fugiat sint nostrud ut. Aliquip irure esse culpa deserunt ut reprehenderit amet velit. Lorem proident esse minim irure elit dolor deserunt cupidatat. Sit aute velit dolor mollit ut dolore qui in. Irure cillum minim amet ut velit laborum eiusmod minim occaecat exercitation proident voluptate esse cillum. Aliquip enim dolor ut eiusmod enim. Ut proident laboris do occaecat tempor enim consequat duis fugiat nostrud elit tempor commodo. Labore laboris velit occaecat commodo commodo. Sunt dolore sint deserunt fugiat magna commodo elit laborum consectetur Lorem.</p>
          <p className="mb-5">Magna Lorem et amet duis et mollit tempor id. Proident occaecat sunt aute excepteur quis duis proident sint. Culpa elit ut sint reprehenderit eu in nulla id qui. Sint voluptate aliqua eiusmod officia magna ut irure velit culpa quis nostrud fugiat. Dolore minim proident minim non officia ex ex occaecat ea aliquip. Fugiat est qui veniam et magna magna laboris. Magna id nostrud fugiat sint nostrud ut. Aliquip irure esse culpa deserunt ut reprehenderit amet velit. Lorem proident esse minim irure elit dolor deserunt cupidatat. Sit aute velit dolor mollit ut dolore qui in. Irure cillum minim amet ut velit laborum eiusmod minim occaecat exercitation proident voluptate esse cillum. Aliquip enim dolor ut eiusmod enim. Ut proident laboris do occaecat tempor enim consequat duis fugiat nostrud elit tempor commodo. Labore laboris velit occaecat commodo commodo. Sunt dolore sint deserunt fugiat magna commodo elit laborum consectetur Lorem.</p>
        </section>
      </main>
    </>
  );
}
