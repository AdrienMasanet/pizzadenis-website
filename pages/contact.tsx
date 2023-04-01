import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import BusinessDays from "@/components/BusinessDays/BusinessDays";
import LocationMap from "@/components/LocationMap/LocationMap";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Pizza Denis | Nous contacter</title>
        <meta name="description" content="Vous avez des questions sur notre pizzeria, notre menu ou nos options de commande ? Contactez-nous dès maintenant ! Notre équipe se fera un plaisir de répondre à toutes vos demandes. Vous pouvez nous joindre par téléphone, par e-mail ou en remplissant le formulaire de contact ci-dessous. Nous sommes situés à Saint Laurent de la Salanque, à proximité de Perpignan, Barcarès et Canet en Roussillon. N'hésitez pas à nous contacter pour organiser une commande de pizzas pour vos événements privés ou professionnels. Chez Pizza Denis, nous sommes à votre écoute pour vous offrir le meilleur service possible." />
      </Head>
      <main className="bg-contact py-16 p-5">
        <Title text="Contactez-nous" whiteOutline />
        <Subtitle whiteOutline>Consectetur ullamco minim sunt ad Lorem deserunt ea. Commodo non excepteur elit irure ex tempor et velit occaecat eu fugiat. Tempor qui elit laboris occaecat do eu eiusmod duis ex veniam deserunt et velit. Nostrud et eu proident in quis voluptate tempor cupidatat enim ullamco. Laboris officia fugiat aute irure laborum aliqua in amet amet Lorem ipsum.</Subtitle>
        <section className="max-w-screen-xl mx-auto md:px-4 my-24 flex items-center justify-evenly gap-5 flex-col md:flex-row">
          <div className="self-stretch rounded-lg m-0 bg-stone-50/70 p-4 text-xl shadow-md border border-black/20">
            <BusinessDays />
          </div>
          <LocationMap />
        </section>
      </main>
    </>
  );
}
