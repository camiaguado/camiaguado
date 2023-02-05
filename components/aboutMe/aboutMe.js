

export default function aboutMe() {

    return(
        <div className="relative mx-10vw">
            <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64">

            <div className="col-span-full mb-12 lg:mb-0 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mt-24 lg:-mr-5vw lg:px-0">
                <img className="py-3 absolute" src="./images/techteam.png"/>
            </div>
            <div className="col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5 text-2xl text-zinc-400">
                <div className="flex flex-auto flex-col space-y-4">
                <h2 className="leading-tight text-6xl text-blue-900">Acelerá tu proyecto tecnológico.</h2>
                    <p>Asesoro y acompaño a empresas en su proceso de transformación digital, proporcionando metodologías y herramientas para que tu negocio de un salto hacia nuevos niveles de productividad, rentabilidad y crecimiento.</p>
                <div class="mt-10 flex items-center  gap-x-6">
                    <a href="mailto:asesoria@camiaguado.com" class="rounded-md bg-blue-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contactar</a>
                    <a href="#" class="text-base font-semibold leading-7 text-gray-900">Leer más <span aria-hidden="true">→</span></a>
             </div>


              {/*   <div className="flex gap-4 my-10">
                <a href="https://github.com/camiaguado" class="fill-blue-800 text-primary focus:outline-none hover:fill-stone-300 focus:fill-blue-800"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><title>Github</title><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                <a href="https://www.linkedin.com/in/camilaaguado/" class="fill-blue-800 text-primary focus:outline-none hover:fill-stone-300 focus:fill-blue-800"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><title>Linkedin</title><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg></a>
                </div> */}

                </div>
            </div>
           
           
        </div>
        </div>
    )
    
}


