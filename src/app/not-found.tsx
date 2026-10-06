import { TextLink } from "@/components/TextLink";

export default function NotFound() {
  return (
    <div className="px-5 pt-5 pb-8 md:px-[30px] md:pt-8 md:pb-12 xl:grid xl:grid-cols-[repeat(12,minmax(0,calc((1380px-220px)/12)))] xl:gap-x-5 xl:pt-12">
      <main className="xl:col-span-7 xl:col-start-3">
        <h1 className="text-title">
          Tomas Jefanovas
          <span className="block text-muted">Development and design</span>
        </h1>
        <p className="mt-12 text-title text-muted">This page doesn’t exist.</p>
        <p className="mt-4">
          <TextLink href="/">Back to the homepage</TextLink>
        </p>
      </main>
    </div>
  );
}
