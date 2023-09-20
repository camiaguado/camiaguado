import Link from 'next/link';
import Head from 'next/head';
import AboutMe from '../components/aboutMe/aboutMe'
import Layout, { siteTitle } from '../components/layout/layout';
import Lamp from '../components/lamp/lamp';
import Date from '../components/date/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

//Esto es para importar en servicios:
import { PresentationChartLineIcon, RocketLaunchIcon, HandThumbUpIcon, Cog8ToothIcon, ServerIcon } from '@heroicons/react/20/solid'


import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'


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
{/** ESTO ES EL INICIO DE SERVICIOS https://tailwindui.com/components/marketing/sections/content-sections */}



    {/** ESTO ES EL FIN DE SS Y EL INCIIO DE SS 

<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-teal-600">CTO fraccional</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Transforma tu idea en un MVP exitoso</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Te acompaño en la creación de un roadmap estratégico, formación de equipo y elección de tecnologías adecuadas. Juntos, haremos realidad tu visión emprendedora.¡Hagamos realidad tu idea de manera eficiente y efectiva!
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[47rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[47rem]"
            src="/images/puentelareina.jpeg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <RocketLaunchIcon className="mt-1 h-5 w-5 flex-none text-teal-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Estrategia</strong><br></br>
                    Estrategia y visión tecnológica para tu empresa.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PresentationChartLineIcon className="mt-1 h-5 w-5 flex-none text-teal-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Plan de acción</strong> <br></br>
                    Identificación de problemas y plan de acción para impulsar el progreso.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HandThumbUpIcon className="mt-1 h-5 w-5 flex-none text-teal-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Routemap</strong> <br></br>
                    Hojas de ruta claras para llevar tu tecnología al siguiente nivel.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Cog8ToothIcon className="mt-1 h-5 w-5 flex-none text-teal-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Implementación</strong><br></br>
                    Colaboración con tu equipo actual para implementar la estrategia.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Cog8ToothIcon className="mt-1 h-5 w-5 flex-none text-teal-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Calidad</strong><br></br>
                  Enfoque en seguridad, escalabilidad y crecimiento sostenible.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Contacta conmigo ahora y comencemos a transformar tu empresa. ¡Aprovecha al máximo las oportunidades del mundo digital y destaca en el mercado actual!
              </p>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mt-8">
              Comencemos.{' '}
              <a href="#" className="font-semibold text-teal-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Agendar una llamada <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

*/}
{/** ESTO ES EL FIN DE SERVICIOS https://tailwindui.com/components/marketing/sections/content-sections */}

{/** ESTO ES EL INICIO DEL BLOG */}
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
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
              </div>
              <div className="relative mt-2 flex items-center gap-x-4">
                <img src={photo} alt=""/>
              </div>
            </article>
          ))}
        </div>
      </div>      
    </div>
{/** ESTO ES EL FIN DEL BLOG */}
    </Layout>
  );
}
