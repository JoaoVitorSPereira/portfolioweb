import Head from 'next/head';

import { SITE_URL, getJsonLd } from '../../lib/agent';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

import Phone from '../../components/Phone';
import BankApp from '../../components/BankApp';

export default function Home({ language }: { language: string }) {
  return (
    <>
      <Head>
        <title>João Pereira — Senior Mobile Developer</title>
        <meta
          name="description"
          content="Portfolio of João Pereira, a senior mobile developer with 6+ years shipping production mobile apps across fintech, social and logistics."
        />
        <link rel="canonical" href={`${SITE_URL}/${language}`} />
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
      <Phone>
        <BankApp />
      </Phone>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const language = getLanguage(params.lang);
  return {
    props: {
      language,
    },
  };
}
