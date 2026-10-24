import Link from "next/link";
import { button, headline, shell } from "@/components/styles";

export default function NotFound() {
  return (
    <>
      <header className={`${shell} py-6`}>
        <Link href="/" className="font-semibold">Tomas Jefanovas</Link>
      </header>
      <main className={`${shell} pt-20 pb-16 md:pt-32`}>
        <h1 className={headline}>
          This page doesn&rsquo;t exist.
        </h1>
        <Link href="/" className={`${button} mt-7 bg-accent text-white hover:opacity-80`}>
          Back to the homepage
        </Link>
      </main>
    </>
  );
}
