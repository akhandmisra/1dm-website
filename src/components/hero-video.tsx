"use client";

import { useEffect, useRef } from "react";

// Autoplays the hero background video, but respects prefers-reduced-motion by
// leaving it paused on its poster frame for anyone who's asked for less motion.
export function HeroVideo({
  poster,
  sources,
  className,
}: {
  poster: string;
  sources: { src: string; type: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Autoplay can be blocked in rare cases — the poster frame still shows.
      });
    }
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      {sources.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
    </video>
  );
}
