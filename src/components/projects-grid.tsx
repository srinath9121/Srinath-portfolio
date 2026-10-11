import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GithubLogo, Globe } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { projects, type Project } from "@/config/projects";
import { getTechIcon } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const detailHref = `/projects/${project.slug}`;

  return (
    <LiquidGlassCard
      glowIntensity="sm"
      shadowIntensity="md"
      borderRadius="18px"
      blurIntensity="md"
      className="animate-in-up-on-view group flex min-w-0 flex-col"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div
        className={cn(
          "relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-muted sm:aspect-[16/11]",
          !project.cover && ["bg-linear-to-br", project.gradient],
        )}
      >
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.title} cover`}
            fill
            sizes="(max-width: 640px) 100vw, 400px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
            <span className="relative text-3xl font-bold tracking-tight text-foreground/20 sm:text-4xl">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              href={detailHref}
              className="text-xl font-bold tracking-tight transition-colors hover:text-secondary"
            >
              {project.title}
            </Link>
            {project.datasetUrl && (
              <div className="mt-1">
                <a
                  href={project.datasetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-primary transition-colors hover:underline"
                >
                  ↗ {project.datasetLabel || "Dataset"}
                </a>
              </div>
            )}
            {project.status && (
              <div className="mt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-amber-600 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-300">
                  <span className="size-1.5 rounded-full bg-amber-500" />
                  {project.status}
                </span>
              </div>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            {project.datasetUrl && (
              <Link
                href={project.datasetUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Dataset for ${project.title}`}
                className="rounded-md p-1 text-secondary transition-colors hover:text-foreground"
              >
                <Globe className="size-5" />
              </Link>
            )}
            {project.href && (
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="rounded-md p-1 text-secondary transition-colors hover:text-foreground"
              >
                <GithubLogo className="size-5" />
              </Link>
            )}
          </div>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary sm:text-[14.5px]">
          {project.description}
        </p>

        {project.methodology && project.methodology.length > 0 && (
          <div className="mt-4 rounded-xl border border-border/50 bg-background/50 p-3.5">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Methodology
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-secondary">
              {project.methodology.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/70" />
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.modules && project.modules.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.modules.slice(0, 5).map((module) => (
              <span
                key={module}
                className="rounded border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {module}
              </span>
            ))}
            {project.modules.length > 5 && (
              <span className="font-mono text-[10px] text-muted-foreground self-center">
                +{project.modules.length - 5}
              </span>
            )}
          </div>
        )}

        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Technologies</p>
          <div className="mt-2.5 flex items-end justify-between gap-3">
            <div className="flex min-w-0 flex-wrap gap-2">
            {project.tech.map((tech) => {
              const icon = getTechIcon(tech);
              return icon ? (
                <div
                  key={tech}
                  title={tech}
                  className="flex size-7 items-center justify-center rounded-md bg-background/70 shadow-sm ring-1 ring-border/60 dark:bg-white/95"
                >
                  <Image
                    src={icon.startsWith("/") ? icon : `https://cdn.simpleicons.org/${icon}`}
                    alt={tech}
                    width={16}
                    height={16}
                    className="size-4"
                    unoptimized
                  />
                </div>
              ) : (
                <span
                  key={tech}
                  className="rounded-md border border-dashed border-border bg-background/50 px-2 py-1 font-mono text-[10px] text-secondary"
                >
                  {tech}
                </span>
              );
            })}
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-secondary transition-colors hover:bg-muted hover:text-foreground"
                >
                  <GithubLogo className="size-3.5" />
                  GitHub
                </a>
              )}
              <Link
                href={detailHref}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-secondary transition-colors hover:bg-muted hover:text-foreground"
              >
                Details
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>


      </div>
    </LiquidGlassCard>
  );
}

export function ProjectsGrid({
  items,
  limit,
  showHeading = true,
  showViewAll = false,
  headingTitle = "Projects",
  headingSubtitle = "Featured",
}: {
  items?: Project[];
  limit?: number;
  showHeading?: boolean;
  showViewAll?: boolean;
  headingTitle?: string;
  headingSubtitle?: string;
}) {
  const source = items ?? projects;
  const list = limit && !items ? source.filter((p) => p.featured) : source;
  const displayed = limit ? list.slice(0, limit) : list;

  return (
    <Container>
      {showHeading && (
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-secondary">{headingSubtitle}</p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
              {headingTitle}
            </h2>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {displayed.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {showViewAll && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="rounded-lg border border-border bg-card px-5 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
          >
            Show all projects
          </Link>
        </div>
      )}
    </Container>
  );
}
