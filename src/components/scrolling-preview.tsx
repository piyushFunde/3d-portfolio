"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Pan speed (CSS px/sec). Duration is derived from this so every card scrolls
// at the same visual speed — longer pages just take proportionally longer.
const PAN_SPEED = 70;
const PAUSE = 1.2; // seconds held at top and bottom

// A page only pans if it overflows the frame by at least this fraction of the
// frame height. Anything shorter (landscape/square screenshots) is shown
// "cover" instead, so any image looks right with no per-image config.
const MIN_SCROLL_OVERFLOW = 0.2;

// Neutral wallpaper when a card has no `bg` (or it fails to load), so adding a
// project with just a screenshot still looks intentional.
const FALLBACK_BG = "linear-gradient(135deg, #1e293b, #0f172a)";

/**
 * Card preview: a screenshot floating over a wallpaper. Tall landing pages pan
 * top → bottom → back like a scroll-through recording; normal (landscape/square)
 * screenshots are shown "cover", centered. Detection is automatic from the
 * image's natural ratio — drop in any image and it just works.
 *
 * `bg` (the wallpaper) is optional; omit it for a neutral gradient.
 *
 * Layout/backgrounds are inline-styled because this project's Tailwind config
 * can't emit opacity-modified theme colors or arbitrary `bg-[length:…]` — those
 * utilities silently no-op.
 */
const ScrollingPreview = ({
  src,
  alt,
  bg,
  accentColor = "#38bdf8",
}: {
  src: string;
  alt: string;
  bg?: string;
  accentColor?: string;
}) => {
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scrollPx, setScrollPx] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const img = new window.Image();
    const compute = () => {
      const vp = viewportRef.current;
      if (cancelled || !vp || !img.naturalWidth) return;
      const ratio = img.naturalHeight / img.naturalWidth;
      const displayedHeight = vp.clientWidth * ratio; // height at bg-size "100% auto"
      const overflow = displayedHeight - vp.clientHeight;
      // Only pages meaningfully taller than the frame pan; the rest go "cover".
      setScrollPx(overflow > vp.clientHeight * MIN_SCROLL_OVERFLOW ? overflow : 0);
    };
    img.onload = compute;
    img.src = src;
    if (img.complete) compute();
    window.addEventListener("resize", compute);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", compute);
    };
  }, [src]);

  const scrolls = scrollPx > 0;
  const animate = !reduceMotion && scrolls;

  const pan = scrollPx / PAN_SPEED;
  const total = pan * 2 + PAUSE * 2;
  const times = [
    0,
    pan / total,
    (pan + PAUSE) / total,
    (pan * 2 + PAUSE) / total,
    1,
  ];

  return (
    <div
      className="pointer-events-none absolute inset-0"
      role="img"
      aria-label={alt}
    >
      {/* Heavily blurred ambient image wallpaper layer */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-12%",
          backgroundImage: `url("${bg || src}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(32px) brightness(0.55) saturate(1.3)",
          transform: "scale(1.2)",
        }}
      />

      {/* Dark gradient & accent glow overlay over the blurred backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 50% 35%, ${accentColor}33 0%, rgba(8,12,22,0.65) 65%, #05070e 100%),
            linear-gradient(180deg, rgba(5,7,14,0.2) 0%, rgba(5,7,14,0.75) 100%)
          `,
        }}
      />

      {/* Subtle tech grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${accentColor}25 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          opacity: 0.35,
        }}
      />

      {/* Ambient glowing spotlight behind screenshot */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-10%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}44 0%, transparent 65%)`,
          filter: "blur(40px)",
          opacity: 0.5,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* floating screenshot panel */}
      <div
        ref={viewportRef}
        className="sp-shot"
        style={{
          position: "absolute",
          left: "5%",
          right: "5%",
          top: "5%",
          bottom: "5%",
          overflow: "hidden",
          borderRadius: 10,
          backgroundColor: "#050811",
          boxShadow: `
            0 20px 40px -15px rgba(0,0,0,0.8),
            0 0 20px ${accentColor}25
          `,
          border: `1px solid ${accentColor}44`,
          zIndex: 2,
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("${src}")`,
            // Tall pages fill width and pan; normal/landscape images use contain so text on the edges is never cropped.
            backgroundSize: scrolls ? "100% auto" : "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: scrolls ? "50% 0%" : "center",
          }}
          animate={
            animate
              ? {
                backgroundPosition: [
                  "50% 0%",
                  "50% 100%",
                  "50% 100%",
                  "50% 0%",
                  "50% 0%",
                ],
              }
              : undefined
          }
          transition={
            animate
              ? { duration: total, ease: "easeInOut", repeat: Infinity, times }
              : undefined
          }
        />
      </div>
    </div>
  );
};

export default ScrollingPreview;
