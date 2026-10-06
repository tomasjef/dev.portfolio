import { contact, education, skills } from "@/content";
import { hasCv } from "@/lib/cv";
import { ContactBlock } from "./ContactBlock";
import { TextLink } from "./TextLink";

// xl: single column beside the main content. The box hugs its longest line and
// sits against the right page margin; the text inside stays left-aligned.
// Phones: one running column at the end of the page; tablets: three columns.
// Below xl, Contact moves up under the name instead (ContactBlock).
export function Sidebar({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`grid max-w-[680px] grid-cols-1 gap-x-5 gap-y-[1lh] text-muted md:grid-cols-3 xl:flex xl:w-fit xl:flex-col xl:justify-self-end ${className}`}
    >
      <ContactBlock className="hidden xl:block" />

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

      <div className="md:col-span-2">
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
