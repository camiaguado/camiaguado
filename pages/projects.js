import Layout from '../components/layout/layout';
import { PaperClipIcon } from '@heroicons/react/20/solid'

const projectsList = [
    { index: 1, name: 'Tic tac toe', gitUrl: 'https://www.youtube.com/embed/psysTLzr2_o', about: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.' },
    { index: 2, name: 'Ejemplo 2', gitUrl: 'https://www.youtube.com/embed/psysTLzr2_o', about: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.' },
    { index: 3, name: 'Ejemplo 3', gitUrl: 'https://www.youtube.com/embed/psysTLzr2_os', about: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.' },
    { index: 4, name: 'Ejemplo 4', gitUrl: 'https://www.youtube.com/embed/psysTLzr2_o', about: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.' },
  ]

export default function Projects() {
  return (
    <Layout>
       <div className="space-y-6">  
        {projectsList.map((item) => (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{item.name}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Github</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><a href={item.gitUrl}>{item.gitUrl}</a></dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Stack tecnologico</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {item.about}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    ))}
    </div>
    </Layout>
  )
}