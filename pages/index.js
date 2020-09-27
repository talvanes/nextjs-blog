import Head from 'next/head'
import Layout, { SITETITLE } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br/>
              {id}
              <br/>
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

/* It only runs at build time, before the request */
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData: allPostsData
    }
  }
}
