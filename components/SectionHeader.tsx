"use client";

import { useInView } from "@/lib/useInView";
import CoffeeBranchIcon from "./CoffeeBranchIcon";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 motion-reduce:transition-none ${
        align === "center" ? "text-center" : ""
      } ${
        isInView
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      }`}
    >
      <span
        className={`section-eyebrow ${dark ? "text-copper/80" : ""} ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-4xl font-semibold tracking-display md:text-5xl lg:text-[3.25rem] lg:leading-tight ${
          dark ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl font-body text-base leading-relaxed md:text-lg ${
            dark ? "text-cream/70" : "text-espresso/65"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
      <CoffeeBranchIcon
        className={`mt-8 h-4 w-36 ${dark ? "text-copper/50" : "text-moss/40"} ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
