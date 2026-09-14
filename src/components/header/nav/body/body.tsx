import { motion } from "motion/react";
import Link from "next/link";
import styles from "./style.module.scss";
import { blur, translate } from "../../anim";
import { Link as LinkType, NavPreview } from "@/types";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FunnyThemeToggle from "@/components/theme/funny-theme-toggle";

interface BodyProps {
  links: LinkType[];
  setIsActive: (isActive: boolean) => void;
  onLinkHover: (preview: NavPreview) => void;
  onLinkLeave: () => void;
}

export default function Body({
  links,
  setIsActive,
  onLinkHover,
  onLinkLeave,
}: BodyProps) {
  const params = useParams();
  const [currentHref, setCurrentHref] = useState("/");
  // Track which index is hovered so siblings can blur — purely local UI state
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const { pathname, hash } = window.location;
    setCurrentHref(pathname + hash);
  }, [params]);

  const getChars = (word: string) => {
    let chars: React.JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          className="pointer-events-none"
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={cn(styles.body, "flex flex-col items-end md:flex-row")}>
      <FunnyThemeToggle className="w-6 h-6 mr-6 flex md:hidden" />
      {links.map((link, index) => {
        const { title, href, target, preview } = link;
        const isHovered = hoveredIndex !== null;
        const isThisHovered = hoveredIndex === index;

        return (
          <Link
            key={`l_${index}`}
            href={href}
            target={target}
            className="cursor-can-hover rounded-lg"
          >
            <motion.p
              className={cn(
                "font-display rounded-lg",
                currentHref !== href ? "text-muted-foreground" : "underline"
              )}
              onClick={() => setIsActive(false)}
              onMouseOver={() => {
                setHoveredIndex(index);
                // Explicitly set the typed preview — no stale state possible
                if (preview) {
                  onLinkHover(preview);
                }
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                onLinkLeave();
              }}
              onFocus={() => {
                setHoveredIndex(index);
                if (preview) {
                  onLinkHover(preview);
                }
              }}
              onBlur={() => {
                setHoveredIndex(null);
                onLinkLeave();
              }}
              variants={blur}
              animate={isHovered && !isThisHovered ? "open" : "closed"}
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
