import type { Dictionary } from './en';

const it: Dictionary = {
  meta: {
    title: 'Dragos Vasiliu — Software Developer',
    description:
      'Dragos Vasiliu, Software Developer. Applicazioni web in produzione, integrazioni con sistemi esterni, server Linux, rilasci automatizzati e strumenti AI.',
    ogLocale: 'it_IT',
  },
  a11y: {
    skipToContent: 'Vai al contenuto',
    mainNav: 'Principale',
    languageNav: 'Lingua',
    opensInNewTab: '(si apre in una nuova scheda)',
    darkTheme: 'Tema scuro',
  },
  nav: {
    work: 'Progetti',
    experience: 'Esperienza',
    stack: 'Stack',
    contact: 'Contatti',
    sections: 'Sezioni',
  },
  hero: {
    title: 'Software Developer',
    lead: 'Lavoro su tutto lo stack, dove serve: le applicazioni web che i clienti usano ogni giorno, le integrazioni con sistemi esterni, i server Linux su cui girano e le pipeline che le rilasciano. In parallelo, strumenti AI.',
    viewWork: 'Vedi i progetti',
    downloadCv: 'Scarica CV',
    localTime: 'ora locale',
  },
  about: {
    heading: 'Chi sono',
    body: [
      'In PARENTESIKUADRA scrivo e mantengo gestionali in Laravel con frontend React e Inertia.js, e di diversi sono l’autore principale: tra questi Klancy, una piattaforma multi-tenant basata su WebSocket. Li collego a pagamenti, webhook, API e servizi SOAP esterni e curo i rilasci in prima persona.',
      'Mi occupo anche di quello che succede dopo. Se una pagina è lenta, un aggiornamento delle dipendenze rompe la build o un deploy si fa ancora a mano, cerco il perché e lo sistemo lì, senza toppe. Le applicazioni girano in Docker su server Linux, che mantengo e migro. Scrivo test con PHPUnit, Pest e Vitest, e lavoro anche su codice PHP legacy.',
      'Parlo direttamente con i clienti, quindi requisiti, codice e assistenza restano nelle stesse mani. In parallelo realizzo prototipi con LLM, agenti AI, MCP e RAG, soprattutto per la ricerca nei documenti e per automatizzare parte del mio lavoro.',
    ],
    languages: 'Lingue',
    education: 'Formazione',
  },
  work: {
    heading: 'Progetti',
    professional: 'Lavoro',
    professionalNote: 'Una selezione dei progetti per clienti e aziende che sviluppo e gestisco. Il codice è privato: qui trovi cosa fa ognuno.',
    openSource: 'Open source',
    allRepos: 'Tutti i repository su GitHub',
    repository: 'Codice',
    demo: 'Online',
    activity: {
      heading: 'Attività',
      commits: 'commit',
      repos: 'repository',
      since: 'primo commit',
      lastYear: (n: string) => `${n} commit negli ultimi 12 mesi, un quadrato per giorno. La maggior parte dei repository è privata.`,
      updated: 'Aggiornato il',
    },
  },
  experience: {
    heading: 'Esperienza',
    present: 'Oggi',
  },
  stack: {
    heading: 'Stack',
    intro: 'In ordine di livello: in alto l’interfaccia, in fondo il server.',
    crossCutting: 'Trasversale a tutti i livelli.',
  },
  contact: {
    heading: 'Contatti',
    body: 'Il modo più veloce per contattarmi è l’email.',
    email: 'Email',
  },
  palette: {
    open: 'Apri il menu dei comandi',
    title: 'Menu dei comandi',
    placeholder: 'Vai a una sezione o esegui un comando…',
    empty: 'Nessun comando trovato.',
    goTo: 'Vai a',
    actions: 'Azioni',
    links: 'Link',
    top: 'Inizio pagina',
    toggleTheme: 'Passa dal tema chiaro a quello scuro',
    switchLanguage: 'Leggi in inglese',
    copyEmail: 'Copia l’indirizzo email',
    copied: 'Indirizzo email copiato',
    hint: 'per selezionare, Esc per chiudere',
  },
  alien: {
    label: 'Mascotte aliena: cliccala per farla parlare.',
    lines: [
      'Non faccio parte dello stack. Abito qui e basta.',
      'Ti sei perso? ⌘K o Ctrl+K ti porta ovunque.',
      'Mi ha scritto Dragos. Sono l’unico bug che ha deciso di tenere.',
      'Psst: ↑ ↑ ↓ ↓ ← → ← → B A',
    ],
    abducted: 'Teletrasporto! Torno subito.',
  },
  notFound: {
    title: 'Pagina non trovata — Dragos Vasiliu',
    heading: 'Questa pagina non esiste.',
    body: 'Il link potrebbe essere vecchio o scritto male.',
    home: 'Torna alla home',
  },
  footer: {
    builtWith: 'Realizzato con Astro e pubblicato su GitHub Pages.',
    source: 'Codice sorgente',
  },
};

export default it;
