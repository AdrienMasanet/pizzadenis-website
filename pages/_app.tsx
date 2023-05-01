import Head from "next/head";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import MenuBar from "@/components/MenuBar/MenuBar";
import Footer from "@/components/Footer/Footer";
import { PizzaListProvider } from "@/context/PizzaListContext";
import { ModalProvider } from "@/context/ModalContext";
import logoImage from "@/public/images/logo.png";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="author" href="https://adrienmasa.net" />
        <meta name="author" content="Adrien Masanet" />
        <meta name="creator" content="Adrien Masanet" />
        <meta name="publisher" content="Pizza Denis" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content={logoImage.src} />
        <meta property="og:image:alt" content="Logo de Pizza Denis" />
        <meta property="og:type" content="website" />
      </Head>
      <MenuBar />
      <PizzaListProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </PizzaListProvider>
      <Footer />
    </>
  );
}
