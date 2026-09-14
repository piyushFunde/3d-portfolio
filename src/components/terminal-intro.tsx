"use client";

import { ArrowRight, BriefcaseBusiness, Cpu, FolderGit2 } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const terminalLines = [
  "$ whoami",
  "> piyush funde, full-stack developer",
  "$ npm run intro",
  "> building interactive web experiences",
];

const commandLinks = [
  {
    label: "cd projects",
    href: "#projects",
    icon: FolderGit2,
  },
  {
    label: "cd experience",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    label: "cd tech-stack",
    href: "#skills",
    icon: Cpu,
  },
];

export function TerminalIntro() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReducedMotion = mediaQuery.matches;

    if (prefersReducedMotion) {
      setVisibleLines(terminalLines);
      setCurrentLine("");
      setIsTypingDone(true);
      return;
    }

    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: number | undefined;

    const typeNextCharacter = () => {
      if (cancelled) return;

      if (lineIndex >= terminalLines.length) {
        setIsTypingDone(true);
        return;
      }

      const currentText = terminalLines[lineIndex];

      if (charIndex < currentText.length) {
        const nextLine = currentText.slice(0, charIndex + 1);
        setCurrentLine(nextLine);
        charIndex += 1;
        timeoutId = window.setTimeout(typeNextCharacter, 28);
        return;
      }

      setVisibleLines((previous) => [...previous, currentText]);
      setCurrentLine("");
      charIndex = 0;
      lineIndex += 1;

      if (lineIndex < terminalLines.length) {
        timeoutId = window.setTimeout(typeNextCharacter, 450);
      } else {
        setIsTypingDone(true);
      }
    };

    typeNextCharacter();

    return () => {
      cancelled = true;
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const linesToRender = visibleLines.concat(currentLine ? [currentLine] : []);

  return (
    <div className="w-full max-w-xl">
      <div className="rounded-2xl border border-zinc-800 bg-[#0b1220]/90 p-4 shadow-[0_0_32px_rgba(16,185,129,0.12)] backdrop-blur-sm sm:p-5">
        <div className="mb-4 flex items-center gap-2 text-zinc-500">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-[10px] uppercase tracking-[0.28em] text-zinc-400">
            portfolio-shell
          </span>
        </div>

        <div className="space-y-2 font-mono text-sm text-zinc-100 sm:text-base">
          {linesToRender.map((line, index) => (
            <div key={`${line}-${index}`} className="min-h-[1.5rem] whitespace-pre-wrap break-words">
              <span className="text-emerald-400">{line}</span>
            </div>
          ))}

          {!isTypingDone && (
            <div className="flex min-h-[1.5rem] items-center">
              <span className="inline-block h-5 w-2 animate-pulse bg-emerald-400 align-middle" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>

      {isTypingDone && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {commandLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              onClick={(event) => {
                event.preventDefault();
                const target = document.querySelector(href);
                if (!target) return;

                target.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.replaceState(null, "", href);
              }}
              className={cn(
                "group inline-flex items-center justify-between gap-2 rounded-xl border border-emerald-500/30 bg-zinc-950/70 px-3 py-2 text-sm font-medium text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.1)] transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                "min-w-[145px]"
              )}
            >
              <span className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{label}</span>
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
