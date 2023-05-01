import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import BusinessDays from "@/components/BusinessDays/BusinessDays";
import LocationMap from "@/components/LocationMap/LocationMap";
import AccordionMenu from "@/components/AccordionMenu/AccordionMenu";
import Head from "next/head";

export default function ContactPage() {
  const pageTitle: string = "Pizza Denis | Nous contacter";
  const pageDescription: string =
    "Vous avez des questions sur notre pizzeria, notre menu ou nos options de commande ? Contactez-nous dès maintenant ! Notre équipe se fera un plaisir de répondre à toutes vos demandes. Vous pouvez nous joindre par téléphone, par e-mail ou en remplissant le formulaire de contact ci-dessous. Nous sommes situés à Saint Laurent de la Salanque, à proximité de Perpignan, Barcarès et Canet en Roussillon. N'hésitez pas à nous contacter pour organiser une commande de pizzas pour vos événements privés ou professionnels. Chez Pizza Denis, nous sommes à votre écoute pour vous offrir le meilleur service possible.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>
      <main className="bg-contact p-5 md:py-16">
        <Title text="Contactez-nous" whiteOutline />
        <Subtitle whiteOutline>
          Vous avez des questions, des suggestions ou des demandes particulières ?
          <br />
          N&apos;hésitez pas à passer au magasin ou bien à nous joindre au&nbsp;
          <a className="text-xl font-black text-green-800 underline" href="tel:0468285858">
            04 68 28 58 58
          </a>
          &nbsp; !
        </Subtitle>
        <section className="max-w-screen-xl mx-auto px-4 my-12 flex items-center justify-between gap-5 flex-col md:flex-row">
          <div className="self-stretch rounded-lg m-0 bg-stone-50/70 p-4 text-xl shadow-md border border-black/20">
            <BusinessDays />
          </div>
          <div className="grow">
            <LocationMap />
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto md:px-4">
          <AccordionMenu
            items={[
              {
                title: "Quels sont les modes de paiement acceptés ?",
                children: <p>Nous acceptons les paiements par carte bancaire, paylib, espèces et tickets restos. Attention, nous ne prenons pas les chèques !</p>,
              },
              {
                title: "Acceptez-vous les tickets restaurants ?",
                children: <p>Oui, nous prenons les tickets Edenred, Apetiz, Sodexo, les chèques de table et les chèques déjeuner. Attention, nous ne prenons pas les chèques ANCV !</p>,
              },
              {
                title: "Faites-vous des livraisons ?",
                children: (
                  <p>
                    Malheureusement, nous ne pouvons pas livrer à domicile. Vous pouvez commander vos pizzas à emporter et nous vous donnerons une heure approximative où vous pourrez venir les
                    récupérer !
                  </p>
                ),
              },
              {
                title: "Pourquoi êtes vous sur SoundCloud ?",
                children: (
                  <p>
                    C&apos;est parce que Denis est aussi un musicien passionné qui compose et joue de la musique ! Vous pouvez écouter ses compositions sur son profil SoundCloud ou venir au magasin
                    parler guitare avec lui 🎸
                  </p>
                ),
              },
            ]}
          />
        </section>
      </main>
    </>
  );
}
