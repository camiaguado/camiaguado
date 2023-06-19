import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { PresentationChartLineIcon, RocketLaunchIcon, HandThumbUpIcon, Cog8ToothIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function AboutMe() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      name: 'Transformación digital',
      description:
        'Entendiendo las necesidades de tu empresa, identificaré oportunidades de mejora ayudándote a implementar tecnologías innovadoras que impulsen tu negocio.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Estrategia tecnológica',
      description:
        'Trabajaremos juntos para desarrollar una estrategia personalizada que se alinee con tus objetivos comerciales y te permita aprovechar al máximo las oportunidades tecnológicas.',
      icon: PresentationChartLineIcon,
    },
    {
      name: 'Calidad de software',
      description:
        'Estableceré procesos de desarrollo de calidad, asegurando eficiencia y mejorando la calidad de tus productos. Además, te proporcionaré herramientas y enfoques para una mejora continua.',
      icon: HandThumbUpIcon,
    },
    {
      name: 'Automatización de procesos',
      description:
        'Te ayudaré a identificar áreas de automatización, implementar soluciones y optimizar tus equipos para lograr una mayor eficiencia y productividad.',
      icon: Cog8ToothIcon,
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Consultoría tecnológica.{' '}
            <a href="#" className="font-semibold text-teal-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Agendar una llamada <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-teal-600 sm:text-4xl">
        Impulsa tu empresa con consultoría tecnológica especializada
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        Mi objetivo es ayudarte a dar un salto hacia el éxito digital y convertir los desafíos tecnológicos en oportunidades emocionantes, brindando metodologías y herramientas que impulsarán la transformación de tu negocio.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
  )
}