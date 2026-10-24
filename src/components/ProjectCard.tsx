import Image from "next/image";
import type { Project } from "@/content";
import { LoopVideo } from "./LoopVideo";
import { external, mount, pill, small, tile } from "./styles";

// "Solo design & build, 2026" → "Solo design & build": the year is in the section label
const creditOf = (meta: string) => meta.replace(/,?\s*\d{4}$/, "");

// The whole card is the link: on hover it lifts, the recording zooms a touch
// inside its frame, the arrow by the title moves out and the title and stack
// turn the accent colour.
export function ProjectCard({ project }: { project: Project }) {
  const mediaClass =
    "block aspect-[1360/752] h-auto w-full rounded-[8px] object-cover object-top shadow-[0_16px_40px_rgb(0_0_0/0.16)] transition duration-500 ease-out group-hover:scale-[1.045] group-hover:shadow-[0_24px_56px_rgb(0_0_0/0.24)]";

  return (
    <a
      href={project.url}
      {...external}
      className={`reveal ${tile} group flex flex-col p-2 transition duration-300 ease-out hover:-translate-y-2 hover:bg-tile-hover hover:shadow-[0_2px_4px_rgb(0_0_0/0.06),0_36px_64px_-22px_rgb(0_0_0/0.42)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
    >
      <div className={`${mount} overflow-hidden p-[6%]`}>
        {project.video ? (
          <LoopVideo src={project.video} poster={project.image} className={mediaClass} />
        ) : (
          <Image src={project.image} alt="" width={680} height={376} className={mediaClass} />
        )}
      </div>

      <div className="flex flex-1 flex-col px-4 pt-5 pb-4 md:px-5">
        <h3 className="text-[20px] leading-[1.3] font-semibold tracking-[-0.01em] transition-colors group-hover:text-accent">
          {project.name}
          <span
            aria-hidden
            className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </h3>
        <p className={small}>{creditOf(project.meta)}</p>
        <p className="mt-3 max-w-[34em] text-muted">{project.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-4" aria-label="Stack">
          {project.stack.map((tech) => (
            <li key={tech} className={`${pill} group-hover:text-accent`}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
