import Head from "next/head";
import {NavBar,HomeComponent} from "../components";
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
      <main className="container mx-auto mt-10">
       <HomeComponent/>
      </main>
    </div>
  );
}
