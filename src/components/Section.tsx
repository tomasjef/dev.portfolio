import type { ReactNode } from "react";

// Below xl: label stacked above a content column capped at 680px.
// xl: label in columns 1–2, content in columns 3–8, sharing a baseline. The label
// stays pinned while its section scrolls; the section's end releases it.
export function Section({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="xl:col-span-9 xl:grid xl:grid-cols-subgrid xl:items-baseline">
      <h2 className="mb-4 xl:sticky xl:top-12 xl:col-span-2 xl:mb-0">{label}</h2>
      <div className="flex max-w-[680px] flex-col gap-y-12 xl:col-span-6">
        {children}
      </div>
    </section>
  );
}
