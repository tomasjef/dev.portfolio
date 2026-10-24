import Link from "next/link";
import { button, shell } from "@/components/styles";

export default function NotFound() {
  return (
    <>
      <header className={`${shell} py-6`}>
        <Link href="/" className="font-semibold">Tomas Jefanovas</Link>
      </header>
      <main className={`${shell} pt-20 pb-16 md:pt-32`}>
        <h1 className="max-w-[17em] text-[clamp(34px,4.6vw,60px)] leading-[1.06] font-medium tracking-[-0.035em] text-balance">
          This page doesn&rsquo;t exist.
        </h1>
        <Link href="/" className={`${button} mt-7 bg-accent text-white hover:opacity-80`}>
          Back to the homepage
        </Link>
      </main>
    </>
  );
}
