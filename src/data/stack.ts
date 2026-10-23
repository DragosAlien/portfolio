import type { Localized } from '~/i18n';

export interface Layer {
  name: Localized;
  note: Localized;
  tech: string[];
}

/** Ordered top to bottom: what the user sees first, the server last. */
export const layers: Layer[] = [
  {
    name: { en: 'Interface', it: 'Interfaccia' },
    note: { en: 'Web and desktop UIs, data-heavy tables, responsive layouts.', it: 'Interfacce web e desktop, tabelle con molti dati, layout responsive.' },
    tech: ['React', 'Inertia.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'TanStack Table', 'Electron'],
  },
  {
    name: { en: 'Application', it: 'Applicazione' },
    note: { en: 'Business logic, background work, dependency management.', it: 'Logica applicativa, processi in background, gestione delle dipendenze.' },
    tech: ['PHP', 'Laravel', 'Node.js', 'Composer', 'npm'],
  },
  {
    name: { en: 'Data', it: 'Dati' },
    note: { en: 'Relational schemas, queries, caching and queues.', it: 'Schemi relazionali, query, cache e code.' },
    tech: ['SQL', 'Redis'],
  },
  {
    name: { en: 'Integrations', it: 'Integrazioni' },
    note: { en: 'Talking to third-party systems.', it: 'Comunicazione con sistemi di terze parti.' },
    tech: ['REST', 'SOAP', 'WebSockets', 'XML'],
  },
  {
    name: { en: 'Systems', it: 'Sistemi' },
    note: { en: 'Deployment, server maintenance, migrations and backups.', it: 'Rilasci, manutenzione dei server, migrazioni e backup.' },
    tech: ['Linux', 'Docker', 'Plesk', 'SSH', 'cron', 'Restic', 'Git'],
  },
];

/** Not a layer: tooling applied across all of the above. */
export const tooling: Layer = {
  name: { en: 'AI & tooling', it: 'AI e tooling' },
  note: { en: 'Prototypes for document retrieval and development automation.', it: 'Prototipi per la ricerca nei documenti e l’automazione dello sviluppo.' },
  tech: ['LLMs', 'AI agents', 'MCP', 'RAG', 'GraphRAG', 'Coding agents'],
};
