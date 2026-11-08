"use client";

import { useEffect, useRef } from "react";

// Silent looping screen recording. Plays only while on screen, and never for
// visitors who prefer reduced motion: they see the poster frame instead.
// With hoverPlay, a device with a mouse sees the still poster until the pointer
// (or keyboard focus) is on the card, plays while it is there, and goes back to
// the poster when it leaves; nothing is downloaded until then. Touch devices
// have no hover, so they play it while it is on screen, as without hoverPlay.
export function LoopVideo({
  src,
  poster,
  width = 680,
  height = 376,
  className = "",
  hoverPlay = false,
}: {
  src: string;
  poster: string;
  width?: number;
  height?: number;
  className?: string;
  hoverPlay?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const card = video.closest("a");
    if (hoverPlay && card && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const start = () => {
        if (!reduceMotion.matches) video.play().catch(() => {});
      };
      const stop = () => {
        video.pause();
        video.currentTime = 0;
      };
      card.addEventListener("pointerenter", start);
      card.addEventListener("pointerleave", stop);
      card.addEventListener("focusin", start);
      card.addEventListener("focusout", stop);
      return () => {
        card.removeEventListener("pointerenter", start);
        card.removeEventListener("pointerleave", stop);
        card.removeEventListener("focusin", start);
        card.removeEventListener("focusout", stop);
      };
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduceMotion.matches) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, [hoverPlay]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload={hoverPlay ? "none" : "metadata"}
      className={className}
    />
  );
}
