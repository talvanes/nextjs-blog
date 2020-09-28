import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingLg}>404 - Page Not Found</h1>
        <div className={utilStyles.lightText}>
          We could not find the resource you have been looking for. <br/>
          We apologize for the inconvenience...
        </div>
      </article>
    </Layout>
  )
}
