"use client";

import { AnimatePresence, Variants, motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string; // keep prop for future, but we won't pass it to useInView
  blur?: string;
}
export const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = true,
  inViewMargin, // accepted but not used to avoid type issues on Vercel build
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef(null);

  // Fix: Do not pass `margin` to useInView to avoid MarginType typing error
  const inViewResult = useInView(ref, { once: true });

  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={defaultVariants}
        transition={{ duration, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;
