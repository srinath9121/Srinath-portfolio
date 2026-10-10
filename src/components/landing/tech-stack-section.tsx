"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { techStack } from "@/config/tech-stack";

export function TechStackSection() {
  return (
    <Container>
      <SectionHeading title="Tech Stack" uppercase />
      <div className="grid grid-cols-[repeat(5,auto)] justify-between w-full max-w-xl gap-y-4 sm:gap-y-5">
        {techStack.map((tech) => (
          <Tooltip key={tech.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <button
                type="button"
                aria-label={tech.name}
                className="flex size-12 sm:size-[54px] items-center justify-center rounded-xl border border-dashed border-border bg-card/60 transition-transform duration-200 hover:scale-105 hover:border-foreground/25 hover:bg-card dark:border-border dark:bg-white/95 dark:hover:bg-white shadow-xs"
              >
                <Image
                  src={tech.icon.startsWith("/") ? tech.icon : `https://cdn.simpleicons.org/${tech.icon}`}
                  alt={tech.name}
                  width={26}
                  height={26}
                  className="size-[26px] shrink-0"
                  unoptimized
                />
              </button>
            </TooltipTrigger>
            <TooltipContent>{tech.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}
