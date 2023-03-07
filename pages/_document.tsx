import { Html, Head, Main, NextScript } from "next/document";
import MenuBar from "@/components/MenuBar/MenuBar";
import Footer from "@/components/Footer/Footer";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        <MenuBar />
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
