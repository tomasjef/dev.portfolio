import Image from "next/image";
import type { Project } from "@/content";
import { LoopVideo } from "./LoopVideo";
import { TextLink } from "./TextLink";

// One column, the width of the image: title, description, stack, image or video, code link.
export function ProjectCard({ project }: { project: Project }) {
  // A light stroke and a soft shadow keep pale screenshots (Plant Match) off the page colour
  const mediaClass =
    "h-auto w-full rounded-md outline-1 -outline-offset-1 outline-black/15 shadow-[0_1px_3px_rgb(0_0_0/0.08)]";

  return (
    <article>
      <h3 className="text-title">
        <TextLink href={project.url}>
          {project.name}
        </TextLink>
        <span className="block text-muted">{project.meta}</span>
      </h3>
      <div className="text-muted">
        <p>{project.summary}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full bg-black/5 px-2.5 py-1 text-tag text-ink">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      {/* Duplicate of the title link for pointer users only */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden
        className="mt-4 block rounded-md"
      >
        {project.video ? (
          <LoopVideo src={project.video} poster={project.image} className={mediaClass} />
        ) : (
          <Image src={project.image} alt="" width={680} height={376} className={mediaClass} />
        )}
      </a>
      {project.code && (
        <p className="mt-3">
          <TextLink href={project.code}>
            Code on GitHub
          </TextLink>
        </p>
      )}
    </article>
  );
}
