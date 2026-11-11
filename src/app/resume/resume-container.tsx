"use client";

import { useState } from "react";
import { FilePdf, Article, ArrowSquareOut } from "@phosphor-icons/react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { ResumeView } from "@/components/resume-view";

interface ResumeContainerProps {
  pdfUrl?: string;
  name: string;
}

export function ResumeContainer({ pdfUrl, name }: ResumeContainerProps) {
  const [viewMode, setViewMode] = useState<"interactive" | "pdf">("interactive");

  return (
    <div className="space-y-4">
      {pdfUrl && (
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex rounded-lg border border-border bg-muted/40 p-1">
            <button
              type="button"
              onClick={() => setViewMode("interactive")}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "interactive"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Article className="size-3.5" />
              Interactive CV
            </button>
            <button
              type="button"
              onClick={() => setViewMode("pdf")}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "pdf"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FilePdf className="size-3.5" />
              PDF Document
            </button>
          </div>

          {viewMode === "pdf" && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Open in new tab <ArrowSquareOut className="size-3" />
            </a>
          )}
        </div>
      )}

      <LiquidGlassCard
        glowIntensity="sm"
        shadowIntensity="md"
        borderRadius="18px"
        blurIntensity="md"
        className={viewMode === "interactive" ? "p-6 sm:p-10" : "overflow-hidden p-0"}
      >
        {viewMode === "interactive" ? (
          <ResumeView />
        ) : (
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
            title={`${name} resume`}
            className="h-[85vh] w-full border-0 bg-neutral-900"
          />
        )}
      </LiquidGlassCard>
    </div>
  );
}
