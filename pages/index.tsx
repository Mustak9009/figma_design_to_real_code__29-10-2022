import Head from "next/head";
import NavBar from "../components/NavBar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Design convert into code</title>
        <meta name="description" content="Figma design convert into real next.js code ..."/>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <NavBar />
      <hr className="border"/>
      <main>
        <h1 className="text-center font-semibold text-5xl">Figma</h1>
      </main>
    </div>
  );
}
