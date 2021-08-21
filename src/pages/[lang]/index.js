import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Tradutor
import i18next from 'i18next';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

// Componentes
import Acomplishments from '../../components/Acomplishments';
import Welcome from '../../components/Welcome';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Timeline from '../../components/TimeLine';
import { Layout } from '../../layout';
import { Section } from '../../styles/GlobalComponents';
import GraphicModel from '../../components/GraphicBackgroundModel';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname == '/') {
      router.push('/' + i18next.language.substring(0, 2));
    }
  });
  return (
    <Layout>
      <Section grid>
        <Welcome />
        <GraphicModel />
      </Section>
      <Projects />
      <Skills />
      <Timeline />
      <Acomplishments />
    </Layout>
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
