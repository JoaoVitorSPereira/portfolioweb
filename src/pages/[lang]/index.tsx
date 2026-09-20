import Head from 'next/head';

import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

// Componentes
import Acomplishments from '../../components/Acomplishments';
import Welcome from '../../components/Welcome';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Timeline from '../../components/TimeLine';
import { Layout } from '../../layout';
import { Section } from '../../styles/GlobalComponents';

export default function Home() {
  return (
    <>
      <Head>
        <title>João Pereira — Senior React Native Developer</title>
        <meta
          name="description"
          content="Portfolio of João Pereira, a senior React Native developer with 5+ years shipping production mobile apps across fintech, social and logistics."
        />
      </Head>
      <Layout>
        <Section>
          <Welcome />
        </Section>
        <Projects />
        <Skills />
        <Timeline />
        <Acomplishments />
      </Layout>
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
