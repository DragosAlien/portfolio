// UI copy for English. The Italian file must satisfy the same shape (see `Dictionary`).
const en = {
  meta: {
    title: 'Dragos Vasiliu — Software Developer',
    description:
      'Dragos Vasiliu, Software Developer. Web applications in production, integrations with external systems, Linux servers, automated releases and AI tooling.',
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
    sections: 'Sections',
  },
  hero: {
    title: 'Software Developer',
    lead: 'Dragos works across the stack, wherever the problem is: the web applications clients use every day, their integrations with external systems, the Linux servers they run on and the pipelines that ship them. On the side, AI tools.',
    viewWork: 'View work',
    downloadCv: 'Download CV',
    localTime: 'local time',
  },
  about: {
    heading: 'About',
    body: [
      'At PARENTESIKUADRA Dragos builds and maintains Laravel business applications with React and Inertia.js frontends, and is the main author of several of them, Klancy among them: a multi-tenant platform built on WebSockets. He connects them to payments, webhooks, third-party APIs and SOAP services, and handles the releases himself.',
      'He also looks after what happens once they are live. When a page is slow, a dependency upgrade breaks the build or a deploy is still done by hand, he tracks down why and fixes it there, not with a workaround. The applications run in Docker on Linux servers that he maintains and migrates. He writes tests with PHPUnit, Pest and Vitest, and he also works on legacy PHP code.',
      'He talks to clients directly, so requirements, code and support stay with one person. On the side he builds prototypes with LLMs, AI agents, MCP and RAG, mostly to search documents and to automate parts of his own workflow.',
    ],
    languages: 'Languages',
    education: 'Education',
  },
  work: {
    heading: 'Selected work',
    professional: 'Professional',
    professionalNote: 'A selection of the client and company projects Dragos builds and runs. The code is private, so this covers what each one does.',
    openSource: 'Open source',
    allRepos: 'All repositories on GitHub',
    repository: 'Source',
    demo: 'Live',
    activity: {
      heading: 'Activity',
      commits: 'commits',
      repos: 'repositories',
      since: 'first commit',
      lastYear: (n: string) => `${n} commits in the last 12 months, one square per day. Most repositories are private.`,
      updated: 'Updated',
    },
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
    body: 'Email is the fastest way to reach Dragos.',
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
  notFound: {
    title: 'Page not found — Dragos Vasiliu',
    heading: 'This page doesn’t exist.',
    body: 'The link may be old or mistyped.',
    home: 'Back to the home page',
  },
  footer: {
    builtWith: 'Built with Astro and deployed on GitHub Pages.',
    source: 'Source code',
  },
};

export type Dictionary = typeof en;
export default en;
