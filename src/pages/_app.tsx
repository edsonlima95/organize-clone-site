import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Layout from './Layout'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {




  return (
    <>

      {/* <Header /> */}
      <Layout>

        <Component {...pageProps} />
      </Layout>
      <Footer />

    </>)
}

export default MyApp
