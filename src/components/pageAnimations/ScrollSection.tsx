'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function ScrollSection({
  children,
  className,
  id,
  delay = 0,
}: ScrollSectionProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier cubic reveal
      }}
    >
      {children}
    </motion.div>
  );
}