import { GetStaticProps } from "next";

import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { SITETITLE } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from "../lib/posts";

interface PostData {
  date: string;
  title: string;
  id: string;
}

interface ContextData {
  allPostsData: PostData[]
}

export default function Home({ allPostsData }: ContextData) {
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
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

/* It only runs at build time, before the request */
export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData: allPostsData
    }
  }
}
