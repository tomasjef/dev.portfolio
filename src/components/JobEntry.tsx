import { Fragment } from "react";
import type { Job } from "@/content";
import { TextLink } from "./TextLink";

// "A, B and C" with each name linked
function ClientList({ clients }: { clients: NonNullable<Job["clients"]> }) {
  return clients.map((client, i) => (
    <Fragment key={client.name}>
      {i > 0 && (i === clients.length - 1 ? " and " : ", ")}
      <TextLink href={client.url} tone="muted">
        {client.name}
      </TextLink>
    </Fragment>
  ));
}

export function JobEntry({ job }: { job: Job }) {
  return (
    <article>
      <p className="mb-1 text-muted">{job.dates}</p>
      <h3 className="text-title">
        {job.url ? <TextLink href={job.url}>{job.org}</TextLink> : job.org}
        <span className="block">{job.role}</span>
        <span className="block text-muted">{job.context}</span>
      </h3>
      <p className="text-muted">
        {job.summary}
        {job.clients && (
          <>
            {" "}
            Clients include <ClientList clients={job.clients} />.
          </>
        )}
      </p>
    </article>
  );
}
