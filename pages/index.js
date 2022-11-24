import Link from 'next/link';
import Head from 'next/head';
import AboutMe from '../components/aboutMe/aboutMe'
import Layout, { siteTitle } from '../components/layout/layout';
import Lamp from '../components/lamp/lamp';
import Date from '../components/date/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title})=> (
            <li className={utilStyles.listItem} key={id}>
              <a href={`/posts/${id}`} className="text-blue-600 visited:text-red-600">
                <a>{title}</a>
              </a> 
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}
