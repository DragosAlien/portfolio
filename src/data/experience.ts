import type { Localized } from '~/i18n';

export interface Role {
  role: string;
  company: string;
  /** ISO year-month. `end: null` means current. */
  start: string;
  end: string | null;
  location?: Localized;
  arrangement: Localized;
  points: Localized<string[]>;
  tech: string[];
}

export const experience: Role[] = [
  {
    role: 'Software Developer',
    company: 'PARENTESIKUADRA',
    start: '2023-12',
    end: null,
    location: { en: 'Casale Monferrato', it: 'Casale Monferrato' },
    arrangement: { en: 'Hybrid', it: 'Ibrido' },
    points: {
      en: [
        'Develop and maintain Laravel applications in production, with React and Inertia.js frontends; main author of several of them and of the internal template new projects start from.',
        'Contribute to Klancy, a multi-tenant application built on WebSockets, including configuration and customisation for individual clients.',
        'Integrate external systems: Fluida and Tilby APIs, AHRW SOAP services, and XML files generated for import into G1.',
        'Containerise applications with Docker, ship production releases, and maintain and migrate Linux/Plesk servers.',
        'Diagnose frontend, backend and API issues, including Composer and npm dependency conflicts.',
        'Work with clients directly on requirements and support.',
      ],
      it: [
        'Sviluppo e manutenzione di applicazioni Laravel in produzione, con frontend in React e Inertia.js; autore principale di diverse di queste e del template interno da cui partono i nuovi progetti.',
        'Sviluppo continuativo di Klancy, applicazione multi-tenant basata su WebSocket, incluse configurazioni e personalizzazioni per i singoli clienti.',
        'Integrazioni con sistemi esterni: API Fluida e Tilby, servizi SOAP AHRW e generazione di file XML per l’import in G1.',
        'Containerizzazione con Docker, rilasci in produzione, manutenzione e migrazione di server Linux/Plesk.',
        'Diagnosi di problemi frontend, backend e API, compresi i conflitti tra dipendenze Composer e npm.',
        'Rapporto diretto con i clienti per requisiti e assistenza.',
      ],
    },
    tech: ['PHP', 'Laravel', 'React', 'Inertia.js', 'Node.js', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Linux', 'REST', 'Stripe', 'Pest', 'PHPStan', 'SOAP', 'XML', 'WebSockets', 'Electron'],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'PARENTESIKUADRA',
    start: '2023-05',
    end: '2023-12',
    location: { en: 'Casale Monferrato', it: 'Casale Monferrato' },
    arrangement: { en: 'On-site · Internship', it: 'In sede · Tirocinio' },
    points: {
      en: [
        'Built responsive React interfaces integrated with Laravel applications and backend services.',
        'Frontend bug fixing and maintenance in a Git-based workflow.',
      ],
      it: [
        'Sviluppo di interfacce React responsive integrate con applicazioni Laravel e servizi backend.',
        'Correzione di bug frontend e manutenzione con un flusso di lavoro basato su Git.',
      ],
    },
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Laravel', 'Git'],
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'Syrma Soluzioni Informatiche S.r.l.',
    start: '2022-09',
    end: '2023-04',
    location: { en: 'Turin', it: 'Torino' },
    arrangement: { en: 'On-site · Full-time', it: 'In sede · Tempo pieno' },
    points: {
      en: [
        'Developed Drupal web applications in PHP and worked on React Native mobile apps.',
        'Bug fixes and small features, collaborating through Git.',
      ],
      it: [
        'Sviluppo di applicazioni web Drupal in PHP e di app mobile in React Native.',
        'Correzione di bug e piccole funzionalità, in collaborazione tramite Git.',
      ],
    },
    tech: ['React Native', 'Drupal', 'PHP', 'JavaScript', 'SQL', 'Git'],
  },
];
