export const siteUrl = "https://dev.tomasjef.com";

export const profile =
  "Developer and designer, recently graduated from Le Wagon's AI Software Development Bootcamp. Background in graphic design and art direction for national museums and galleries, with a typography-led, systematic approach. Experienced in leading projects end to end, working closely with clients and multidisciplinary teams.";

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
    meta: "Solo design & build, 2026",
    summary:
      "Archival catalogue website for an electronic music label, with API-synced inventory, automated audio previews and a custom Avo CMS, deployed via CI/CD.",
    stack: [
      "Ruby on Rails",
      "Hotwire",
      "TypeScript",
      "SQLite",
      "Solid Queue",
      "ffmpeg",
      "Avo",
      "Bandcamp API",
      "Cloudflare Pages and R2",
      "GitHub Actions",
      "Minitest",
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
      "PostgreSQL (pgvector)",
      "OpenAI API",
      "Hotwire",
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
      "Houseplant matching app using a questionnaire and a plant data API, with an AI care chatbot. Built as a team of four in a one-week bootcamp sprint.",
    stack: [
      "Ruby on Rails",
      "PostgreSQL",
      "Devise",
      "Perenual API",
      "RubyLLM",
    ],
    image: "/projects/plant-match.webp",
    video: "/projects/plant-match.mp4",
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
    context: "Independent record label and event series",
    summary:
      "Created its visual identity and merchandise, and designed and built its website. Curate and coordinate the programme of live events and releases, working with artists and venues. Secured an Arts Council England grant.",
  },
  {
    dates: "2015–present",
    org: "Public Identity",
    url: "https://publicidentity.studio/",
    role: "Designer and art director",
    context: "Independent practice, freelance and commissioned projects",
    summary:
      "Specialise in visual identity, campaign and editorial design across print, digital and environmental graphics for arts and cultural organisations, often managing projects, clients and stakeholders directly, from brief to delivery.",
    clients: [
      { name: "V&A", url: "https://www.vam.ac.uk/" },
      { name: "London Museum", url: "https://www.londonmuseum.org.uk/" },
      { name: "National Portrait Gallery", url: "https://www.npg.org.uk/" },
      { name: "British Museum", url: "https://www.britishmuseum.org/" },
      { name: "Sadler's Wells", url: "https://www.sadlerswells.com/" },
      { name: "JW3", url: "https://www.jw3.org.uk/" },
    ],
  },
  {
    dates: "2013–2015",
    org: "Tate",
    url: "https://www.tate.org.uk/",
    role: "Graphic and digital designer",
    context: "Full-time, in-house design studio",
    summary:
      "Designed campaign identities for major exhibitions across all four Tate galleries and applied them to digital assets, printed collateral and exhibition graphics. Worked closely with marketing, curatorial and interpretation teams, maintaining brand standards throughout a high-volume programme.",
  },
];

export const contact = {
  location: "London/Margate, UK",
  email: "contact@tomasjef.com",
  github: "https://github.com/tomasjef",
  linkedin: "https://www.linkedin.com/in/tomasjef/",
  // The download link only renders once this file exists in public/
  cv: "/tomas-jefanovas-cv.pdf",
};

export const skills: { heading: string; items: string[] }[] = [
  {
    heading: "Development",
    items: [
      "Ruby on Rails",
      "JavaScript, Hotwire",
      "TypeScript",
      "PostgreSQL, SQL",
      "HTML, CSS/SCSS",
      "REST APIs",
    ],
  },
  {
    heading: "AI tooling",
    items: ["OpenAI API", "RAG, vector embeddings", "Prompt design"],
  },
  {
    heading: "Code tools",
    items: ["Git, GitHub", "VS Code, Claude Code", "Heroku, Cloudflare"],
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
