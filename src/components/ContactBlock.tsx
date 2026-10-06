import { contact } from "@/content";
import { TextLink } from "./TextLink";

// Shown once at every size: under the name on phones and tablets, at the top
// of the sidebar on desktop (each place hides it where the other shows it).
export function ContactBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`text-muted ${className}`}>
      <h2 className="text-ink">Contact</h2>
      <p>{contact.location}</p>
      <TextLink className="block" tone="muted" href={`mailto:${contact.email}`}>
        {contact.email}
      </TextLink>
      <TextLink className="block" tone="muted" href={contact.github}>
        GitHub
      </TextLink>
      <TextLink className="block" tone="muted" href={contact.linkedin}>
        LinkedIn
      </TextLink>
      <TextLink className="block" tone="muted" href={contact.designPortfolio}>
        Design portfolio
      </TextLink>
    </div>
  );
}
