// UI copy for English. The Italian file must satisfy the same shape (see `Dictionary`).
const en = {
  meta: {
    title: 'Dragos Vasiliu — Full Stack Developer',
    description:
      'Full Stack Developer working with Laravel, React, Docker and Linux. I build, deploy and maintain production web applications.',
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
    lead: 'I build and run production web applications, from the React interface down to the Linux server it runs on.',
    viewWork: 'View work',
    downloadCv: 'Download CV',
    facts: {
      basedIn: 'Based in',
      currently: 'Currently',
      experience: 'Experience',
      experienceValue: '3+ years in production',
    },
  },
  about: {
    heading: 'About',
    body: [
      'Most of my work happens on Laravel applications that are already live: new features, integrations with external systems, releases and the debugging that comes after. I work with clients directly, so requirements, implementation and support usually stay with the same person.',
      'Alongside that I build prototypes with LLMs, AI agents, MCP, RAG and GraphRAG, mostly for document retrieval and for automating parts of my own development workflow.',
    ],
    languages: 'Languages',
    education: 'Education',
  },
  work: {
    heading: 'Selected work',
    professional: 'Professional',
    professionalNote: 'Client and company projects. The code is private, so these describe scope and my role.',
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
    intro: 'Grouped by where it sits in an application, from what the user sees to the server underneath.',
    crossCutting: 'Used across every layer.',
  },
  contact: {
    heading: 'Contact',
    body: 'For work enquiries or to talk about a project, email is the best way to reach me.',
    email: 'Email',
  },
  footer: {
    builtWith: 'Built with Astro and deployed on GitHub Pages.',
    source: 'Source code',
  },
};

export type Dictionary = typeof en;
export default en;
