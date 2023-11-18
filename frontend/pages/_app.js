import Head from 'next/head'
import '../styles/globals.css'
import Footer from '../components/Footer.js'
import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps, session }) {
  return <>
      <Head>
        <title>One Stop Scholar</title>
        <meta name="One Stop Scholar" content="Scholarship Portal for higher studies" />
        <link rel="icon" href="/logo.png" />
        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <Footer/>
  </>
}

export default MyApp
