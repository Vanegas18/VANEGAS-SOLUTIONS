"use client";

import { useRef, ElementType } from "react";
import { useInViewLite } from "@/hooks/use-in-view-lite";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewLite(ref, { once: true, margin: "-80px" });

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}>
      {children}
    </Tag>
  );
}
