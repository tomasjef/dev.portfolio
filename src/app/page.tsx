import { ContactBlock } from "@/components/ContactBlock";
import { JobEntry } from "@/components/JobEntry";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { Sidebar } from "@/components/Sidebar";
import { TextLink } from "@/components/TextLink";
import { contact, jobs, profile, projects } from "@/content";

// Spacing: 12–16 within an item; 48 between every block (items, sections, header, footer).
// xl layout follows the Figma 1440 frame: 12 columns, 30px margins, 20px gutters.
// Wider than 1440 the columns stop growing and stay left-aligned; only the
// sidebar moves, so it keeps to the right margin.
export default function Home() {
  return (
    <div className="@container px-5 pt-5 pb-8 md:px-[30px] md:pt-8 md:pb-12 xl:grid xl:grid-cols-[repeat(12,minmax(0,calc((1380px-220px)/12)))] xl:items-baseline xl:gap-x-5 xl:pt-12">
      <header className="pb-12 xl:col-span-7 xl:col-start-3">
        <h1 className="text-title">
          Tomas Jefanovas
          <span className="block text-muted">Development and design</span>
        </h1>
        {/* Below xl Contact sits here; on desktop it heads the sidebar */}
        <ContactBlock className="mt-6 xl:hidden" />
      </header>

      <main className="flex flex-col gap-y-12 xl:col-span-9 xl:row-start-2 xl:grid xl:grid-cols-subgrid xl:content-start">
        <Section label="Profile">
          <p className="text-title text-muted">{profile}</p>
        </Section>

        <Section label="Recent projects">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Section>

        <Section label="Professional experience">
          {jobs.map((job) => (
            <JobEntry key={job.org} job={job} />
          ))}
          <p>
            Full work history at{" "}
            <TextLink href={contact.linkedin}>linkedin.com/in/tomasjef</TextLink>
          </p>
        </Section>
      </main>

      <Sidebar className="mt-12 xl:relative xl:left-[max(0px,calc(100cqw-1380px))] xl:col-span-3 xl:col-start-10 xl:row-start-2 xl:mt-0" />

      <footer className="mt-12 text-muted xl:col-span-7 xl:col-start-3 xl:row-start-3">
        Designed in Figma, built with Next.js and TypeScript, hosted on Cloudflare. Set in Geist.
      </footer>
    </div>
  );
}
