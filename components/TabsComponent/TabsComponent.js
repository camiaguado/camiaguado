import { useState } from 'react';


export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState('asesoria');

  return (
    <div className="w-full max-w-4xl p-4 md:p-8 mt-4 md:mt-16 bg-white rounded-lg shadow-lg">
    {/* Pestañas */}
    <div className="mb-4 md:mb-8 flex flex-wrap md:flex-nowrap border-b">
      <button 
        className={`py-2 px-6 ${activeTab === 'asesoria' ? 'border-b-2 border-teal-600' : ''}`}
        onClick={() => setActiveTab('asesoria')}>
        Asesoría
      </button>
      <button 
        className={`py-2 px-6 ${activeTab === 'cto' ? 'border-b-2 border-teal-600' : ''}`}
        onClick={() => setActiveTab('cto')}>
        CTO Fraccional
      </button>
      <button 
        className={`py-2 px-6 ${activeTab === 'empresas' ? 'border-b-2 border-teal-600' : ''}`}
        onClick={() => setActiveTab('empresas')}>
        Trayectoria
      </button>
    </div>

      {/* Contenido de las pestañas */}
      <div className="tab-content">
        {activeTab === 'asesoria' && (
  <div>

    {/* Introducción */}
    <div className="mb-8">
      <h3 className="text-xl text-teal-600 mb-4 border-b border-gray-300 pb-2">Asesoría especializada</h3>
      <p className="text-gray-700 leading-relaxed">
      Mi compromiso es sumergirme en el núcleo de tu empresa, descubrir sus áreas de oportunidad, y juntos diseñar una estrategia personalizada que eleve la calidad de tus procesos, potencie la productividad y libere tiempo valioso. 
      A través de este método, no solo busco integrar soluciones tecnológicas, sino también impulsar a tu empresa y a tus equipos para prosperar en el mundo digital.
      </p>
    </div>

    {/* Método de Asesoría */}
    <div className="mb-8">
      <h3 className="text-xl text-teal-600 mb-4 border-b border-gray-300 pb-2">Método de Asesoría</h3>

      {/* Paso 1 */}
      <div className="mb-4">
        <strong className='text-teal-600'>#1: Evaluación Inicial</strong><br />
        <ul className="list-disc pl-5">
          <li className="mb-2"><strong>Objetivo: </strong>Entender el estado actual del negocio y sus necesidades.</li>
          <li className="mb-2"><strong>Acciones: </strong></li>
          <ul className="list-disc pl-5">
           <li className="mb-2">Reunión inicial con los involucrados.</li>
           <li className="mb-2">Encuesta para entender el nivel de digitalización actual.</li>
           <li className="mb-2">Revisión de las herramientas y sistemas actuales.</li>
          
        </ul>
        </ul>
        
      </div>

      {/* Paso 2 */}
      <div className="mb-4">
        <strong className='text-teal-600'>#2: Auditoría y diagnóstico</strong><br />
        <ul className="list-disc pl-5">
          <li className="mb-2"><strong>Objetivo: </strong>Identificar áreas de mejora y oportunidades de digitalización.</li>
          <li className="mb-2"><strong>Acciones: </strong></li>
          <ul className="list-disc pl-5">
           <li className="mb-2">Análisis de procesos actuales.
</li>
           <li className="mb-2">Evaluación de la infraestructura tecnológica.
</li>
           <li className="mb-2">Identificación de puntos débiles y áreas de ineficiencia.
</li>
          
        </ul>
        </ul>
        
      </div>

      {/* Paso 3 */}
      <div className="mb-4">
        <strong className='text-teal-600'>#3: Definición de KPIs
</strong><br />
        <ul className="list-disc pl-5">
          <li className="mb-2"><strong>Objetivo: </strong>Establecer métricas claras para medir el éxito de la transformación digital.</li>
          <li className="mb-2"><strong>Acciones: </strong></li>
          <ul className="list-disc pl-5">
           <li className="mb-2">Crear un conjunto de indicadores basados en las áreas identificadas en la auditoría.
</li>
           <li className="mb-2">Establecer metas y benchmarks.
</li>
          
        </ul>
        </ul>
        
      </div>

{/* Paso 4 */}
<div className="mb-4">
        <strong className='text-teal-600'>#4: Plan de automatización y uso de IA
</strong><br />
        <ul className="list-disc pl-5">
          <li className="mb-2"><strong>Objetivo: </strong>Proporcionar soluciones específicas para las áreas identificadas.</li>
          <li className="mb-2"><strong>Acciones: </strong></li>
          <ul className="list-disc pl-5">
           <li className="mb-2">Diseñar un roadmap de digitalización.

</li>
           <li className="mb-2">Seleccionar las herramientas y plataformas adecuadas.

</li>
           <li className="mb-2">Definir áreas específicas donde la IA puede agregar valor.


</li>
          
        </ul>
        </ul>
        
      </div>
      
      {/* Paso 5 */}
<div className="mb-4">
        <strong className='text-teal-600'>#5: Propuesta de implementación
</strong><br />
        <ul className="list-disc pl-5">
          <li className="mb-2"><strong>Objetivo: </strong>Presentar un plan de acción detallado a la empresa.</li>
          <li className="mb-2"><strong>Acciones: </strong></li>
          <ul className="list-disc pl-5">
           <li className="mb-2">Establecer un cronograma de implementación.


</li>
           <li className="mb-2">Determinar los recursos necesarios.


</li>
           <li className="mb-2">Proponer actualizaciones o mejoras basadas en la evolución del negocio y la tecnología.



</li>
          
        </ul>
        </ul>
        
      </div>
    </div>

    {/* Contáctame */}
    <div className="mb-8">
      <h3 className="text-xl text-teal-600 mb-4 border-b border-gray-300 pb-2">Contáctame</h3>
      <p className="text-gray-700 mb-4">
        Si estás listo para embarcarte en este viaje de transformación, o simplemente quieres charlar sobre las posibilidades, estaré encantada de escucharte.
      </p>
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mt-8">
              {' '}
              <a href="https://calendar.app.google/X2Bgy111sEwdHEv16" className="font-semibold text-teal-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Agendar una llamada <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
    </div>
  </div>
)}

        {activeTab === 'cto' && (
  <div>
    <div className="mb-8">
      <h3 className="text-xl text-teal-600 mb-4 border-b border-gray-300 pb-2">Servicios de CTO Fraccional</h3>
      
      <p>Como CTO Fraccional, mi objetivo es ser tu aliada estratégica en el viaje tecnológico de tu empresa. Con una combinación de experiencia, visión estratégica y enfoque práctico, me aseguraré que tu empresa aproveche al máximo la tecnología, impulsando el crecimiento y la innovación.</p>
    </div>

    <div className="mb-8">
      <h3 className="text-xl text-teal-600 mb-4 border-b border-gray-300 pb-2">¿Qué ofrezco como CTO Fraccional?</h3>
      
      <ul className="list-disc pl-5">
        <li className="mb-2"><strong>Visión estratégica tecnológica</strong> <br/> Evalúo el panorama tecnológico actual de tu empresa y trazo una hoja de ruta clara.</li>
        <li className="mb-2"><strong>Innovación y digitalización</strong> <br/> Te guío en la adopción de las últimas tendencias y tecnologías.</li>
        <li className="mb-2"><strong>Optimización de procesos</strong> <br/> Analizo y mejoro los procesos tecnológicos existentes.</li>
        <li className="mb-2"><strong>Comunicación efectiva</strong> <br/>Traduzco conceptos tecnológicos complejos en términos comprensibles.</li>
        <li className="mb-2"><strong>Seguridad y protección de datos</strong> <br/> Evalúo y fortalezco las medidas de seguridad.</li>
        <li className="mb-2"><strong>Mentoría y formación</strong> <br/>Ayudo a tu equipo a desarrollar sus habilidades tecnológicas.</li>
        <li className="mb-2"><strong>Identificación de oportunidades</strong> <br/> Identifico oportunidades para la innovación tecnológica.</li>
        <li className="mb-2"><strong>Gestión de proyectos tecnológicos</strong> <br/>Superviso y gestiono proyectos tecnológicos.</li>
      </ul>
    </div>

    <div className="mb-8">
      <h3 className="text-xl text-teal-600 mb-4 border-b border-gray-300 pb-2">Conclusión</h3>
      
      <p>A través de este servicio, busco consolidar tu equipo tecnológico, fortaleciendo sus habilidades, procesos y herramientas. El objetivo es que, con un producto sólido y procesos de calidad, tu startup o empresa pueda florecer y escalar de manera eficiente y natural en el corto plazo.<br/>
La meta es que, al finalizar mi colaboración, tu equipo esté completamente preparado para tomar las riendas, enfrentar nuevos desafíos y aprovechar oportunidades, todo ello sin depender de servicios externos. Busco construir una base sólida y proporcionar las herramientas y el conocimiento necesarios para que tu negocio prospere por sí solo.</p>
<div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mt-8">
              {' '}
              <a href="https://calendar.app.google/X2Bgy111sEwdHEv16" className="font-semibold text-teal-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Agendar una llamada <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
    </div>
  </div>
)}
        {activeTab === 'empresas' && (
  <div>
    <div className="mb-8">
      <h3 className="text-xl text-teal-600 mb-4 border-b border-gray-300 pb-2">Formación Académica</h3>
      
      <ul className="list-disc pl-5">
        <li className="mb-2">Ingeniería de Sistemas, Universidad Católica de Córdoba, Córdoba, Argentina.</li>
        <li className="mb-2">Programación orientada a objetos en Java, Universidad Católica de Córdoba, Argentina.</li>
        <li className="mb-2">Especialización en Calidad y procesos de software, Kinetic, Córdoba, Argentina.</li>
      </ul>
    </div>

    <div className="mb-8">
      <h3 className="text-xl text-teal-600 mb-4 border-b border-gray-300 pb-2">Experiencia Profesional</h3>
      
      <div className="mb-4">
        <strong>Fundadora, Blum</strong><br />
        Agosto 2022 - actualidad<br />
        Innovación, transformación digital, desarrollo de software y armado de equipos.
      </div>
      
      <div className="mb-4">
        <strong>Directora de Tecnología y Co-fundadora, Qubik</strong><br />
        Feb 2021 - Nov 2022<br />
        Estrategia tecnológica, gestión de equipo y evolución tecnológica.
      </div>

      <div className="mb-4">
        <strong>Senior QA Automation Lead, XXXLdigital</strong><br />
        Nov 2019- May 2021<br />
        Estrategia de pruebas y automatización, coordinación de equipo.
      </div>
      
      <div className="mb-4">
        <strong>Senior QA Automation Engineer, Gaming Innovation Group</strong><br />
        Feb 2019 - Oct 2019<br />
        Estrategia automatización, asesoría y formación de equipo.
      </div>
      
      <div className="mb-4">
        <strong>Senior QA Automation Engineer, ABC News Australia</strong><br />
        Ene 2018 - Nov 2018<br />
        Mantenimiento de frameworks y coordinación de tareas de QA.
      </div>
      
      <div className="mb-4">
        <strong>Freelance Full Stack Developer</strong><br />
        Ene 2016 - Nov 2020<br />
        Desarrollo full stack: Nodejs y React.
      </div>
     
      <div className="mb-4">
        <strong>Software Development Engineer in Test (SDET), Intel Corporation</strong><br />
        Ago 2016 - Dic 2016<br />
        Gestión de defectos y sistemas CI/CD.
      </div>
      <div className="mb-4">
        <strong>Business Assurance & Automation Engineer, MercadoLibre</strong><br />
        Abr 2013 - Ago 2016<br />
        Monitorización y desarrollo de herramientas internas.
      </div>
      <div className="mb-4">
        <strong>Co-founder, todoexcedente.com</strong><br />
        May 2013 - Feb 2015<br />
        Plataforma B2B para stocks no vendidos.
      </div>
      <div className="mb-4">
        <strong>Analista de Pruebas Funcionales, Neosur SA</strong><br />
        Nov 2011 - Abr 2013<br />
        Análisis de requerimientos y reporte de defectos.
      </div>

    </div>

    <div className="mb-8">
      <h3 className="text-xl text-teal-600 mb-4 border-b border-gray-300 pb-2">Proyectos Destacados</h3>
      
      <div className="mb-4">
        <strong>Ponente Participación Laboratorio Entre todas</strong>, gobierno de La Rioja, Logroño.
      </div>
      
      <div className="mb-4">
        <strong>Qubik</strong><br />
        Plataforma logística end to end.
      </div>
      <div className="mb-4">
        <strong>Video juego - QUÉ ME PONGO</strong><br />
        Juego serio para niños con Trastornos del Espectro Autista (TEA). Convocatorias RSU y “PROCODAS”.
      </div>
      
    </div>
  </div>
)}

      </div>
    </div>
  );
}