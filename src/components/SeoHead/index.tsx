import Head from 'next/head';

import { SITE_URL, getJsonLd } from '@/lib/agent';
import { getSeo } from '@/lib/seo';

interface Props {
  language: string;
}

// <head> for a portfolio page: title, description, Open Graph, canonical,
// hreflang alternates and the JSON-LD graph.
export default function SeoHead({ language }: Props) {
  const seo = getSeo(language);

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content="João Pereira" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:locale:alternate" content={seo.alternateLocale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <link rel="canonical" href={seo.url} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
      <link rel="alternate" hrefLang="pt" href={`${SITE_URL}/pt`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en`} />
      <link
        rel="alternate"
        type="application/json"
        title="Resume (JSON Resume)"
        href={`${SITE_URL}/resume.json`}
      />
      <link
        rel="alternate"
        type="text/plain"
        title="llms.txt"
        href={`${SITE_URL}/llms.txt`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJsonLd(language)),
        }}
      />
    </Head>
  );
}
