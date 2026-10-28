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
    role: 'Full Stack Developer',
    company: 'PARENTESIKUADRA',
    start: '2023-12',
    end: null,
    location: { en: 'Casale Monferrato', it: 'Casale Monferrato' },
    arrangement: { en: 'Hybrid', it: 'Ibrido' },
    points: {
      en: [
        'Develop and maintain Laravel applications in production, with React and Inertia.js frontends; main author of several of them and of the internal template 10 projects have started from.',
        'Sole developer of Klancy, a multi-tenant SaaS used by dozens of clients, with thousands of orders a day. Migrated it from legacy PHP, with a separate repository per client, to a single codebase configured per tenant; WebSockets replaced polling.',
        'Built a deployment panel that cut the installation of an accounting suite from 5–7 hours to under 20 minutes.',
        'Integrate external systems: Fluida and Tilby APIs, AHRW SOAP services, and XML files generated for import into G1.',
        'Containerise applications with Docker, ship production releases, and maintain and migrate 10 VPSs and the VMs on 2 company servers (Linux/Plesk).',
        'Diagnose frontend, backend and API issues, including Composer and npm dependency conflicts.',
        'Work in periodic Agile sprints with colleagues on backend and frontend; helped train a junior developer in 2025–2026.',
        'Work with clients directly on requirements and support.',
      ],
      it: [
        'Sviluppo e manutenzione di applicazioni Laravel in produzione, con frontend in React e Inertia.js; autore principale di diverse di queste e del template interno da cui sono partiti 10 progetti.',
        'Unico sviluppatore di Klancy, SaaS multi-tenant usato da decine di clienti, con migliaia di ordini al giorno. Migrazione da PHP legacy, con un repository per ogni cliente, a un’unica codebase configurabile per cliente; i WebSocket hanno sostituito il polling.',
        'Sviluppo di un pannello di deploy che ha ridotto l’installazione di una suite di contabilità da 5–7 ore a meno di 20 minuti.',
        'Integrazioni con sistemi esterni: API Fluida e Tilby, servizi SOAP AHRW e generazione di file XML per l’import in G1.',
        'Containerizzazione con Docker, rilasci in produzione, manutenzione e migrazione di 10 VPS e delle VM di 2 server aziendali (Linux/Plesk).',
        'Diagnosi di problemi frontend, backend e API, compresi i conflitti tra dipendenze Composer e npm.',
        'Lavoro in Agile a sprint periodici con i colleghi su backend e frontend; contributo alla formazione di uno sviluppatore junior tra il 2025 e il 2026.',
        'Rapporto diretto con i clienti per requisiti e assistenza.',
      ],
    },
    tech: ['PHP', 'Laravel', 'React', 'Inertia.js', 'Node.js', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Linux', 'REST', 'Stripe', 'Pest', 'PHPStan', 'SOAP', 'XML', 'WebSockets', 'Electron'],
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'PARENTESIKUADRA',
    start: '2023-05',
    end: '2023-12',
    location: { en: 'Casale Monferrato', it: 'Casale Monferrato' },
    arrangement: { en: 'On-site · Internship', it: 'In sede · Tirocinio' },
    points: {
      en: [
        'Built a short-term rental management SaaS in Laravel and React: Booking and Airbnb reservations, Telegram notifications for managers and cleaning staff, tourist tax, invoice export to G1, charts and monthly statements for owners.',
        'Digitised the production sheet of a legacy PHP application for a rubber goods manufacturer, replacing the paper one, and linked it to quotes; bug fixes and new features in its step-by-step configurator.',
      ],
      it: [
        'Sviluppo di un SaaS per la gestione di affitti brevi in Laravel e React: prenotazioni Booking e Airbnb, notifiche Telegram per gestori e personale delle pulizie, tassa di soggiorno, export delle fatture verso G1, grafici e rendiconti mensili per i proprietari.',
        'Digitalizzazione della scheda di produzione in un’applicazione PHP legacy per un produttore di articoli in gomma, al posto di quella cartacea, collegata ai preventivi; correzione di bug e nuove funzionalità nel configuratore a step.',
      ],
    },
    tech: ['Laravel', 'React', 'PHP', 'JavaScript', 'Telegram', 'Git'],
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
        'Drupal back office for a rescue helicopter app that uses AI on images from nearby webcams to judge whether a mission can fly: PHP modules for feedback and email, CSS and JavaScript work on the operators’ interactive map.',
        'eSports tournament app in React Native with a Drupal backend: tournament list and detail screens, credit purchases and a Stripe payment module.',
      ],
      it: [
        'Backoffice Drupal di un’app per il soccorso in elicottero che analizza con l’AI le immagini delle webcam vicine per capire se si può intervenire: moduli PHP per feedback e invio email, CSS e funzionalità JavaScript della mappa interattiva per gli operatori.',
        'App per tornei eSports in React Native con backend Drupal: schermate dei tornei (lista e dettaglio), acquisto di crediti e modulo di pagamento Stripe.',
      ],
    },
    tech: ['React Native', 'Drupal', 'PHP', 'JavaScript', 'CSS', 'Stripe', 'Git'],
  },
];
