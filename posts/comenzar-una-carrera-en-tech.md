---
title: 'Comenzar una carrera en tech'
date: '2020-01-01'
category: 'Tecnología'
---

Esto es una guía para que puedas iniciarte en el mundo de la tecnología y puedas desarrollar tu carrera entendiendo de que se trata, de los diferentes roles que hay dentro de los equipos y de las diferentes maneras de trabajar en equipos tecnológicos.

Imaginemos que somos usuarios de Netflix. Dónde podemos ver el listado de películas, series, recomendaciones, películas más populares. También podemos seleccionar una película y poner play para empezar a reproducirla, entre otras cosas.

Como usuario de Netflix, con lo primero que nos encontramos es con la Interfaz de Usuario:

![Inicio](/images/netflix/landing.png)

En este caso, es una página web en el browser o navegador (chrome, firefox, safari o cual sea que estes usando) donde podemos ver todo el contenido de la página de Netflix. Esto es lo que se conoce como **FRONTEND.** 

Para realizar ese **frontend** por lo general se necesitan tres tipos de roles:

- Desarrollador
- UI Designer (User Interface Designer o Diseñador de interfaz de usuario)
- UX Designer (User Experience Designer o Diseñador de experiencia de usuario)

*El rol de UI y UX Designer puede ser un solo rol, una persona que haga ambas cosas, esto depende de la compañía y la manera de trabajar que cada empresa elija.*

El frontend por lo general puede desarrollar en los siguientes lenguajes  (estos son unos pocos de la cantidad que existen)

- Javascrip/Typescript/PHP (este es el lenguaje de programación)
- Angular/React/Vue (estos son lenguajes mas empaquetados, un conjunto de herramientas que facilitan la programación)
- CSS/HTML (esto es lo que los usuarios ven, la estructura que se desarrolla con HTML y los colores o tipo de fuentes, etc que se define con CSS)

Por lo general los UI designer son los que mayor conocimiento tienen de CSS y HTML, con lo que se estructura y pone lindo lo que realmente el usuario ve.

Dependiendo de la empresa se definirá si es el desarrollador frontend el que inserta los diseños en el código o si lo hace el UI Designer.

Los UX Designer son los que facilitan el diseño según un estudio o sus conocimientos sobre experiencias de usuario. Suelen usar herramientas de diseño como Adobe XD o Figma para crear mockups que luego se muestran a los desarrolladores para decirles, “mira tienes que crear esto”.

### DIFERENCIA ENTRE EL UX DESIGNER Y EL UI DESIGNER

El UI Designer es el que se encarga de definir el estilo de cómo se va a ver la interfaz de usuario por ejemplo. Asegurarse de que la paleta de colores se vea bien, las fuentes, etc

El UX Designer es el que se encarga de pensar en el usuario, en que lo que va a usar se entienda como usar, mas allá de que se vea lindo (que es tarea del UI Designer) el UX lo que hace es definir el recorrido que va a dar el usuario a través de la aplicación y asegurarse de que todo sea lo mas intuitivo y fácil de utilizar posible.

El desarrollador es el que va a materializar esto que diseño el UI Designer y que ideo el UX Designer. Por ejemplo:

El UI Designer decidió que todos los botones para reproducir las películas sean redondeados, de color blanco y gris y lo diseño:

![Play button](/images/netflix/preview-mini.png)

El UX Designer determinó que el botón de reproducción debe estar en el centro de cada película en miniatura y cuando estamos con pantalla completa deberá estar abajo a la izquierda. Y que al hacer click reproduzca directamente la película.

El Desarrollador Frontend va a implementar en el código ese diseño que realizó el UI Designer, va a colocarlo en la posición que determinó el UX Designer y va a implementar la funcionalidad (escribiendo código) para que al hacer click en el botón realmente se realice una acción y la película comience a reproducirse.

**DESARROLLADOR BACKEND**

Pero ¿de dónde viene toda la información, las películas y recomendaciones que aparecen en el **front end**?

Todo esta información viene de detrás de escena, el **BACKEND** y aquí se agrega un nuevo rol que es el **DESARROLLADOR BACKEND.**

Por ejemplo, si alguien paga la subscripción a netflix, cómo hacemos para comunicarnos con el banco, retirar dinero ahí, registrar al usuario y aprobarlo para que pueda comenzar a usar la plataforma.

Detrás del rol de Backend existen diferentes perfiles, por ejemplo:

- Backend developer
- Backend security: Que se ocupan de que nuestros sistemas o servidores no sean hackeados, o aplicar metodologías y tecnología para reducir el riesgo a que esto suceda.
- Administradores de Base de Datos y de servidores: Depende mucho de las empresas que estos roles existan o no, ya que hoy en día con la aparición de Infraestructura en la nube. Como son por ejemplo AWS o Google Cloud Platform donde podemos usar servidores sin tener que comprar un servidor.

Supongamos que ingresamos a Netflix, nos muestra la lista de películas que a través del backend descarga de los servidores y cuando le hacemos click a la película ella se reproduce.

Hay un set de Datos que a través de nuestra interacción con la plataforma, Netflix va registrando en sus servidores, esto se llama **ANALYTICS,** es parte del backend pero los roles dentro de Análisis de Datos son diferentes, dos de los mas comunes son:

- Data Engineers: desarrollan toda infraestructura para poder obtener y guardar los datos necesarios.
- Data Scientists: son los que le dan sentido a todos los datos que recopilan las empresas, con esos datos recopilados generan información y conocimiento.

Esta data que enviamos a través de nuestra interacción con la plataforma es cómo Netflix puede calcular por ejemplo Cuales son las películas más populares en España o Recomendaciones a usuarios según intereses. También las empresas pueden calcular la Tasa de Conversiones o *Conversion rates.* **Lo que mide la tasa de conversión es el porcentaje de usuarios que hace una acción determinada dentro del sitio.** En el caso de netflix podrían medir la cantidad de usuarios que entran a la web y se registran en la plataforma si la tasa es baja podrían armar una estrategia o maneras de hacer mejoras como por ejemplo solicitar un formulario de registro mas corto o registrarse a través de redes sociales o colocar el botón de registro de una manera que resalte más.

Las personas que desarrollan o trabajan en Netflix están permanentemente creando cosas nuevas, subiendo cambios en la plataforma o realizando mejoras. Entonces lo que ocurre es que cada vez que una persona sube un cambio puede introducir algún error por equivocación en la plataforma, y es aquí donde aparece un nuevo rol QA (Quality Assurance). Este rol varía mucho en cada empresa y hay diferentes maneras de gestionarlos y catalogarlos. Voy a dividirlo en dos para mostrar una visión general.

- Manual Tester: realiza pruebas manuales en la plataforma, simulando el comportamiento de un usuario cualquiera y de esta manera va detectando errores que luego los reporta para que sean solucionados por los desarrolladores o el área a quien corresponda.
- QA Automation: crea pruebas automatizadas, antes y después de subir algo a la plataforma de netflix automáticamente se corren ciertas pruebas para corroborar que los cambios no vayan a romper nada.

Para que todos estos equipos funciones hay componentes de MANAGEMENT, hay muchos roles con nombres similares o diferentes, esto también depende mucho de cada compañía

Tenemos Gerentes de Producto (Product Managers), Gerentes de Proyecto (Project Manager), Gerentes de programa (Program Manager), Gerentes de ingeniería (Engineering Managers)

A veces una persona puede ejercer mas de un rol, como comente, ya que depende mucho de las empresas.

Product Manager: Traza el mapa (roadmap) del producto que se esta desarrollando, es el que habla con los clientes para ver que necesitamos introducir el proximo año o el proximo mes. 

Ejemplo: 

En el caso de Netflix podemos tener un Product Manager que este encargado de la sección de Registro de usuarios, otro estará encargado de la sección de Busqueda de peliculas, otro Product Manager puede estar encargado de sugerencias a usuarios segun intereses.

Project Manager: