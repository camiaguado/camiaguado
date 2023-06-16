import Link from 'next/link';
import Head from 'next/head';
import AboutMe from '../components/aboutMe/aboutMe'
import Layout, { siteTitle } from '../components/layout/layout';
import Lamp from '../components/lamp/lamp';
import Date from '../components/date/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

//Esto es para importar en servicios:
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


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
              <p className="text-base font-semibold leading-7 text-indigo-600">Digitalización</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mis servicios</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Transforma tu empresa con consultoría tecnológica especializada
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Mi objetivo es ayudarte a dar un salto hacia el éxito digital y convertir los desafíos tecnológicos en oportunidades emocionantes. Trabajaré contigo de manera cercana y amigable, brindándote metodologías y herramientas que impulsarán la transformación de tu negocio.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Transformación digital.</strong> Entendiendo las necesidades de tu empresa, identificaré oportunidades de mejora ayudándote a implementar tecnologías innovadoras que impulsen tu negocio.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Estrategia tecnológica.</strong> Trabajaremos juntos para desarrollar una estrategia personalizada que se alinee con tus objetivos comerciales y te permita aprovechar al máximo las oportunidades tecnológicas.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Calidad de software.</strong> Estableceré procesos de desarrollo de calidad, asegurando eficiencia y mejorando la calidad de tus productos. Además, te proporcionaré herramientas y enfoques para una mejora continua.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Automatización de procesos.</strong> Te ayudaré a identificar áreas de automatización, implementar soluciones y optimizar tus equipos para lograr una mayor eficiencia y productividad.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Contacta conmigo ahora y comencemos a transformar tu empresa. ¡Aprovecha al máximo las oportunidades del mundo digital y destaca en el mercado actual!
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Transforma tu idea en un MVP exitoso.</h2>
              <p className="mt-6">
              Te acompaño en la creación de un roadmap estratégico, formación de equipo y elección de tecnologías adecuadas. Juntos, haremos realidad tu visión emprendedora.¡Hagamos realidad tu idea de manera eficiente y efectiva!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


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
          {allPostsData.map(({id, date, title, category}) => (
            <article key={id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={date} className="text-gray-500">
                  {date}
                </time>
                <a
                  href={`post/${id}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {category}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={`post/${id}`}>
                    <span className="absolute inset-0" />
                    {title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">¡Impulsa el éxito de tu empresa en la era digital! Transformación digital y automatización de procesos a tu medida. Aprovecha al máximo las oportunidades del mundo digital y destaca en el mercado actual. ¡Contacta ahora y comencemos juntos el camino hacia el triunfo empresaria</p>
              </div>
              <div className="relative mt-2 flex items-center gap-x-4">
                <img src='/images/profile.jpg' alt=""/>
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
