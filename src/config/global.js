export default {
  global: {
    Name: 'Planeación y evaluación de procesos operativos en transporte',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos de la planeación y evaluación de procesos operativos en transporte. Explora los conceptos, tipos, normativa y herramientas de monitoreo aplicadas al sector. Permite al aprendiz interpretar indicadores de gestión y aplicar metodologías de seguimiento que favorecen la eficiencia y competitividad organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos y características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normativa y políticas del sector',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Objetivos de la organización',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Elementos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Monitoreo del transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Elementos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Características',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Pasos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas de monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Características',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Transporte',
      referencia:
        'Canal de Educación Logística. (2025, 10 de junio). <em>Planificación de operaciones logísticas y de transporte. Impacto en la eficiencia y sostenibilidad</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ncFMHbtOZhU',
    },
    {
      tema: 'Indicadores de gestión',
      referencia:
        'Elitelogis. (2024, 1 de agosto). <em>Herramientas y Métricas de Medición Logística</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_2FL76RGoOE',
    },
    {
      tema: 'Transporte',
      referencia:
        'Cedeño-Millares, R. D., et al. (2020). <em>La gestión del proceso de transporte de carga para las empresas transportistas.</em> Ciencias Holguín, 26(1).',
      tipo: 'PDF',
      link:
        'https://www.redalyc.org/journal/1815/181562407004/181562407004.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis predictivo',
      significado:
        'Técnica aplicada en logística para anticipar retrasos, riesgos o incidencias en el transporte mediante el uso de datos históricos y modelos estadísticos.',
    },
    {
      termino: 'ERP <em>(Enterprise Resource Planning)</em>',
      significado:
        'Sistema de planificación de recursos empresariales que integra procesos clave como finanzas, inventarios, compras y logística, permitiendo una gestión unificada.',
    },
    {
      termino: 'GPS (<em>Global Positioning System</em>)',
      significado:
        'Sistema de posicionamiento global que permite rastrear en tiempo real la ubicación de vehículos y mercancías en tránsito.',
    },
    {
      termino: 'Indicadores de gestión (KPIs)',
      significado:
        'Métricas cuantitativas que evalúan el desempeño de los procesos logísticos y de transporte, facilitando la toma de decisiones y la mejora continua.',
    },
    {
      termino: 'IoT (<em>Internet of Things</em>)',
      significado:
        'Red de dispositivos conectados que recopilan y transmiten datos, como sensores de temperatura, humedad o velocidad, utilizados en el monitoreo logístico.',
    },
    {
      termino: 'Monitoreo del transporte',
      significado:
        'Proceso de seguimiento constante de vehículos, rutas y carga para asegurar trazabilidad, visibilidad y cumplimiento de los tiempos de entrega.',
    },
    {
      termino: 'Multimodal',
      significado:
        'Modalidad de transporte que integra dos o más medios bajo la gestión de un solo operador y un único contrato, optimizando eficiencia y costos.',
    },
    {
      termino: 'Normativa de seguridad vial',
      significado:
        'Conjunto de regulaciones que garantizan la seguridad de conductores, pasajeros y carga, incluyendo límites de velocidad, licencias y planes estratégicos.',
    },
    {
      termino: 'Sostenibilidad en transporte',
      significado:
        'Estrategia que busca reducir el impacto ambiental de las operaciones logísticas mediante prácticas como la eficiencia energética y el uso de combustibles limpios.',
    },
    {
      termino: 'TMS (<em>Transportation Management System</em>)',
      significado:
        '<em>Software</em> especializado en planificar, optimizar y monitorear las operaciones de transporte, controlando rutas, costos y entregas.',
    },
    {
      termino: 'Transporte terrestre',
      significado:
        'Medio que moviliza personas y mercancías por carreteras o vías férreas, caracterizado por su flexibilidad y cobertura nacional.',
    },
    {
      termino: 'WMS (<em>Warehouse Management System</em>)',
      significado:
        '<em>Software</em> de gestión de almacenes que controla operaciones como recepción, inventario, preparación de pedidos y despacho, mejorando la eficiencia operativa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Mora García, L. A. (2023). <em>Logística del transporte y distribución de carga </em>(2.ª ed.). Ecoe Ediciones.',
      link:
        'https://www.ecoeediciones.com/product/logistica-del-transporte-y-distribucion-de-carga-2da-edicion-impreso/',
    },
    {
      referencia:
        'Mora, L. A., & Muñoz, R. D. (2009). <em>Diccionario de logística y negocios internacionales.</em> Ecoe Ediciones.',
      link:
        'https://www.buscalibre.com.co/libro-diccionario-de-logistica-y-negocios-internacionales/9789586156557/p/47020569',
    },
    {
      referencia:
        'Pérez Bello, O. A. (2016). <em>Optimización de procesos para la planeación y ejecución del mantenimiento en equipos especializados para el transporte y el izaje de cargas a nivel nacional</em> [Trabajo de grado, Universidad Militar Nueva Granada]. Repositorio Institucional UMNG.',
      link:
        'https://repository.umng.edu.co/bitstreams/15e35c7a-8b21-4182-aca8-1a2abc11cff8/download',
    },
    {
      referencia:
        'Silvera Escudero, R. E. (2019). <em>Logística matemática: La clave del éxito en la cadena de suministro.</em> Ecoe Ediciones Ltda.',
      link:
        'https://www.buscalibre.com.co/libro-logistica-matematica-la-,-del-exito-en-la-cadena-de-suministro-1ra-edicion/9789587719602/p/49964175',
    },
    {
      referencia:
        'Colombia. Congreso de la República. (1996). <em>Ley 336 de 1996: Por la cual se adopta el Estatuto Nacional de Transporte.</em>',
      link:
        'https://www.supertransporte.gov.co/documentos/2020/Diciembre/Notificaciones_16_RA/Resoluciones/860.pdf',
    },
    {
      referencia:
        'Colombia. Ministerio de Transporte. (2001). <em>Decreto 173 de 2001: Por el cual se reglamenta el Servicio Público de Transporte Terrestre Automotor de Carga.</em>',
      link: 'https://mintransporte.gov.co/descargar.php?idFile=130',
    },
    {
      referencia:
        'Colombia. Ministerio de Transporte. (2002). <em>Decreto 1609 de 2002: Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera.</em>',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6101',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yezid Arturo Choperena Guerrero',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador <i>web</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
