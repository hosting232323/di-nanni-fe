// Fonte di verita' unica per i metadati SEO delle pagine statiche.
//
// Viene letta due volte:
//  - a runtime dalle view, tramite useHead();
//  - a build time dal plugin build/static-seo.js, che scrive gli stessi tag
//    dentro l'HTML servito.
//
// Cosi' i crawler che non eseguono JavaScript - anteprime social, assistenti
// AI, e Googlebot prima del render - leggono gli stessi metadati che vede
// l'utente.

export const SITE_URL = 'https://dorianadinanni.it';

export const SITE_NAME = 'Doriana Di Nanni';

export const DEFAULT_IMAGE = `${SITE_URL}/assets/logo.png`;

// Dati strutturati dell'attivita' emessi sulla home. Qui non ce ne sono:
// il plugin di build si aspetta comunque l'export.
export const SITE_JSON_LD = null;

// `path` e' la rotta reale definita in src/plugins/router.js: da qui derivano
// sia il canonical sia la sitemap, quindi non puo' divergere dal router.
// /blog/:id resta fuori: dipende dai post caricati via API.
export const seoRoutes = [
  {
    path: '/',
    priority: 1.0,
    title: 'Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari',
    description:
      'Doriana Di Nanni offre trattamenti olistici e complementari, compresi agopuntura, fitoterapia, aromaterapia, tecniche di massaggio e molto altro a Bari.',
    heading: 'Doriana Di Nanni',
    intro:
      'Medico chirurgo a Bari. Trattamenti olistici e complementari: agopuntura, fitoterapia, aromaterapia e tecniche di massaggio, in un percorso integrato con la medicina tradizionale.'
  },
  {
    path: '/chi-sono',
    priority: 0.9,
    title: 'Chi e\' Doriana Di Nanni - Medico e Terapie Olistiche a Bari',
    description:
      'Conosci la Dott.ssa Doriana Di Nanni, medico chirurgo specializzato in anatomia patologica e pratiche olistiche come agopuntura e fitoterapia a Bari.',
    heading: 'Chi sono',
    intro:
      'Dott.ssa Doriana Di Nanni, laureata in Medicina e Chirurgia a Bari e specializzata in Anatomia Patologica, con formazione in fitoterapia, aromaterapia e agopuntura.'
  },
  {
    path: '/trattamenti/agopuntura',
    priority: 0.9,
    title: 'Agopuntura a Bari - Doriana Di Nanni',
    description:
      'Sedute di agopuntura a Bari con la Dott.ssa Doriana Di Nanni, all\'interno di un percorso di cura personalizzato.',
    heading: 'Agopuntura',
    intro:
      'Sedute di agopuntura a Bari, inserite in un percorso di cura personalizzato e valutato caso per caso.'
  },
  {
    path: '/trattamenti/fitoterapia-aromaterapia',
    priority: 0.9,
    title: 'Fitoterapia e Aromaterapia a Bari - Doriana Di Nanni',
    description:
      'Consulenze di fitoterapia e aromaterapia a Bari con la Dott.ssa Doriana Di Nanni, formata presso la Scuola di Fitoterapia e Aromaterapia.',
    heading: 'Fitoterapia e Aromaterapia',
    intro:
      'Consulenze di fitoterapia e aromaterapia a Bari, con preparazioni scelte in base alla singola persona.'
  },
  {
    path: '/trattamenti/taopatch',
    priority: 0.8,
    title: 'Taopatch a Bari - Doriana Di Nanni',
    description:
      'Informazioni sull\'applicazione dei dispositivi Taopatch nello studio della Dott.ssa Doriana Di Nanni a Bari.',
    heading: 'Taopatch',
    intro:
      'Informazioni sull\'applicazione dei dispositivi Taopatch all\'interno del percorso terapeutico.'
  },
  {
    path: '/trattamenti/sobada-rebozo',
    priority: 0.8,
    title: 'Sobada e Rebozo a Bari - Doriana Di Nanni',
    description:
      'Trattamenti di sobada e rebozo a Bari con la Dott.ssa Doriana Di Nanni: tecniche manuali della tradizione messicana.',
    heading: 'Sobada e Rebozo',
    intro:
      'Trattamenti di sobada e rebozo: tecniche manuali della tradizione messicana, proposte a Bari.'
  },
  {
    path: '/trattamenti/tecniche-complementari',
    priority: 0.8,
    title: 'Tecniche Complementari a Bari - Coppettazione, Guasha, Tui Na, EFT',
    description:
      'Coppettazione, guasha, tui na e Emotional Freedom Technique nello studio della Dott.ssa Doriana Di Nanni a Bari.',
    heading: 'Tecniche complementari',
    intro:
      'Coppettazione, guasha, tui na e Emotional Freedom Technique, proposte come tecniche complementari.'
  },
  {
    path: '/scopri-di-piu',
    priority: 0.7,
    title: 'Scopri di piu\' - Doriana Di Nanni',
    description:
      'Approfondimenti sull\'approccio terapeutico della Dott.ssa Doriana Di Nanni e su come si svolge il percorso di cura.',
    heading: 'Scopri di piu\'',
    intro:
      'Approfondimenti sull\'approccio terapeutico e su come si svolge il percorso di cura.'
  },
  {
    path: '/blog',
    priority: 0.7,
    title: 'Blog - Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari',
    description:
      'Il blog di Doriana Di Nanni: articoli su agopuntura, fitoterapia, aromaterapia e altre tecniche olistiche.',
    heading: 'Blog',
    intro:
      'Articoli su agopuntura, fitoterapia, aromaterapia e altre tecniche olistiche.'
  },
  {
    path: '/contatti',
    priority: 0.8,
    title: 'Contatti - Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari',
    description:
      'Contatta la Dott.ssa Doriana Di Nanni per informazioni o per fissare un appuntamento a Bari.',
    heading: 'Contatti',
    intro:
      'Come contattare lo studio della Dott.ssa Doriana Di Nanni a Bari e fissare un appuntamento.'
  }
];

// Breadcrumb Home > Pagina, coerente con il canonical.
export const breadcrumbsOf = (route) =>
  route.path === '/'
    ? []
    : [
      { name: 'Home', url: SITE_URL },
      { name: route.heading, url: `${SITE_URL}${route.path}` }
    ];

// Argomenti pronti per useHead(), usati dalle view.
export const seoFor = (path) => {
  const route = seoRoutes.find((item) => item.path === path);

  if (!route) throw new Error(`seo.routes.js: rotta non censita: ${path}`);

  const url = `${SITE_URL}${route.path}`;

  return {
    title: route.title,
    meta: [
      { name: 'description', content: route.description },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: SITE_NAME },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'it_IT' },
      { property: 'og:title', content: route.title },
      { property: 'og:description', content: route.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: DEFAULT_IMAGE },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: route.title },
      { name: 'twitter:description', content: route.description },
      { name: 'twitter:image', content: DEFAULT_IMAGE }
    ],
    link: [{ rel: 'canonical', href: url }]
  };
};
