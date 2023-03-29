import Head from "next/head";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import MenuBar from "@/components/MenuBar/MenuBar";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <MenuBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
