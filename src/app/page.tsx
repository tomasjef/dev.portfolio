import { CvTile } from "@/components/CvTile";
import { FloatingContact } from "@/components/FloatingContact";
import { GetInTouch } from "@/components/GetInTouch";
import { ProjectCard } from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { button, display, external, headline, shell, small } from "@/components/styles";
import { contact, profile, projects, status } from "@/content";
import { hasCv } from "@/lib/cv";

// The profile is used a sentence at a time: the hero, then a two-tone statement after the work
const [intro, background, leading] = profile.split(/(?<=\.)\s+/);
const [introLead, introRest] = intro.split(/(?<=background),\s*/);

const year = projects[0].meta.match(/\d{4}/)?.[0];

// No email address is printed anywhere: contact is by button only.
export default function Home() {
  return (
    <>
      <FloatingContact email={contact.email} watch="hero-actions" />

      <header className={`${shell} flex items-center justify-between py-6`}>
        <a href="#" className="font-semibold">Tomas Jefanovas</a>
        <ThemeToggle />
      </header>

      <main>
        <section className={`${shell} relative pt-20 pb-16 md:pt-32 md:pb-24`}>
          {/* Availability sits right above the headline, where it's read first; on
              phones the two parts stack and the · between them is dropped */}
          <p className={`${small} mb-6 flex flex-wrap items-center gap-x-3 gap-y-1`}>
            <span className="inline-flex items-center gap-3 whitespace-nowrap text-ink">
              <span className="ml-1 size-2 rounded-full bg-accent-text ring-4 ring-accent-text/20" />
              {status}
            </span>
            <span aria-hidden className="hidden sm:inline">·</span>
            <span className="whitespace-nowrap">{contact.location}</span>
          </p>
          <h1 className={headline}>
            {introLead}, <span className="text-faint">{introRest}</span>
          </h1>
          <div className="mt-7">
            <GetInTouch email={contact.email} id="hero-actions" large />
          </div>
          {/* Hand-drawn arrow down to the work, desktop only */}
          <svg
            aria-hidden
            viewBox="0 0 120 150"
            className="scribble absolute right-[12%] bottom-0 hidden h-[150px] w-[120px] text-accent-text lg:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 8c30 2 52 18 44 38-6 15-30 12-27-3 3-14 30-12 40 6 10 17 6 52-6 92" />
            <path d="M58 128l13 15 12-18" />
          </svg>
        </section>

        <section id="work" className={`${shell} scroll-mt-6`}>
          <h2 className="mb-6 font-semibold">
            Selected work
            {year && <span className="font-normal text-muted"> · {year}</span>}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className={`${shell} reveal flex py-24 md:justify-center md:py-44 md:text-center`}>
          <p className={`${display} max-w-[26em]`}>
            {background} <span className="text-faint">{leading}</span>
          </p>
        </section>

        {hasCv && <CvTile />}

        <section id="contact" className={`${shell} mt-4 scroll-mt-6 md:mt-5`}>
          <div className="reveal flex flex-col gap-8 rounded-[20px] bg-panel p-6 text-white md:p-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[14px] tracking-[0.01em] text-white/60">Got a project or a role in mind?</p>
              <p className={`${display} mt-2`}>Let&rsquo;s chat.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <GetInTouch email={contact.email} />
              {(
                [
                  ["GitHub", contact.github],
                  ["LinkedIn", contact.linkedin],
                  ["Design portfolio", contact.designPortfolio],
                ] as const
              ).map(([name, href]) => (
                <a key={name} href={href} {...external} className={`${button} bg-white/10 hover:bg-white/25`}>
                  {name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={`${shell} ${small} flex flex-col gap-2 py-8 lg:flex-row lg:justify-between lg:gap-8`}>
        <p className="whitespace-nowrap">© {new Date().getFullYear()} Tomas Jefanovas</p>
        <p>Designed in Figma, built with Next.js and TypeScript, hosted on Cloudflare. Set in Geist.</p>
      </footer>
    </>
  );
}
