import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Header from '../header/header';
import AboutMe from '../aboutMe/aboutMe'
import TabsComponent from '../TabsComponent/TabsComponent';

const name = 'Camila Aguado';
export const siteTitle = 'Camila Aguado';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/Fav.ico" />
        <meta
          name="Consultoría tecnológica"
          content="Consultoría tecnológica a medida"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          
            <>
            <AboutMe></AboutMe>
            </>
        
        ) : (
          <div className="py-10">

          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="text-blue-600 visited:purple m-16">
          <a href="/">
            <a>← Volver</a>
          </a>
        </div>
      )}
    </div>
  );
}