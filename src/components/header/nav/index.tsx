import { useState } from "react";
import { motion } from "motion/react";
import styles from "./style.module.scss";
import { height } from "../anim";
import Body from "./body/body";
import Preview from "./image/image";
import MotionToggle from "@/components/motion-toggle";

import { links } from "@/components/header/config";
import { NavPreview } from "@/types";
import { cn } from "@/lib/utils";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  // Explicitly typed state — null means nothing is hovered, no image leaks through
  const [activePreview, setActivePreview] = useState<NavPreview | null>(null);

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      // Clicking the empty overlay area (anything that isn't a link/control)
      // closes the menu.
      onClick={() => setIsActive(false)}
      className={cn(styles.nav, "relative")}
    >
      <div className={cn(styles.wrapper, 'flex justify-end sm:justify-start')}>
        <div className={styles.container}>
          <Body
            links={links}
            setIsActive={setIsActive}
            onLinkHover={(preview) => setActivePreview(preview)}
            onLinkLeave={() => setActivePreview(null)}
          />
        </div>
        <Preview activePreview={activePreview} />
      </div>
      {/* Subtle reduced-motion control, tucked into the bottom-right of the menu.
          Stop propagation so toggling motion doesn't also close the menu. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-0 right-0"
      >
        <MotionToggle />
      </motion.div>
    </motion.div>
  );
};

export default Index;
