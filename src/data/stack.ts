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
    note: { en: 'Web, desktop and mobile UIs, data-heavy tables, responsive layouts.', it: 'Interfacce web, desktop e mobile, tabelle con molti dati, layout responsive.' },
    tech: ['React', 'Inertia.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'TanStack Table', 'PWA', 'Electron', 'React Native'],
  },
  {
    name: { en: 'Application', it: 'Applicazione' },
    note: { en: 'Business logic, background work, real-time, tests and static analysis.', it: 'Logica applicativa, processi in background, tempo reale, test e analisi statica.' },
    tech: ['PHP', 'Laravel', 'Laravel Reverb', 'Drupal', 'Node.js', 'Fastify', 'BullMQ', 'Python', 'FastAPI', 'Composer', 'npm', 'PHPUnit', 'Pest', 'Vitest', 'PHPStan'],
  },
  {
    name: { en: 'Data', it: 'Dati' },
    note: { en: 'Relational schemas, queries, caching and queues.', it: 'Schemi relazionali, query, cache e code.' },
    tech: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    name: { en: 'Integrations', it: 'Integrazioni' },
    note: { en: 'Talking to third-party systems.', it: 'Comunicazione con sistemi di terze parti.' },
    tech: ['REST', 'Webhooks', 'Stripe', 'SOAP', 'WebSockets', 'XML', 'Telegram'],
  },
  {
    name: { en: 'Systems', it: 'Sistemi' },
    note: { en: 'Deployment, server maintenance, migrations and backups.', it: 'Rilasci, manutenzione dei server, migrazioni e backup.' },
    tech: ['Linux', 'Docker', 'Plesk', 'SSH', 'cron', 'Restic', 'Git', 'GitHub Actions'],
  },
];

/** Not a layer: tooling applied across all of the above. */
export const tooling: Layer = {
  name: { en: 'AI & tooling', it: 'AI e tooling' },
  note: { en: 'Prototypes for document retrieval and development automation.', it: 'Prototipi per la ricerca nei documenti e l’automazione dello sviluppo.' },
  tech: ['LLMs', 'AI agents', 'MCP', 'RAG', 'GraphRAG', 'Claude Code', 'Codex'],
};
