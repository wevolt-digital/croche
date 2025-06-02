"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  delay?: number;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false, 
  className,
  delay = 0
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-10",
      centered ? "text-center" : "",
      className
    )}>
      <motion.h3 
        className="heading-md text-brown"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      
      {subtitle && (
        <motion.p 
          className="mt-3 text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;