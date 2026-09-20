interface Project {
  title: string;
  description: string;
  descriptionPT: string;
  image: string;
  tags: string[];
  source: string;
  visit: string;
  id: number;
}

interface TimeLineItem {
  year: number;
  text: string;
  textPT: string;
}

export const projects: Project[] = [
  {
    title: 'DKMBank — Digital Banking',
    description:
      'Production fintech app for secure banking and money transfers. Integrated biometric verification, App Attest and encrypted storage, and manage releases end to end with EAS Build/Update.',
    descriptionPT:
      'App fintech em produção para operações bancárias e transferências. Integrei verificação biométrica, App Attest e armazenamento criptografado, e cuido dos releases de ponta a ponta com EAS Build/Update.',
    image: '/images/1.png',
    tags: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Biometrics'],
    source: '',
    visit: '',
    id: 0,
  },
  {
    title: 'ECGlobal — Social & Gamification',
    description:
      'Large-scale social networking platform used by thousands. Led the migration from React Native CLI to Expo and shipped gamification features on both native and React Native Web.',
    descriptionPT:
      'Plataforma social de larga escala usada por milhares de pessoas. Liderei a migração de React Native CLI para Expo e entreguei funcionalidades de gamificação em nativo e React Native Web.',
    image: '/images/2.png',
    tags: ['React Native', 'Expo', 'React Native Web', 'React Query'],
    source: '',
    visit: '',
    id: 1,
  },
  {
    title: 'BuiltCode — Logistics & Delivery',
    description:
      'Delivery operations app with live route tracking. Built Google Maps integration, real-time tracking and push notifications through Firebase Cloud Messaging.',
    descriptionPT:
      'App de operações de entrega com rastreamento de rota em tempo real. Construí integração com Google Maps, tracking ao vivo e push notifications via Firebase Cloud Messaging.',
    image: '/images/3.png',
    tags: ['React Native', 'Firebase', 'Google Maps', 'Redux'],
    source: '',
    visit: '',
    id: 2,
  },
  {
    title: 'Mercado Network Systems — Live Streaming',
    description:
      'Reusable component library for a live video streaming app, focused on usability and rendering performance for a fast-moving product team.',
    descriptionPT:
      'Biblioteca de componentes reutilizáveis para um app de live streaming, com foco em usabilidade e performance de renderização para um time de produto ágil.',
    image: '/images/4.png',
    tags: ['React Native', 'Live Streaming', 'UI Performance'],
    source: '',
    visit: '',
    id: 3,
  },
];

export const TimeLineData: TimeLineItem[] = [
  {
    year: 2018,
    text: 'My brother introduced me to HTML, CSS and Javascript — and I got hooked.',
    textPT:
      'Meu irmão me apresentou HTML, CSS e Javascript — e eu me apaixonei.',
  },
  {
    year: 2020,
    text: 'First developer job, building React and React Native applications.',
    textPT:
      'Primeiro emprego como desenvolvedor, construindo aplicações React e React Native.',
  },
  {
    year: 2022,
    text: 'Shipped logistics and live-streaming apps, then joined a social platform used by thousands, leading its migration to Expo.',
    textPT:
      'Entreguei apps de logística e live streaming, e depois entrei em uma plataforma social usada por milhares, liderando a migração para Expo.',
  },
  {
    year: 2024,
    text: 'Moved into fintech as a Mobile Software Engineer, working on secure banking and native SDK integrations.',
    textPT:
      'Entrei no fintech como Mobile Software Engineer, trabalhando com banking seguro e integrações de SDKs nativos.',
  },
  {
    year: 2026,
    text: 'Senior React Native Developer with 5+ years shipping production apps across fintech, social and logistics.',
    textPT:
      'Desenvolvedor React Native Sênior com mais de 5 anos entregando apps em produção em fintech, social e logística.',
  },
];
