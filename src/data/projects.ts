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
  featured?: boolean;
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
      en: 'Multi-tenant web application with real-time features over WebSockets. I work on its ongoing development, including configuration and customisation for individual clients.',
      it: 'Applicazione web multi-tenant con funzionalità in tempo reale via WebSocket. Ne seguo lo sviluppo continuativo, incluse configurazioni e personalizzazioni per i singoli clienti.',
    },
    // TODO: confirm which parts of the stack are public before listing more.
    tech: ['WebSockets', 'Multi-tenancy'],
    featured: true,
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
    featured: true,
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
