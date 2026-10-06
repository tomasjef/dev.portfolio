import { contact, education, skills } from "@/content";
import { hasCv } from "@/lib/cv";
import { TextLink } from "./TextLink";

// xl: single column beside the main content. The box hugs its longest line and
// sits against the right page margin; the text inside stays left-aligned.
// Smaller screens: a compact left-aligned grid at the end of the page.
export function Sidebar({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`grid max-w-[680px] grid-cols-2 gap-x-5 gap-y-[1lh] text-muted md:grid-cols-3 xl:flex xl:w-fit xl:flex-col xl:justify-self-end ${className}`}
    >
      <div>
        <h2 className="text-ink">Contact</h2>
        <p>{contact.location}</p>
        <TextLink className="block" tone="muted" href={`mailto:${contact.email}`}>
          {contact.email}
        </TextLink>
        <TextLink className="block" tone="muted" href={contact.github} arrow="↗">
          GitHub
        </TextLink>
        <TextLink className="block" tone="muted" href={contact.linkedin} arrow="↗">
          LinkedIn
        </TextLink>
        <TextLink className="block" tone="muted" href={contact.designPortfolio} arrow="↗">
          Design portfolio
        </TextLink>
      </div>

      {skills.map(({ heading, items }) => (
        <div key={heading}>
          <h2 className="text-ink">{heading}</h2>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-span-2">
        <h2 className="text-ink">Education</h2>
        {education.map((lines) => (
          <p key={lines.join()} className="mt-[1lh] first-of-type:mt-0">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        ))}
      </div>

      {hasCv && (
        <TextLink className="col-span-full text-ink" href={contact.cv} arrow="↓" download>
          Download CV
        </TextLink>
      )}
    </aside>
  );
}
