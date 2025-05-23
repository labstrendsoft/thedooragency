import { Service } from '../type/Service';
import Branding1 from '@public/service/branding1.webp';
import Branding2 from '@public/service/branding2.webp';
import Mkt1 from '@public/service/mk1.webp';
import Mkt2 from '@public/service/mkt2.webp';
import Web1 from '@public/service/web1.webp';
import Web2 from '@public/service/web2.webp';
import Produccion1 from '@public/service/produccion1.webp';
import Produccion2 from '@public/service/produccion2.webp';

export const services: Service[] = [
  {
    id: 'item-1',
    title: 'Branding',
    subtitle: 'Creamos marcas que conectan, perduran y destacan.',
    description:
      'Desde la identidad visual hasta la voz de marca, diseñamos todo lo necesario para que una marca cobre vida con propósito y coherencia. Nos aseguramos de que cada elemento refleje la esencia del negocio y comunique de forma clara y memorable.',
    image: Branding1,
    contentImage: Branding2,
    steps: [
      {
        title: 'Descubrimiento',
        text: 'Investigamos y analizamos el negocio, su audiencia, el mercado y sus competidores. Escuchamos tu historia y tus objetivos para entender qué debe comunicar tu marca.',
      },
      {
        title: 'Estrategia de marca',
        text: 'Definimos el propósito, los valores, el tono y la personalidad de la marca. Aquí nacen la voz y el alma de lo que luego se plasmará visualmente.',
      },
      {
        title: 'Identidad visual',
        text: 'Creamos el logotipo, paleta de colores, tipografías, iconografía y todo el sistema visual. Nos aseguramos de que cada pieza transmita coherencia y sea adaptable a cualquier formato.',
      },
      {
        title: 'Manual de marca',
        text: 'Desarrollamos un Brandbook o guía de uso que asegura que la marca se aplique correctamente, sin perder fuerza ni consistencia.',
      },
      {
        title: 'Aplicaciones de marca',
        text: 'Llevamos la marca a la realidad: tarjetas, redes sociales, papelería, packaging, piezas digitales, entre otros.',
      },
    ],
  },
  {
    id: 'item-2',
    title: 'Marketing Digital',
    subtitle: 'Estrategias que conectan, convierten y posicionan tu marca.',
    description:
      'Diseñamos campañas digitales orientadas a resultados, optimizando tu presencia en redes sociales, buscadores y medios digitales. Nuestro enfoque combina creatividad con análisis para lograr impacto real.',
    image: Mkt1,
    contentImage: Mkt2,
    steps: [
      {
        title: 'Diagnóstico digital',
        text: 'Analizamos tu presencia actual, tus competidores y tu audiencia ideal. Detectamos oportunidades y trazamos un punto de partida.',
      },
      {
        title: 'Estrategia y planificación',
        text: 'Diseñamos un plan integral de contenido, pauta, embudos y canales adecuados (Meta Ads, Google Ads, SEO, email marketing, etc.).',
      },
      {
        title: 'Gestión y ejecución',
        text: 'Creamos y publicamos contenido atractivo, lanzamos campañas de publicidad pagada y gestionamos tus redes para lograr engagement y conversiones.',
      },
      {
        title: 'Monitoreo y optimización',
        text: 'Medimos cada acción, analizamos métricas y ajustamos constantemente para mejorar el rendimiento de tus campañas.',
      },
      {
        title: 'Reportes y análisis',
        text: 'Recibirás informes claros con resultados, aprendizajes y próximos pasos estratégicos.',
      },
    ],
  },
  {
    id: 'item-3',
    title: 'Desarrollo Web',
    subtitle: 'Creamos sitios que representan tu esencia y generan resultados.',
    description:
      'Diseñamos y desarrollamos páginas web funcionales, atractivas y optimizadas. Tu sitio será el punto de encuentro ideal entre tu marca y tus clientes.',
    image: Web1,
    contentImage: Web2,
    steps: [
      {
        title: 'Briefing y conceptualización',
        text: 'Conversamos contigo para entender tu marca, objetivos y necesidades. Definimos funcionalidades clave, público objetivo y estilo visual.',
      },
      {
        title: 'Arquitectura y diseño UI/UX',
        text: 'Creamos la estructura del sitio (mapa web) y el diseño visual (UI), asegurando una experiencia de usuario clara, intuitiva y alineada a tu branding.',
      },
      {
        title: 'Desarrollo y programación',
        text: 'Construimos el sitio en plataformas como WordPress, HTML personalizado u otras tecnologías según el proyecto. Lo hacemos rápido, limpio y seguro.',
      },
      {
        title: 'Revisión y pruebas',
        text: 'Verificamos que todo funcione perfectamente en desktop, tablet y móvil. Optimizamos velocidad, SEO técnico y experiencia de navegación.',
      },
      {
        title: 'Lanzamiento y soporte',
        text: 'Publicamos tu web y te acompañamos con soporte técnico, mantenimiento o capacitaciones según lo que necesites.',
      },
    ],
  },
  {
    id: 'item-4',
    title: 'Producción Audiovisual',
    subtitle: 'Creamos piezas que cuentan historias, generan impacto y elevan tu marca.',
    description:
      'Ya sea para campañas publicitarias, contenido de redes sociales, eventos o storytelling de marca, producimos material audiovisual de alta calidad adaptado a tus objetivos y plataformas.',
    image: Produccion2,
    contentImage: Produccion1,
    steps: [
      {
        title: 'Brief creativo',
        text: 'Escuchamos tu idea, entendemos tu público y definimos el objetivo del contenido. Aquí se construye la base conceptual del proyecto.',
      },
      {
        title: 'Guion y planificación',
        text: 'Escribimos el guion, armamos la escaleta y organizamos toda la logística: locaciones, equipos, horarios y necesidades técnicas.',
      },
      {
        title: 'Producción',
        text: 'Rodamos el contenido con cámaras profesionales o móviles, dependiendo del enfoque y del canal. Nuestro equipo se encarga de cada detalle técnico y visual.',
      },
      {
        title: 'Postproducción',
        text: 'Editamos, agregamos música, animaciones, efectos y diseño sonoro para entregar una pieza dinámica, atractiva y lista para ser publicada.',
      },
      {
        title: 'Entrega multiformato',
        text: 'Te entregamos el material optimizado para cada plataforma: reels, historias, YouTube, TikTok, TV, web, etc.',
      },
    ],
  },
  // Puedes agregar más servicios aquí
];
