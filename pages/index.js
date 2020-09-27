import Head from 'next/head'
import Layout, { SITETITLE } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{SITETITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your self introduction]</p>
        <p>
          (This is a sample website - you'll building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
