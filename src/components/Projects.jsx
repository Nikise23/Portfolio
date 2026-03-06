import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
      name: 'Sistema de Gestión de Historias Clínicas con Sala de Espera en Tiempo Real',
      description: 'Sistema backend modular para gestión de historias clínicas médicas con flujo de atención en tiempo real. Implementa sala de espera dinámica, control de estados de atención y generación de historias clínicas vinculadas a cada consulta.',
      technologies: ['NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'JWT', 'class-validator'],
      architecture: 'Arquitectura backend modular basada en NestJS con separación clara de módulos (auth, pacientes, atenciones e historias clínicas). Persistencia mediante PostgreSQL y Prisma ORM con modelo relacional.',
      link: 'https://consultorios-medico-colom.onrender.com/login',
      tags: ['BACKEND', 'API REST', 'PRODUCCIÓN', 'SISTEMA REAL'],
      features: [
        'Sala de espera en tiempo real con estados dinámicos',
        'Control de acceso basado en roles (admin, secretaria, médico)',
        'Flujo completo de atención médica con historias clínicas',
        'Autenticación segura con JWT y validación de datos',
        'Arquitectura modular y escalable con NestJS'
      ],
    },
    {
      name: 'Portal de Noticias',
      description: 'Portal web de noticias desarrollado como aplicación SPA que consume una API REST para mostrar artículos dinámicos. Incluye autenticación de usuarios, lectura de artículos y sistema de gestión de contenido.',
      technologies: ['Vue 3', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      architecture: 'Arquitectura de tres capas compuesta por frontend SPA en Vue, backend REST API en Node.js y base de datos MongoDB.',
      link: 'https://portal-de-noticias-backend.onrender.com',
      tags: ['FULL STACK', 'API REST', 'PRODUCCIÓN', 'SISTEMA REAL'],
      features: [
        'Aplicación SPA con Vue 3 y composición API',
        'Backend REST API con autenticación JWT',
        'Sistema de gestión de contenido dinámico',
        'Persistencia de datos con MongoDB',
        'Interfaz moderna y responsive'
      ],
    },
    {
      name: 'Sistema de Gestión Odontológica',
      description: 'Sistema completo de gestión para consultorios odontológicos con odontograma interactivo. Permite administrar pacientes, tratamientos, pagos y registros clínicos con historial completo por paciente.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Joi'],
      architecture: 'Aplicación full stack con frontend React y backend REST API en Node.js, utilizando MongoDB Atlas para persistencia de datos.',
      link: 'https://odontologia-app-jk2l.onrender.com/login',
      tags: ['FULL STACK', 'API REST', 'PRODUCCIÓN', 'SISTEMA REAL'],
      features: [
        'Odontograma interactivo para registro de tratamientos',
        'Gestión completa de pacientes y historial clínico',
        'Sistema de pagos con cálculo automático de saldos',
        'Registro de tratamientos asociados a piezas dentales',
        'Autenticación y autorización con JWT'
      ],
    },
    {
      name: 'Sistema de Gestión de Consultorio Médico',
      description: 'Aplicación web para administración integral de consultorios médicos. Permite gestionar pacientes, turnos, agenda médica, pagos e historias clínicas con manejo de roles y reportes administrativos.',
      technologies: ['Python', 'Flask', 'SQLite', 'Jinja2'],
      architecture: 'Aplicación monolítica en Flask con persistencia en base de datos relacional y sistema de autenticación basado en roles.',
      link: 'https://colom-bobbiesi.onrender.com/login',
      tags: ['FULL STACK', 'PRODUCCIÓN', 'SISTEMA REAL'],
      features: [
        'Gestión completa de pacientes y turnos',
        'Agenda médica y control de disponibilidad',
        'Sistema de roles (médico, secretaria, administrador)',
        'Generación de historias clínicas y reportes',
        'Gestión de pagos y facturación'
      ],
    },
    {
      name: 'Sistema de Turnos Médicos con Portal Público',
      description: 'Sistema web para gestión de consultorios médicos con portal público para solicitud de turnos online. Permite administrar turnos, pacientes, agenda médica y registros clínicos.',
      technologies: ['Python', 'Flask', 'SQLite'],
      architecture: 'Backend en Flask con renderizado mediante templates Jinja2 y persistencia en base de datos relacional.',
      link: 'https://consultorios-colom.onrender.com/',
      tags: ['FULL STACK', 'PRODUCCIÓN', 'SISTEMA REAL'],
      features: [
        'Portal público para solicitud de turnos online',
        'Gestión administrativa de pacientes y turnos',
        'Agenda médica y control de disponibilidad',
        'Registros clínicos y seguimiento de pacientes',
        'Interfaz intuitiva para pacientes y administradores'
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Proyectos
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

