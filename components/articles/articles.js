import Link from 'next/link';
import Head from 'next/head';
import AboutMe from '../components/aboutMe/aboutMe'
import Layout, { siteTitle } from '../components/layout/layout';
import Lamp from '../components/lamp/lamp';
import Date from '../components/date/date';
import utilStyles from '../.../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({allPostsData}) {
    return (
        <div>
        
    
          <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recomendaciones de mi blog</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
              Descubre el camino hacia la excelencia tecnológica y el crecimiento empresarial.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {allPostsData.map(({id, date, title, category, photo, description}) => (
                <article key={id} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={date} className="text-gray-500">
                      {date}
                    </time>
                    <a
                      href={`posts/${id}`}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {category}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={`posts/${id}`}>
                        <span className="absolute inset-0" />
                        {title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">description</p>
                  </div>
                  <div className="relative mt-2 flex items-center gap-x-4">
                    <img src={photo} alt=""/>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
    
        </div>
      );
    }
    