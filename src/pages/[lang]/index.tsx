import Head from 'next/head';

import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

import Phone from '../../components/Phone';
import BankApp from '../../components/BankApp';

export default function Home() {
  return (
    <>
      <Head>
        <title>João Pereira — Senior Mobile Developer</title>
        <meta
          name="description"
          content="Portfolio of João Pereira, a senior mobile developer with 6+ years shipping production mobile apps across fintech, social and logistics."
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
