import Head from "next/head";
import { NavBar, HomeComponent, HomeComponent2 } from "../components";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Design convert into code</title>
        <meta
          name="description"
          content="Figma design convert into real next.js code ..."
        />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <NavBar />
      <hr className="border" />
      <main>
        <div className="container mx-auto mt-10">
          <HomeComponent />
        </div>
        <HomeComponent2 />
      </main>
    </div>
  );
}
