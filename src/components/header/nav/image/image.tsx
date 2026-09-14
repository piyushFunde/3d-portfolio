import React from "react";
import { motion, AnimatePresence } from "motion/react";
import NextImage from "next/image";
import styles from "./style.module.scss";
import { NavPreview } from "@/types";
import { cn } from "@/lib/utils";

interface PreviewProps {
  activePreview: NavPreview | null;
}

const previewVariants = {
  initial: { opacity: 0, y: 8 },
  open: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15, ease: "easeIn" } },
};

const Preview: React.FC<PreviewProps> = ({ activePreview }) => {
  return (
    <div className={styles.imageContainer}>
      <AnimatePresence mode="wait">
        {activePreview?.type === "image" && (
          <motion.div
            key={activePreview.src}
            variants={previewVariants}
            initial="initial"
            animate="open"
            exit="exit"
            className="w-full h-full"
          >
            <NextImage
              src={activePreview.src}
              width={400}
              height={400}
              className="my-32 w-full h-auto object-cover"
              alt="Preview"
            />
          </motion.div>
        )}

        {activePreview?.type === "text" && (
          <motion.div
            key={activePreview.content}
            variants={previewVariants}
            initial="initial"
            animate="open"
            exit="exit"
            className={cn(
              styles.textPreview,
              "flex items-center justify-center h-full w-full"
            )}
          >
            <p className={styles.textPreviewContent}>
              {activePreview.content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Preview;
