interface Experience {
  id: number;
  title: string;
  titlePT: string;
  role: string;
  rolePT: string;
  paragraphs: string[];
  paragraphsPT: string[];
  tags: string[];
}

interface TimeLineItem {
  year: number;
  text: string;
  textPT: string;
}

export const experiences: Experience[] = [
  {
    id: 0,
    title: 'Fintech & Digital Banking',
    titlePT: 'Fintech & Banco Digital',
    role: 'Senior Mobile Developer',
    rolePT: 'Desenvolvedor Mobile Sênior',
    paragraphs: [
      'Senior Mobile Engineer responsible for the end-to-end technical direction of a fintech mobile application built from the ground up. Owned the mobile architecture and made key technical decisions focused on scalability, maintainability, security, and long-term code quality.',
      "Led the day-to-day engineering workflow, including breaking down technical requirements, delegating work to junior developers, conducting code reviews, and establishing development standards and engineering practices across the project. Defined and maintained the project's Git workflow, branching strategy, and versioning structure to support a consistent and controlled development process.",
      'Designed and implemented secure authentication and identity flows using encrypted storage, App Attest, biometrics, and platform-level security capabilities. Developed and maintained REST API integrations in close collaboration with backend engineers, ensuring reliable communication between the mobile application and backend services.',
      'Owned the mobile release lifecycle across iOS and Android, including production builds, App Store and Google Play releases, and over-the-air updates. Investigated and resolved production issues while continuously improving application stability, performance, and maintainability.',
      "Also worked on a POS application integrating a third-party native SDK. Designed and implemented native Kotlin modules and a React Native native bridge to expose the SDK's capabilities to the JavaScript layer, keeping the application architecture centered around React Native while encapsulating device-specific and SDK-level functionality within the native layer.",
    ],
    paragraphsPT: [
      'Atuação como Senior Mobile Engineer, responsável pela direção técnica de uma aplicação mobile fintech desenvolvida do zero. Responsável pela arquitetura da aplicação de ponta a ponta e pelas principais decisões técnicas, com foco em escalabilidade, manutenibilidade, segurança e qualidade de código a longo prazo.',
      'Liderança do fluxo de desenvolvimento no dia a dia, incluindo a divisão de requisitos técnicos, delegação de tarefas para desenvolvedores juniores, revisão de código e definição de padrões e boas práticas de engenharia adotados pelo projeto. Definição e manutenção da estratégia de versionamento do projeto, incluindo fluxo de trabalho com Git, estratégia de branches e estrutura de versionamento, garantindo um processo de desenvolvimento consistente e controlado.',
      'Desenvolvimento de fluxos seguros de autenticação e identidade utilizando armazenamento criptografado, App Attest, biometria e recursos de segurança das plataformas. Desenvolvimento e manutenção de integrações com APIs REST em colaboração direta com os desenvolvedores de backend, garantindo uma comunicação confiável entre a aplicação mobile e os serviços backend.',
      'Responsável pelo ciclo de publicação da aplicação em iOS e Android, incluindo criação de builds de produção, publicação na App Store e Google Play e gerenciamento de atualizações OTA. Atuação na investigação e resolução de problemas em produção, além de melhorias contínuas de estabilidade, performance e manutenibilidade da aplicação.',
      'Também atuei no desenvolvimento de uma aplicação POS integrada a um SDK nativo de terceiros. Desenvolvi módulos nativos em Kotlin e uma ponte nativa (React Native Native Bridge) para disponibilizar as funcionalidades do SDK para a camada JavaScript, mantendo a aplicação centralizada em React Native enquanto as responsabilidades específicas do dispositivo e do SDK permanecem encapsuladas na camada nativa.',
    ],
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Zustand',
      'React Query',
      'REST APIs',
      'Expo Router',
      'Native SDK Integration',
      'Kotlin',
      'Native Bridge',
      'POS',
      'Architecture',
      'Code Review',
      'Git Branching Strategy',
      'App Attest',
      'Biometrics',
      'EAS Update',
      'Apple App Store',
      'Google Play',
    ],
  },
  {
    id: 1,
    title: 'Social Networking',
    titlePT: 'Rede Social',
    role: 'Mobile Software Engineer',
    rolePT: 'Engenheiro de Software Mobile',
    paragraphs: [
      'Mobile Software Engineer on a large-scale social networking platform used by thousands of users, built around communities, a live feed, and rich post interactions. Developed and maintained production features focused on scalable UI, performance, and user engagement.',
      'Built the client side of the core social features: communities, feed posting, embedded content inside posts, real-time likes and dislikes, and comments on each post. Used GraphQL with Apollo Client to query and mutate data and keep the feed, reactions, and comments up to date live.',
      'Worked against a role-based access control (RBAC) backend, shaping the interface and the actions available to each user around their role and permissions.',
      'Migrated an existing React Native application from React Native CLI to Expo, improving maintainability and simplifying the development and deployment workflow. Built gamification and engagement features, reusable and performant UI components, and cross-platform experiences using React Native Web, collaborating with designers, backend engineers, and QA to deliver and maintain production features.',
    ],
    paragraphsPT: [
      'Engenheiro de Software Mobile em uma plataforma de rede social de larga escala usada por milhares de pessoas, construída em torno de comunidades, feed em tempo real e interações ricas em posts. Desenvolvi e mantive funcionalidades em produção com foco em UI escalável, performance e engajamento.',
      'Construí o lado cliente das principais funcionalidades sociais: comunidades, publicação no feed, conteúdo incorporado (embed) nos posts, curtidas e descurtidas em tempo real e comentários em cada post. Utilizei GraphQL com Apollo Client para consultar e alterar dados e manter feed, reações e comentários atualizados ao vivo.',
      'Trabalhei com um backend baseado em controle de acesso por papéis (RBAC), adaptando a interface e as ações disponíveis para cada usuário de acordo com seu papel e suas permissões.',
      'Migrei uma aplicação React Native existente do React Native CLI para o Expo, melhorando a manutenibilidade e simplificando o fluxo de desenvolvimento e deploy. Construí funcionalidades de gamificação e engajamento, componentes de UI reutilizáveis e performáticos e experiências multiplataforma com React Native Web, colaborando com designers, engenheiros de backend e QA para entregar e manter funcionalidades em produção.',
    ],
    tags: [
      'React Native',
      'Expo',
      'React Native Web',
      'TypeScript',
      'GraphQL',
      'Apollo Client',
      'React Query',
      'Styled Components',
      'REST APIs',
    ],
  },
  {
    id: 2,
    title: 'Delivery & Map Tracking',
    titlePT: 'Delivery & Rastreamento em Mapa',
    role: 'Mobile Software Engineer',
    rolePT: 'Engenheiro de Software Mobile',
    paragraphs: [
      'Developed mobile features focused on delivery management, real-time tracking, and location-based functionality. Implemented Google Maps integration, route visualization and delivery workflows, as well as delivery tracking capabilities.',
      'Integrated Firebase Cloud Messaging for push notifications and consumed REST APIs while collaborating with backend developers. Also participated in application publishing, maintenance, and production support.',
    ],
    paragraphsPT: [
      'Desenvolvi funcionalidades mobile focadas em gestão de entregas, rastreamento em tempo real e recursos baseados em localização. Implementei a integração com o Google Maps, visualização de rotas e fluxos de entrega, além de recursos de rastreamento de entregas.',
      'Integrei o Firebase Cloud Messaging para push notifications e consumi APIs REST colaborando com desenvolvedores de backend. Também participei da publicação, manutenção e suporte em produção do aplicativo.',
    ],
    tags: [
      'React Native',
      'Firebase',
      'Firebase Cloud Messaging',
      'Google Maps',
      'Redux',
      'REST APIs',
    ],
  },
  {
    id: 3,
    title: 'Live Streaming',
    titlePT: 'Live Streaming',
    role: 'Mobile Software Engineer',
    rolePT: 'Engenheiro de Software Mobile',
    paragraphs: [
      'Developed reusable React Native components and mobile functionality for live video streaming experiences. Focused on building maintainable interfaces, improving application usability, and optimizing mobile application performance.',
      'Worked closely with product and design teams to translate requirements into production-ready mobile features.',
    ],
    paragraphsPT: [
      'Desenvolvi componentes React Native reutilizáveis e funcionalidades mobile para experiências de live streaming. Foquei em construir interfaces de fácil manutenção, melhorar a usabilidade e otimizar a performance do aplicativo.',
      'Trabalhei de perto com os times de produto e design para transformar requisitos em funcionalidades mobile prontas para produção.',
    ],
    tags: [
      'React Native',
      'TypeScript',
      'JavaScript',
      'Reusable Components',
      'Mobile UI',
      'Performance Optimization',
    ],
  },
  {
    id: 4,
    title: 'Software House',
    titlePT: 'Software House',
    role: 'Frontend & Mobile Developer',
    rolePT: 'Desenvolvedor Frontend & Mobile',
    paragraphs: [
      'Developed applications for web and mobile platforms using React and React Native, building reusable UI components and integrating applications with REST APIs, contributing to production-ready features and application maintenance.',
      'Worked alongside senior developers throughout the development process, contributing to feature implementation, code maintenance, releases, and improvements to existing applications.',
    ],
    paragraphsPT: [
      'Desenvolvi aplicações para web e mobile usando React e React Native, construindo componentes de UI reutilizáveis e integrando as aplicações com APIs REST, contribuindo para funcionalidades prontas para produção e para a manutenção das aplicações.',
      'Trabalhei junto a desenvolvedores seniores em todo o processo de desenvolvimento, contribuindo com a implementação de funcionalidades, manutenção de código, releases e melhorias em aplicações existentes.',
    ],
    tags: [
      'React',
      'React Native',
      'JavaScript',
      'TypeScript',
      'REST APIs',
      'Reusable UI Components',
      'Git',
    ],
  },
];

export const TimeLineData: TimeLineItem[] = [
  {
    year: 2018,
    text: 'I started messing with technology and got hooked on JavaScript front end.',
    textPT:
      'Comecei a mexer com tecnologia e me apaixonei por front end com JavaScript.',
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
    text: 'Senior Mobile Developer with 6+ years shipping production apps across fintech, social and logistics.',
    textPT:
      'Desenvolvedor Mobile Sênior com mais de 6 anos entregando apps em produção em fintech, social e logística.',
  },
];

export const skillGroups = [
  {
    title: 'Mobile',
    tags: [
      'React Native',
      'Expo',
      'Expo Router',
      'React Navigation',
      'Zustand',
      'Redux',
      'Native SDK Integration',
      'Biometrics',
      'App Attest',
      'Secure Storage',
      'EAS Build/Update',
    ],
  },
  {
    title: 'Front-End',
    tags: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Three.js',
      'Styled-Components',
      'React Query',
    ],
  },
  {
    title: 'Tooling & Practices',
    tags: [
      'REST APIs',
      'GraphQL',
      'Firebase',
      'Git',
      'App Store Connect',
      'Google Play Console',
      'Figma',
      'Postman',
    ],
  },
];
