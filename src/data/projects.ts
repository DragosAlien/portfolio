import type { Localized } from '~/i18n';
import { repository } from './profile';

export interface Project {
  slug: string;
  name: Localized;
  /** professional = private client/company work; open-source = public repository. */
  category: 'professional' | 'open-source';
  year: string;
  status: Localized;
  description: Localized;
  tech: string[];
  repository?: string | null;
  demo?: string | null;
  /** Placeholders are kept in data for planning but never rendered. */
  placeholder?: boolean;
}

const all: Project[] = [
  {
    slug: 'klancy',
    name: { en: 'Klancy', it: 'Klancy' },
    category: 'professional',
    year: '2023–',
    status: { en: 'In production', it: 'In produzione' },
    description: {
      en: 'Subscription SaaS for restaurant kitchens: a live order dashboard, kitchen exit groups, network printer control and orders imported from the Tilby POS. Each tenant gets its own database, provisioned automatically. Dragos wrote most of the current Laravel and React version and keeps it running.',
      it: 'SaaS in abbonamento per le cucine dei ristoranti: dashboard degli ordini in tempo reale, gruppi di uscita, controllo delle stampanti di rete e ordini importati dalla cassa Tilby. Ogni tenant ha il suo database, creato in automatico. Dragos ha scritto la maggior parte della versione attuale in Laravel e React e ne segue la gestione.',
    },
    tech: ['Laravel', 'React', 'Inertia.js', 'Redis', 'WebSockets', 'PWA'],
  },
  {
    slug: 'integrations',
    name: { en: 'Third-party integrations', it: 'Integrazioni con sistemi esterni' },
    category: 'professional',
    year: '2023–',
    status: { en: 'In production', it: 'In produzione' },
    description: {
      en: 'Connectors between client applications and external systems: Fluida and Tilby APIs, AHRW SOAP services, and XML files generated for import into G1.',
      it: 'Connettori tra le applicazioni dei clienti e sistemi esterni: API Fluida e Tilby, servizi SOAP AHRW e file XML generati per l’import in G1.',
    },
    tech: ['PHP', 'SOAP', 'XML'],
  },
  {
    slug: 'purchase-orders',
    name: { en: 'Purchase orders for a public body', it: 'Ordini d’acquisto per un ente pubblico' },
    category: 'professional',
    year: '2025–',
    status: { en: 'In production', it: 'In produzione' },
    description: {
      en: 'Purchase requests from draft to signed order: attachments, approvals across offices with six roles, PDF printing and contract drafts. Supplier invoices arrive through SOAP services and are matched to their order by tender code.',
      it: 'Richieste d’acquisto dalla bozza all’ordine firmato: allegati, approvazioni tra uffici con sei ruoli, stampa PDF e bozze di contratto. Le fatture dei fornitori arrivano da servizi SOAP e vengono abbinate all’ordine tramite il CIG.',
    },
    tech: ['Laravel', 'React', 'Inertia.js', 'TypeScript', 'MySQL', 'SOAP', 'Pest'],
  },
  {
    slug: 'ops-panel',
    name: { en: 'Server operations panel', it: 'Pannello operativo per i server' },
    category: 'professional',
    year: '2026–',
    status: { en: 'Built in-house', it: 'Sviluppo interno' },
    description: {
      en: 'Control room for the company’s VPS fleet: inventory, backups, monitoring and alerts. SSH operations are built by the backend and run in queues, never typed by hand. Database dumps stream over SSH with checksums and are re-verified every week, and locks keep scheduled jobs from running twice.',
      it: 'Sala di controllo per i VPS dell’azienda: inventario, backup, monitoraggio e avvisi. Le operazioni SSH le costruisce il backend e girano in coda, mai scritte a mano. I dump dei database passano via SSH con checksum e vengono ricontrollati ogni settimana; i lock impediscono che un job pianificato parta due volte.',
    },
    tech: ['Laravel', 'React', 'Inertia.js', 'PostgreSQL', 'Redis', 'Docker', 'Restic'],
  },
  {
    slug: 'deploy-panel',
    name: { en: 'Deployment panel for legacy Java apps', it: 'Pannello di deploy per applicazioni Java legacy' },
    category: 'professional',
    year: '2026–',
    status: { en: 'Built in-house', it: 'Sviluppo interno' },
    description: {
      en: 'Installs and maintains a vendor’s Tomcat-based HR applications on client servers, over SSH and VPN. Only allowlisted scripts run, as tracked jobs with live logs. Credentials are encrypted, backups and restores go through a queue, and installs can be dry-run first.',
      it: 'Installa e mantiene le applicazioni HR su Tomcat di un fornitore sui server dei clienti, via SSH e VPN. Girano solo script ammessi, come job tracciati con log in diretta. Le credenziali sono cifrate, backup e ripristini passano da una coda e le installazioni si possono provare prima a vuoto.',
    },
    tech: ['React', 'Node.js', 'Fastify', 'BullMQ', 'Redis', 'PostgreSQL', 'Docker'],
  },
  {
    slug: 'docs-assistant',
    name: { en: 'Documentation assistant', it: 'Assistente sulla documentazione' },
    category: 'professional',
    year: '2026–',
    status: { en: 'Built in-house', it: 'Sviluppo interno' },
    description: {
      en: 'Local assistant that answers questions on an ERP product’s documentation and cites its sources. A reproducible ingestion pipeline re-indexes only what changed; the API is OpenAI-compatible and runs on Metal, CUDA or CPU. Graph-based retrieval comes next.',
      it: 'Assistente locale che risponde a domande sulla documentazione di un gestionale e cita le fonti. Una pipeline di ingestione riproducibile reindicizza solo ciò che è cambiato; l’API è compatibile con OpenAI e gira su Metal, CUDA o CPU. Il prossimo passo è il retrieval a grafo.',
    },
    tech: ['Python', 'RAG', 'Qdrant', 'llama.cpp', 'Docker'],
  },
  {
    slug: 'portfolio',
    name: { en: 'This website', it: 'Questo sito' },
    category: 'open-source',
    year: '2026',
    status: { en: 'Live', it: 'Online' },
    description: {
      en: 'Static, bilingual portfolio. Both languages are generated from one set of components and typed content, with no client-side framework.',
      it: 'Portfolio statico e bilingue. Entrambe le lingue sono generate dagli stessi componenti e da contenuti tipizzati, senza framework lato client.',
    },
    tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
    repository,
  },
  {
    slug: 'placeholder-oss',
    name: { en: 'PLACEHOLDER', it: 'PLACEHOLDER' },
    category: 'open-source',
    year: '',
    status: { en: '', it: '' },
    description: { en: '', it: '' },
    tech: [],
    placeholder: true,
  },
];

export const projects = all.filter((p) => !p.placeholder);
