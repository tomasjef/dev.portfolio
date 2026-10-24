export const siteUrl = "https://dev.tomasjef.com";

export const profile =
  "Full-stack engineer with a design background, trained at Le\u00a0Wagon in 2026, using code and AI as tools to turn ideas into working projects. Brings over a decade of experience in design and art direction for national museums and galleries, with close attention to detail and a systematic way of working. Experienced in leading projects end to end, working closely with clients and multidisciplinary teams.";

export type Project = {
  name: string;
  url: string;
  code?: string;
  // Muted second line under the title: who built it, and when
  meta: string;
  summary: string;
  stack: string[];
  // Still image; also the poster frame when there is a video
  image: string;
  // Silent screen recording, 1360×752, played on loop
  video?: string;
};

export const projects: Project[] = [
  {
    name: "Margate Electronics",
    url: "https://margate-electronics.org/",
    code: "https://github.com/tomasjef/margate-electronics-site",
    meta: "Solo design & build, 2026",
    summary:
      "Archival catalogue website for an electronic music label, with API-synced inventory, automated audio previews and a custom Avo CMS, deployed via CI/CD.",
    stack: [
      "Ruby on Rails",
      "Hotwire",
      "TypeScript",
      "SQLite",
      "Bandcamp API",
      "GitHub Actions",
      "Cloudflare R2",
      "Claude Code",
    ],
    image: "/projects/margate-electronics.webp",
    video: "/projects/margate-electronics.mp4",
  },
  {
    name: "Halo",
    url: "https://ai-fintech-chatbot-bc425b8ff60c.herokuapp.com/",
    code: "https://github.com/tomasjef/ai-chatbot-RAG",
    meta: "Solo design & build, 2026",
    summary:
      "AI support chatbot for a fictional digital bank, using RAG to ground answers in uploaded PDFs, with clickable source links.",
    stack: [
      "Ruby on Rails",
      "Hotwire",
      "PostgreSQL (pgvector)",
      "OpenAI API",
      "RAG",
      "Vector embeddings",
      "Prompt design",
      "Heroku",
    ],
    image: "/projects/halo.webp",
    video: "/projects/halo.mp4",
  },
  {
    name: "Plant Match",
    url: "https://plant-match-01fac0858f9a.herokuapp.com/",
    code: "https://github.com/tomasjef/plant-match",
    meta: "Le Wagon, 2026",
    summary:
      "Houseplant matching app using a questionnaire and plant data API, with an AI care chatbot. Built as a team of four in a one-week bootcamp sprint.",
    stack: [
      "Ruby on Rails",
      "PostgreSQL",
      "JavaScript (Stimulus)",
      "SCSS",
      "Perenual API",
      "RubyLLM",
      "Heroku",
    ],
    image: "/projects/plant-match.webp",
    video: "/projects/plant-match.mp4",
  },
  {
    name: "Margate Arts Club",
    // Test deploy until the club's own domain is attached
    url: "https://margate-arts-club.margate-arts-club.workers.dev/",
    meta: "Solo design & build, 2026",
    summary:
      "Website for a music and arts venue in Margate, with events pulled live from the OutSavvy API and pages and opening hours the club edits in Sanity.",
    stack: [
      "Next.js",
      "TypeScript",
      "Sanity",
      "OutSavvy API",
      "Cloudflare Workers",
      "Figma",
      "Claude Code",
    ],
    image: "/projects/margate-arts-club.webp",
    video: "/projects/margate-arts-club.mp4",
  },
];

export type Job = {
  dates: string;
  org: string;
  url?: string;
  role: string;
  context: string;
  summary: string;
  // Rendered after the summary as "Clients include …", each linked
  clients?: { name: string; url: string }[];
};

export const jobs: Job[] = [
  {
    dates: "2023–present",
    org: "Margate Electronics",
    url: "https://margate-electronics.org/",
    role: "Co-founder and creative director",
    context: "Live event series and independent record label",
    summary:
      "Curate and promote a programme of live events, and produce physical and digital releases with artists. Secured Arts Council England funding and plan the programme to a fixed budget. Created the brand, merchandise and website.",
  },
  {
    dates: "2016–present",
    org: "Public Identity",
    url: "https://publicidentity.studio/",
    role: "Designer and art director",
    context: "Independent practice, freelance and commissioned projects",
    summary:
      "Specialising in visual identity, campaign and editorial design across print, digital and environmental graphics for arts and cultural organisations, often managing projects, clients and stakeholders directly, from brief to delivery.",
    clients: [
      { name: "V&A", url: "https://www.vam.ac.uk/" },
      { name: "London Museum", url: "https://www.londonmuseum.org.uk/" },
      { name: "National Portrait Gallery", url: "https://www.npg.org.uk/" },
      { name: "The British Museum", url: "https://www.britishmuseum.org/" },
      { name: "Sadler's Wells", url: "https://www.sadlerswells.com/" },
      { name: "JW3", url: "https://www.jw3.org.uk/" },
    ],
  },
  {
    dates: "2013–2016",
    org: "Tate",
    url: "https://www.tate.org.uk/",
    role: "Graphic and digital designer",
    context:
      "Full-time, in-house design studio until 2014, then freelance while at the RCA",
    summary:
      "Designed campaign identities for major exhibitions across all four Tate galleries and applied them to digital assets, printed collateral and exhibition graphics. Worked closely with marketing, curatorial and interpretation teams, maintaining brand standards throughout a high-volume programme.",
  },
];

// The availability line at the top of the homepage
export const status = "Open to full-stack / design engineer roles";

export const contact = {
  location: "London/Hybrid/Remote",
  email: "contact@tomasjef.com",
  github: "https://github.com/tomasjef",
  linkedin: "https://www.linkedin.com/in/tomasjef/",
  designPortfolio: "https://publicidentity.studio/",
  // The download link only renders once this file exists in public/
  cv: "/TOMAS_JEFANOVAS_FullStackEngineer_CV.pdf",
};

export const skills: { heading: string; items: string[] }[] = [
  {
    heading: "Development",
    items: [
      "Ruby on Rails",
      "Hotwire",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "SQL",
      "HTML",
      "CSS/SCSS",
      "REST APIs",
    ],
  },
  {
    heading: "AI tooling",
    items: [
      "OpenAI API",
      "RAG",
      "Vector embeddings",
      "Claude Code",
      "Prompt design",
    ],
  },
  {
    heading: "Tools and deployment",
    items: ["Git", "CI/CD (GitHub Actions)", "Cloudflare", "Heroku"],
  },
  { heading: "Design tools", items: ["Figma", "Adobe Creative Cloud"] },
];

// One block per qualification, separated by a blank line in the sidebar.
export const education = [
  ["AI Software Development", "Le Wagon", "Mar–May 2026"],
  ["MA Visual Communication", "Royal College of Art", "2014–2016"],
  [
    "BA (Hons)",
    "Digital Media Production",
    "London College of Communication",
    "2006–2009",
  ],
];
