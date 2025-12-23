import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/deeptalk.webp',
    title: 'DeepTalk - Mental Health App',
    description:
      'A comprehensive mental health application connecting users with professional psychologists. Available on web, iOS, and Android platforms with separate apps for users and psychologist partners.',
    technologies: [
      'React Native',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Firebase',
      'AWS',
      'MySQL',
      'Microservices',
      'RabbitMQ',
      'GraphQL',
      'Redis',
    ],
    links: {
      preview: 'https://www.deeptalk.co.id/',
      playstoreUser:
        'https://play.google.com/store/apps/details?id=com.deeptalkindonesia.app',
      playstorePsikolog:
        'https://play.google.com/store/apps/details?id=com.deeptalk.mitrapsikolog',
      appstoreUser:
        'https://apps.apple.com/id/app/deeptalk-mental-health-app/id6745482376?l=id',
      appstorePsikolog:
        'https://apps.apple.com/my/app/psikolog-deeptalk/id6745827673?l=ms',
    },
  },
  {
    image: '/images/logosinstitute.webp',
    title: 'Logos Institute',
    description:
      'Online marketplace platform for psychology, HR, and mental health courses. Provides comprehensive learning resources and professional development programs.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Microservices',
      'AWS',
      'GraphQL',
      'Redis',
    ],
    links: {
      preview: 'https://www.logosinstitute.id/',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Fullstack Developer',
    company: 'PT Logos Indonesia Mandiri, Jakarta',
    description:
      'Developed psychology websites and assessment services as main focus. Collaborated closely with CEO and product owners to lead development of advanced applications tailored to company needs. Actively participated in development of DeepTalk mobile applications, creating meaningful and impactful digital experiences for users.',
    period: 'Jan 2024 – Aug 2025',
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'React Native',
      'AWS',
      'MySQL',
      'Microservices',
      'RabbitMQ',
      'Firebase',
      'GraphQL',
      'Figma',
    ],
  },
  {
    title: 'Fullstack Developer Bootcamp',
    company: 'Hacktiv8, Jakarta',
    description:
      'Undertook an intensive Immersive JavaScript Full Stack program, refining skills in software development. Contributed to various projects demonstrating proficiency in both front-end and back-end technologies, including developing applications like Detik News Portal clone and HMDB Movies platform.',
    period: 'June – October 2023',
    technologies: [
      'JavaScript',
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'AWS',
      'Microservices',
      'Vue.js',
      'Docker',
      'AJAX',
    ],
  },
  {
    title: 'Warehouse Officer',
    company: 'PT. Enseval Putera Megatrading Tbk, Surabaya',
    description:
      'Effectively utilized Oracle Applications to manage and optimize warehouse operations including inventory tracking, order processing, and maintaining accurate records. Implemented best practices to maintain high levels of inventory accuracy and ensure efficient warehouse operations.',
    period: 'October 2021 – June 2023',
    technologies: ['Oracle Applications', 'Inventory Management', 'SAP'],
  },
  {
    title: 'Risk Management (Internship)',
    company: 'PT. Angkasa Pura 1 (Persero), Surabaya',
    description:
      'Actively involved in the identification and analysis of information threats within the ICT department, with a focus on baggage services. Developed expertise in ISO 27001 and ISO 27005 standards, contributing to the development and implementation of robust information security management systems.',
    period: 'June 2020 – June 2021',
    technologies: ['ISO 27001', 'ISO 27005', 'Risk Management', 'ICT Security'],
  },
  {
    title: 'Web Developer (Internship)',
    company: 'PT. Stars International Shoes, Surabaya',
    description:
      'Developed a web-based store search and logistics tracking system to streamline operations and improve efficiency.',
    period: 'June 2018 – May 2019',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.vue className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.express className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
  { icon: <Icons.aws className="size-12" /> },
  { icon: <Icons.microservices className="size-12" /> },
  { icon: <Icons.rabbitmq className="size-12" /> },
  { icon: <Icons.postgresql className="size-12" /> },
  { icon: <Icons.mysql className="size-12" /> },
  { icon: <Icons.mongodb className="size-12" /> },
  { icon: <Icons.firebase className="size-12" /> },
  { icon: <Icons.graphql className="size-12" /> },
  { icon: <Icons.reactnative className="size-12" /> },
] as const;
