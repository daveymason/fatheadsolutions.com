import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Jumbotron from '@components/Jumbotron'
import CustomTabs from '@components/CustomTabs'
import Design from '@components/Design'
import Hosting from '@components/Hosting'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fat Head Solutions!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header title="Fat Head Solutions" /> */}
        <Jumbotron />
        <CustomTabs />
      </main>

      <Footer />
    </div>
  )
}
