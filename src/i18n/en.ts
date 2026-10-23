// UI copy for English. The Italian file must satisfy the same shape (see `Dictionary`).
const en = {
  meta: {
    title: 'Dragos Vasiliu — Full Stack Developer',
    description:
      'Dragos Vasiliu, Full Stack Developer. Laravel and React applications in production: new features, performance, clean code and automated releases on Docker and Linux.',
    ogLocale: 'en_GB',
  },
  a11y: {
    skipToContent: 'Skip to content',
    mainNav: 'Main',
    languageNav: 'Language',
    opensInNewTab: '(opens in a new tab)',
    darkTheme: 'Dark theme',
  },
  nav: {
    work: 'Work',
    experience: 'Experience',
    stack: 'Stack',
    contact: 'Contact',
  },
  hero: {
    title: 'Full Stack Developer',
    lead: 'Dragos builds and maintains Laravel and React applications that clients use every day. He makes them faster, keeps the codebase clean and automates how they ship.',
    viewWork: 'View work',
    downloadCv: 'Download CV',
    localTime: 'local time',
  },
  about: {
    heading: 'About',
    body: [
      'At PARENTESIKUADRA Dragos works on live Laravel applications with React and Inertia.js frontends, Klancy among them: a multi-tenant platform built on WebSockets. He ships new features, connects them to external systems such as Fluida, Tilby and AHRW, and handles the releases himself.',
      'He also looks after what happens once they are live. When a page is slow, a dependency upgrade breaks the build or a deploy is still done by hand, he tracks down why and fixes it there, not with a workaround. The applications run in Docker on Linux servers that he maintains and migrates.',
      'He talks to clients directly, so requirements, code and support stay with one person. On the side he builds prototypes with LLMs, AI agents, MCP and RAG, mostly to search documents and to automate parts of his own workflow.',
    ],
    languages: 'Languages',
    education: 'Education',
  },
  work: {
    heading: 'Selected work',
    professional: 'Professional',
    professionalNote: 'Client and company work. The code is private, so this covers what each project does and Dragos’s part in it.',
    openSource: 'Open source',
    allRepos: 'All repositories on GitHub',
    repository: 'Source',
    demo: 'Live',
  },
  experience: {
    heading: 'Experience',
    present: 'Present',
  },
  stack: {
    heading: 'Stack',
    intro: 'Ordered by layer: the interface on top, the server at the bottom.',
    crossCutting: 'Used across every layer.',
  },
  contact: {
    heading: 'Contact',
    body: 'Hiring, or have a project in mind? Email is the fastest way to reach Dragos.',
    email: 'Email',
  },
  palette: {
    open: 'Open command menu',
    title: 'Command menu',
    placeholder: 'Jump to a section or run a command…',
    empty: 'No matching commands.',
    goTo: 'Go to',
    actions: 'Actions',
    links: 'Links',
    top: 'Top of the page',
    toggleTheme: 'Switch between light and dark theme',
    switchLanguage: 'Read in Italian',
    copyEmail: 'Copy email address',
    copied: 'Email address copied',
    hint: 'to select, Esc to close',
  },
  alien: {
    label: 'Alien mascot: click it to make it talk.',
    lines: [
      'I’m not part of the stack. I just live here.',
      'Lost? ⌘K or Ctrl+K takes you anywhere.',
      'Dragos wrote me. I’m the only bug he decided to keep.',
      'Psst: ↑ ↑ ↓ ↓ ← → ← → B A',
    ],
    abducted: 'Beam me up! Back in a second.',
  },
  footer: {
    builtWith: 'Built with Astro and deployed on GitHub Pages.',
    source: 'Source code',
  },
};

export type Dictionary = typeof en;
export default en;
