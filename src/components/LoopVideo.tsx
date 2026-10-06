"use client";

import { useEffect, useRef } from "react";

// Silent looping screen recording. Plays only while on screen, and never for
// visitors who prefer reduced motion: they see the poster frame instead.
export function LoopVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduceMotion.matches) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={680}
      height={376}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}
