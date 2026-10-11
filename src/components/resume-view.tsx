"use client";

import Link from "next/link";
import {
  ArrowSquareOut,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Phone,
  Printer,
} from "@phosphor-icons/react";
import { heroConfig } from "@/config/hero";
import { education, skills } from "@/config/education";
import { projects } from "@/config/projects";

export function ResumeView() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Top action bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4 print:hidden">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">
            Curriculum Vitae · Updated 2026
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Printer className="size-3.5" />
            Print / Save PDF
          </button>
          <a
            href={`mailto:${heroConfig.email}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-90"
          >
            <EnvelopeSimple className="size-3.5" />
            Request Full Dossier
          </a>
        </div>
      </div>

      {/* Main CV Content */}
      <div className="space-y-8 text-foreground">
        {/* Header */}
        <div className="border-b border-border/60 pb-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {heroConfig.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-primary">
            Data Science Student · AI/ML Engineering & Practical Systems
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-secondary">
            <a
              href={`mailto:${heroConfig.email}`}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <EnvelopeSimple className="size-3.5" />
              {heroConfig.email}
            </a>
            <a
              href={heroConfig.calendarUrl}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <Phone className="size-3.5" />
              {heroConfig.phone}
            </a>
            <a
              href="https://github.com/srinath9121"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <GithubLogo className="size-3.5" />
              github.com/srinath9121
            </a>
            <a
              href="https://www.linkedin.com/in/srinath-swamy-b41a9b267"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <LinkedinLogo className="size-3.5" />
              LinkedIn
            </a>
            <span>{heroConfig.location}</span>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="space-y-2">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Summary
          </h3>
          <p className="text-sm leading-relaxed text-secondary sm:text-[14.5px]">
            Data Science undergraduate focused on applied machine learning, multimodal computer vision, and high-performance analytical systems. Experienced in developing end-to-end deep learning pipelines (ResNet + LSTM) and financial/macro intelligence workstations with FastAPI and SQLite. Emphasizes methodological rigor, reproducible architectures, and practical deployment.
          </p>
        </section>

        {/* Education */}
        <section className="space-y-3">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Education
          </h3>
          <div className="space-y-3">
            {education.map((item) => (
              <div
                key={item.school}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
              >
                <div>
                  <h4 className="text-sm font-semibold">{item.school}</h4>
                  <p className="text-xs text-secondary">{item.degree}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-3">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Experience & Internships
          </h3>
          <div className="space-y-3">
            <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h4 className="text-sm font-semibold">UNP Education</h4>
                  <p className="text-xs text-secondary">Data Science & Machine Learning Intern</p>
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  <span>June–October 2025</span> · <span>India</span>
                </div>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-secondary sm:text-sm">
                Completed the Data Science & Machine Learning Internship Program, with project work involving exploratory data analysis, data preprocessing, machine learning model development, and evaluation.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border/40 pt-2.5">
                {["Python", "Machine Learning", "Data Analysis", "Feature Engineering", "Predictive Modeling"].map((t) => (
                  <span
                    key={t}
                    className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-foreground font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Research & Projects */}
        <section className="space-y-4">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Featured Projects & Machine Learning
          </h3>
          <div className="space-y-4">
            {projects.map((proj) => (
              <div
                key={proj.slug}
                className="rounded-xl border border-border/60 bg-muted/20 p-4 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h4 className="text-sm font-bold">{proj.title}</h4>
                  <span className="font-mono text-xs text-muted-foreground">
                    {proj.date}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-secondary sm:text-sm">
                  {proj.description}
                </p>

                {proj.methodology && (
                  <div className="mt-2.5 rounded-lg border border-border/40 bg-background/40 p-2.5 text-xs text-secondary">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Methodology
                    </p>
                    <ul className="mt-1 space-y-1 list-disc pl-3.5 marker:text-primary/70">
                      {proj.methodology.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border/40 pt-2.5 text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-foreground font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {proj.datasetUrl && (
                      <a
                        href={proj.datasetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-primary hover:underline"
                      >
                        Dataset <ArrowSquareOut className="size-3" />
                      </a>
                    )}
                    {proj.href && (
                      <a
                        href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-secondary hover:text-foreground"
                      >
                        GitHub <ArrowSquareOut className="size-3" />
                      </a>
                    )}
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-secondary hover:text-foreground"
                    >
                      Details <ArrowSquareOut className="size-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Competencies */}
        <section className="space-y-3">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Technical Competencies & Skills
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
