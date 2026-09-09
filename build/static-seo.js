import fs from 'node:fs';
import path from 'node:path';

import {
  DEFAULT_IMAGE,
  SITE_JSON_LD,
  SITE_NAME,
  SITE_URL,
  breadcrumbsOf,
  seoRoutes
} from '../src/utils/seo.routes.js';

// L'app e' una SPA: il server manda un index.html vuoto e Vue lo riempie dopo.
// Chi non esegue JavaScript - anteprime social, assistenti AI, e Googlebot
// prima del render - vede quindi una pagina senza testo ne' metadati.
//
// Questo plugin, a build finita, scrive un index.html per ogni rotta pubblica
// con i meta tag della rotta gia' nel <head>. server.js li serve da dist/ senza
// doverli generare a runtime.
//
// Il testo di fallback nel body sta dentro un <noscript>: lo leggono i crawler
// che non eseguono JavaScript, ma il browser non lo renderizza mai quando lo
// script parte, quindi l'utente non vede alcun lampo di contenuto non
// stilizzato prima del mount di Vue.

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const metaTags = (route) => {
  const url = `${SITE_URL}${route.path}`;
  const breadcrumbs = breadcrumbsOf(route);
  const robots = route.noindex ? 'noindex, follow' : 'index, follow';
  // I siti sono in italiano; `locale` serve alle poche rotte tradotte.
  const locale = route.locale ?? 'it_IT';
  const language = locale.replace('_', '-');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    inLanguage: language,
    isPartOf: { '@id': `${SITE_URL}/#website` }
  };

  if (breadcrumbs.length) {
    jsonLd.breadcrumb = {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  const tags = [
    ['name', 'description', route.description],
    ['name', 'robots', robots],
    ['property', 'og:type', 'website'],
    ['property', 'og:site_name', SITE_NAME],
    ['property', 'og:locale', locale],
    ['property', 'og:title', route.title],
    ['property', 'og:description', route.description],
    ['property', 'og:url', url],
    ['property', 'og:image', DEFAULT_IMAGE],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', route.title],
    ['name', 'twitter:description', route.description],
    ['name', 'twitter:image', DEFAULT_IMAGE]
  ]
    .map(([attr, key, value]) => `    <meta ${attr}="${key}" content="${escapeHtml(value)}" />`)
    .join('\n');

  const blocks = [
    tags,
    `    <link rel="canonical" href="${url}" />`,
    `    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
  ];

  // Dati strutturati dell'attivita' (Organization, LocalBusiness, WebSite):
  // valgono per tutto il sito, quindi vanno emessi solo sulla home.
  if (SITE_JSON_LD && route.path === '/')
    blocks.push(`    <script type="application/ld+json">${JSON.stringify(SITE_JSON_LD)}</script>`);

  return blocks.join('\n');
};

// Testo leggibile senza JavaScript, con i link interni per far scoprire le
// altre pagine a chi non manda in esecuzione il router. Va in <noscript>:
// serve solo ai crawler senza JS, l'utente con lo script attivo non lo vede.
const fallbackBody = (route) => {
  const links = seoRoutes
    .filter((item) => item.path !== route.path && !item.noindex)
    .map((item) => `<li><a href="${item.path}">${escapeHtml(item.heading)}</a></li>`)
    .join('');

  return [
    '<div id="app"></div>',
    '    <noscript>',
    `      <h1>${escapeHtml(route.heading)}</h1>`,
    `      <p>${escapeHtml(route.intro)}</p>`,
    `      <nav aria-label="Pagine del sito"><ul>${links}</ul></nav>`,
    '    </noscript>'
  ].join('\n');
};

const renderRoute = (template, route) =>
  template
    // Il lang dell'HTML deve seguire la rotta, non il template: le pagine
    // tradotte altrimenti si dichiarerebbero in italiano.
    .replace(/<html lang="[^"]*"/, `<html lang="${(route.locale ?? 'it_IT').split('_')[0]}"`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
    .replace('</head>', `${metaTags(route)}\n  </head>`)
    .replace('<div id="app"></div>', fallbackBody(route));

// Nella sitemap vanno solo le pagine che vogliamo far indicizzare.
const renderSitemap = () =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...seoRoutes
      .filter((route) => !route.noindex)
      .map((route) =>
        [
          '  <url>',
          `    <loc>${SITE_URL}${route.path}</loc>`,
          `    <priority>${route.priority.toFixed(1)}</priority>`,
          '  </url>'
        ].join('\n')
      ),
    '</urlset>',
    ''
  ].join('\n');

export default function staticSeo() {
  return {
    name: 'static-seo',
    apply: 'build',
    closeBundle() {
      const outDir = path.resolve(process.cwd(), 'dist');
      const indexPath = path.join(outDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        this.warn('dist/index.html assente: SEO statica non applicata.');
        return;
      }

      const template = fs.readFileSync(indexPath, 'utf8');

      for (const route of seoRoutes) {
        const html = renderRoute(template, route);
        const target =
          route.path === '/'
            ? indexPath
            : path.join(outDir, route.path.slice(1), 'index.html');

        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, html);
      }

      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), renderSitemap());

      this.info(`SEO statica applicata a ${seoRoutes.length} rotte + sitemap.xml`);
    }
  };
}
