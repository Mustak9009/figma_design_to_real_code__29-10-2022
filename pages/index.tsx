import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Design convert into code</title>
        <meta name="description" content="Figma design convert into real next.js code ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-center font-semibold text-5xl'>Figma</h1>
    </div>
  )
}
