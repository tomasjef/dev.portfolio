"use client";

import { useEffect, useState } from "react";
import { button } from "./styles";

// A "Get in touch" button pinned to the top right, the same as the others. It
// appears once the hero's own button (the element with id `watch`) has scrolled
// up out of view, by which point the header and its mode toggle have gone too;
// on a short screen where the hero button starts below the fold it stays hidden.
// Not on phones, where the contact block is never far away.
export function FloatingContact({ email, watch }: { email: string; watch: string }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const target = document.getElementById(watch);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) =>
      setShown(!entry.isIntersecting && entry.boundingClientRect.top < 0),
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [watch]);

  return (
    <a
      href={`mailto:${email}`}
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      className={`${button} sheen fixed max-md:hidden top-4 right-4 z-30 text-white shadow-[0_6px_20px_rgb(0_0_0/0.15)] duration-300 hover:opacity-80 md:top-5 md:right-6 ${shown ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}
    >
      Get in touch
    </a>
  );
}
