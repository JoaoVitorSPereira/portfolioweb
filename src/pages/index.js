import Acomplishments from '../components/Acomplishments';
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Timeline from '../components/TimeLine';
import { Layout } from '../layout';
import { Section } from '../styles/GlobalComponents';
import GraphicModel from '../components/GraphicBackgroundModel';

// import './i18n';

const Home = () => {
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
};

export default Home;
