import Link from 'next/link';
import Head from 'next/head';
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
      <section className={utilStyles.headingMd}>
        <p>Mi misión es que todo el mundo pueda acceder a desarrollar sus conocimientos en el área de la tecnología. Ya que la tecnología es el presente y el futuro, quiero lograr la diversidad y la inclusión en el desarrollo tecnológico para que al futuro lo creemos entre todos, aportando diversas maneras de pensar y de sentir. La forma en la que lo hago es bajando conceptos que parecen complicados o de la Matrix a un lenguaje más humano en el que todos podamos entender, mi idea es hacerlo de una manera fácil, divertida e interactiva</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title})=> (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link> 
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    
    <Lamp></Lamp>
    <Lamp></Lamp>
    <Lamp></Lamp>
    <Lamp></Lamp>
    <Lamp></Lamp>
    </Layout>
  );
}
