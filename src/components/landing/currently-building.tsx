import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { getTechIcon } from "@/lib/tech-icons";

const MODULES = [
  { id: "01", name: "Market Intelligence", desc: "Cross-asset tracking & liquidity metrics" },
  { id: "02", name: "Macro & RBI", desc: "Monetary policy & economic releases" },
  { id: "03", name: "Global Risk", desc: "Sovereign spreads & currency transmission" },
  { id: "04", name: "Commodities", desc: "Crude, metals & energy shock propagation" },
  { id: "05", name: "Transmission Analysis", desc: "Policy rates to credit & market yields" },
  { id: "06", name: "Anomaly Detection", desc: "Statistical dislocations & macro divergence" },
  { id: "07", name: "AI Investigator", desc: "Contextual macroeconomic inquiry engine" },
];

const TECH_STACK = ["FastAPI", "React", "SQLite"];

export function CurrentlyBuilding() {
  return (
    <section aria-labelledby="currently-building-heading" className="w-full">
      <Container>
        {/* Prominent Section Heading */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary/80">
              Active Engineering
            </p>
            <h2
              id="currently-building-heading"
              className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Currently Building
            </h2>
          </div>

          {/* Development Status Indicator */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-medium text-amber-600 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-amber-500" />
            </span>
            <span>Under Development</span>
          </div>
        </div>

        {/* Terminal Aesthetic Card */}
        <LiquidGlassCard
          glowIntensity="md"
          shadowIntensity="md"
          borderRadius="18px"
          blurIntensity="md"
          className="group overflow-hidden border-border/80"
        >
          {/* Institutional Terminal Top Chrome */}
          <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-2.5 font-mono text-xs text-muted-foreground sm:px-6">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-red-500/60" />
              <span className="size-2.5 rounded-full bg-amber-500/60" />
              <span className="size-2.5 rounded-full bg-emerald-500/60" />
              <span className="ml-2 font-mono text-[11px] tracking-wide text-foreground/80">
                IMT // TERMINAL_WORKSPACE
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:inline-block">
                STATUS: IN_PROGRESS
              </span>
              <span className="rounded bg-background/60 px-1.5 py-0.5 font-mono text-[10px] text-foreground/80 ring-1 ring-border/50">
                v0.1-DEV
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            {/* Project Title & Metadata */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Indian Macro Terminal
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                2026 • Macro & Market Intelligence
              </span>
            </div>

            {/* Description */}
            <p className="mt-3.5 max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
              An institutional-style macroeconomic and market intelligence workstation focused on
              India, connecting macroeconomic developments, global risk, commodities, market
              anomalies, transmission pathways, and potential market exposure.
            </p>

            {/* Key Modules Grid */}
            <div className="mt-7">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Key Modules
                </p>
                <span className="font-mono text-[11px] text-muted-foreground">
                  7 Core Subsystems
                </span>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {MODULES.map((mod) => (
                  <div
                    key={mod.id}
                    className="flex flex-col justify-between rounded-lg border border-border/60 bg-background/50 p-3 transition-colors hover:border-foreground/20 hover:bg-background/80"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-foreground text-xs sm:text-sm">
                        {mod.name}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {mod.id}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-secondary">
                      {mod.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer: Technology Stack & Valid Destination Link */}
            <div className="mt-7 flex flex-col gap-4 border-t border-border/50 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Technology Stack
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  {TECH_STACK.map((tech) => {
                    const icon = getTechIcon(tech);
                    return (
                      <div
                        key={tech}
                        className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/70 px-2.5 py-1 text-xs font-medium text-foreground shadow-2xs"
                      >
                        {icon && (
                          <Image
                            src={
                              icon.startsWith("/")
                                ? icon
                                : `https://cdn.simpleicons.org/${icon}`
                            }
                            alt={tech}
                            width={14}
                            height={14}
                            className="size-3.5"
                            unoptimized
                          />
                        )}
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 sm:pt-0">
                <Link
                  href="/projects/indian-macro-terminal"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground shadow-2xs transition-colors hover:bg-muted"
                >
                  <span>Project Overview & Notes</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </Container>
    </section>
  );
}
