import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import TabsComponent from '../TabsComponent/TabsComponent'
import { InboxIcon, LinkIcon } from '@heroicons/react/20/solid'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-8 sm:py-24 md:py-32">
      <div className="max-w-4xl w-full shadow-lg p-4 sm:p-8 rounded-lg flex flex-col sm:flex-row justify-between mb-8 sm:mb-16">

        {/* Tu información e imagen */}
        <div className="flex flex-col sm:space-x-8 sm:flex-row items-center space-y-5 sm:space-y-0">
          {/* Imagen redonda */}
          <div className="mb-5 sm:mb-0">
            <img src="/images/cami.png" alt="Camila Aguado" className="rounded-full border-teal-600 border-2 w-32 h-32 sm:w-40 sm:h-40"/>
          </div>

          <div className="flex flex-col justify-center space-y-5">
            <h1 className="text-2xl sm:text-3xl text-teal-600 font-semibold">Camila Aguado</h1>
            <p className="text-gray-600">Ingeniera informática</p>
            <p className="text-teal-600">Especialista en transformación digital</p>

            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-3 space-y-2 sm:space-y-0">
              <a href="mailto:camila@blumb.ai" className="text-gray-500 flex items-center space-x-2 hover:underline">
                <InboxIcon className="h-5 w-5" aria-hidden="true" />
                <span>camila@blumb.ai</span>
              </a>
              <a href="https://linkedin.com/in/camilaaguado" className="text-gray-500 flex items-center space-x-2 hover:underline">
                <LinkIcon className="h-5 w-5" aria-hidden="true"/>
                <span>Linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl w-full text-center my-4 sm:my-8">
        <p className="text-gray-700 leading-relaxed border-l-4 border-teal-600 pl-4">
          Durante más de una década, como Ingeniera de Software especializada en automatización, he liderado y desarrollado productos tecnológicos de calidad. Pero más allá de la tecnología, me apasiona conectar con las personas, entender sus necesidades y ayudarlas a descubrir y aprovechar su potencial tecnológico.
        </p>

        <div className="flex justify-center mt-4 sm:mt-6">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mt-4 sm:mt-8">
            ¿Crees que podría ayudarte?{' '}
            <a href="https://calendar.app.google/X2Bgy111sEwdHEv16" className="font-semibold text-teal-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Agenda una llamada <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <TabsComponent></TabsComponent>
    </div>
  )
}
