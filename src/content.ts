export const siteUrl = "https://dev.tomasjef.com";

export const profile =
  "Full-stack engineer with a design background, trained at Le\u00a0Wagon in 2026, using code and AI as tools to turn ideas into working projects. I bring over a decade of experience in design and art direction for national museums and galleries, with close attention to detail and a systematic way of working. Experienced in leading projects end to end, working closely with clients and multidisciplinary teams.";

export type Project = {
  name: string;
  url: string;
  // Muted second line under the title: who built it, and when
  meta: string;
  summary: string;
  stack: string[];
  // Still image; also the poster frame when there is a video
  image: string;
  // Silent screen recording, 1360×752, played on loop
  video?: string;
  // On phones: a recording of the site's own phone layout, 720×960 (3:4), and its first frame
  phone?: { video: string; image: string };
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
      "Bandcamp API",
      "GitHub Actions",
      "Cloudflare R2",
      "Claude Code",
    ],
    image: "/projects/margate-electronics.webp",
    video: "/projects/margate-electronics.mp4",
    phone: { video: "/projects/margate-electronics-phone.mp4", image: "/projects/margate-electronics-phone.webp" },
  },
  {
    name: "Halo",
    url: "https://ai-fintech-chatbot-bc425b8ff60c.herokuapp.com/",
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
    phone: { video: "/projects/halo-phone.mp4", image: "/projects/halo-phone.webp" },
  },
  {
    name: "Plant Match",
    url: "https://plant-match-01fac0858f9a.herokuapp.com/",
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
    phone: { video: "/projects/plant-match-phone.mp4", image: "/projects/plant-match-phone.webp" },
  },
  {
    name: "Margate Arts Club",
    // Test deploy until the club's own domain is attached
    url: "https://margate-arts-club.margate-arts-club.workers.dev/",
    meta: "Solo design & build, 2026",
    summary:
      "Website for a music and arts venue in Margate, with events pulled live from the OutSavvy API, pages and opening hours the club edits in Sanity, and weekly and monthly event newsletters sent automatically through Amazon SES.",
    stack: [
      "Next.js",
      "TypeScript",
      "Sanity",
      "OutSavvy API",
      "Amazon SES",
      "Cloudflare Workers",
      "Figma",
      "Claude Code",
    ],
    image: "/projects/margate-arts-club.webp",
    video: "/projects/margate-arts-club.mp4",
    phone: { video: "/projects/margate-arts-club-phone.mp4", image: "/projects/margate-arts-club-phone.webp" },
  },
];

// The availability line at the top of the homepage
export const status = "Open to full-stack engineer / design engineer roles";

export const contact = {
  location: "London/Hybrid/Remote",
  email: "contact@tomasjef.com",
  github: "https://github.com/tomasjef",
  linkedin: "https://www.linkedin.com/in/tomasjef/",
  designPortfolio: "https://publicidentity.studio/",
  // The download link only renders once this file exists in public/
  cv: "/TOMAS_JEFANOVAS_FullStackEngineer_CV.pdf",
};
