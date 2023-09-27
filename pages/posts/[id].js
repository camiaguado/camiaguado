import Layout from '../../components/layout/layout';
import Date from '../../components/date/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';

export default function Post({ postData }) {
    return (
      <Layout>
      <Head>
          <title>{postData.title}</title>
      </Head>
      <div className="relative mb-8">
          {/* Imagen del encabezado */}
          <img src={postData.photo} alt={postData.title} className="w-full h-64 object-cover" />
          {/* Título del artículo encima de la imagen */}
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center bg-black bg-opacity-50 p-4">{postData.title}</h1>
      </div>
      <div className="content-container mt-8 px-4 md:px-0">
          <article className="max-w-3xl mx-auto mb-8">
              <div className="mb-8 text-gray-500">
                  <Date dateString={postData.date} />
              </div>
              {/* Chips para las etiquetas */}
              <div className="mb-8 flex flex-wrap gap-2">
                  {postData.tags.map(tag => (
                      <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
              </div>
              <div className="prose lg:prose-lg" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
      </div>
      <style jsx global>{`
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        h2 {
          font-size: 2rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #e5e7eb; /* Color gris claro */
          padding-bottom: 0.5rem;
        }
        a {
          color: #3b82f6; /* Color azul */
          text-decoration: underline;
        }
        ul {
          list-style-type: disc;
          margin-left: 1.5rem;
        }
        hr {
          border: 0;
          height: 1px;
          background: #e5e7eb; /* Color gris claro */
          margin: 2rem 0;
        }
      `}</style>
  </Layout>
    );
}


export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds()
    return{
        paths,
        fallback: false,
    }
}


export async function getStaticProps({params}){
    // Fetch necesary data fro the blog post using params.id
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        }
    }
}