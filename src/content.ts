export const siteUrl = "https://dev.tomasjef.com";

export const profile =
  "Full-stack engineer with a design background, trained at Le\u00a0Wagon in 2026, using code and AI as tools to turn ideas into working projects. I bring over a decade of experience in design and art direction for national museums and galleries, along with close attention to detail and a systematic way of working. I’ve led projects end to end, working closely with clients and multidisciplinary teams.";

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
  // On phones: a recording of the site's own phone layout, 1080×1440 (3:4), and its first frame
  phone?: { video: string; image: string };
};

export const projects: Project[] = [
  {
    name: "Margate Arts Club",
    url: "https://margatearts.club/",
    meta: "Solo design & build, 2026",
    summary:
      "A venue website that runs itself. Events are read live from the OutSavvy ticketing API, so the homepage updates as promoters add or sell out shows. Weekly and monthly newsletters are built from the same events and sent automatically through Amazon SES, with new subscribers, including ticket buyers who opt in, added automatically so the club never has to lift a finger. A custom Sanity admin gives the club full control of every page’s content.",
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
    image: "/projects/margate-arts-club.webp?v=20261108",
    video: "/projects/margate-arts-club.mp4?v=20261108",
    phone: { video: "/projects/margate-arts-club-phone.mp4?v=20261108", image: "/projects/margate-arts-club-phone.webp?v=20261108" },
  },
  {
    name: "Margate Electronics",
    url: "https://margate-electronics.org/",
    meta: "Solo design & build, 2026",
    summary:
      "Archival catalogue website for an electronic music label. Stock is synced from the Bandcamp API, releases play automated audio previews, and an archive indexes every event and artist, with a shuffled Play All, Add to Calendar and an Atom feed. Content is managed in a custom Avo admin and published as a static site on Cloudflare Pages through CI/CD.",
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
      "AI support assistant for a fictional UK digital bank. An admin uploads PDFs, which are parsed, chunked and embedded into a pgvector knowledge base. Answers use RAG, stay within what the documents say and link to the source PDF, with follow-up context and request rate limiting.",
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
      "Houseplant matching app. A short questionnaire on space, care habits and preferences returns matches from the Perenual plant API, which signed-in users can save as favourites, and each plant has its own AI care chatbot. Built as a team of four in a one-week bootcamp sprint.",
    stack: [
      "Ruby on Rails",
      "PostgreSQL",
      "JavaScript (Stimulus)",
      "Devise",
      "SCSS",
      "Perenual API",
      "RubyLLM",
      "Heroku",
    ],
    image: "/projects/plant-match.webp",
    video: "/projects/plant-match.mp4",
    phone: { video: "/projects/plant-match-phone.mp4", image: "/projects/plant-match-phone.webp" },
  },
];

// The availability line at the top of the homepage
export const status = "Open to full-stack engineer roles";

export const contact = {
  location: "London/Hybrid/Remote",
  email: "contact@tomasjef.com",
  github: "https://github.com/tomasjef",
  linkedin: "https://www.linkedin.com/in/tomasjef/",
  designPortfolio: "https://publicidentity.studio/",
  // The download link only renders once this file exists in public/
  cv: "/TOMAS_JEFANOVAS_FullStackEngineer_CV.pdf",
};
