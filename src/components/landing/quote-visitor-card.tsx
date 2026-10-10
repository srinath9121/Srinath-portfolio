"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { quoteConfig } from "@/config/quote";
import { getOrdinalSuffix } from "@/lib/ordinal";

export function QuoteVisitorCard() {
  const [count, setCount] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const key = "visitor-counted";
    const alreadyCounted = sessionStorage.getItem(key);

    const load = async () => {
      try {
        if (!alreadyCounted) {
          const res = await fetch("/api/visitors", { method: "POST" });
          if (!res.ok) throw new Error("count failed");
          const data = (await res.json()) as { count: number };
          sessionStorage.setItem(key, "true");
          setCount(data.count);
          return;
        }

        const res = await fetch("/api/visitors");
        if (!res.ok) throw new Error("count failed");
        const data = (await res.json()) as { count: number };
        setCount(data.count);
      } catch {
        setFailed(true);
      }
    };

    void load();
  }, []);

  return (
    <Container>
      <LiquidGlassCard
        glowIntensity="sm"
        shadowIntensity="md"
        borderRadius="18px"
        blurIntensity="md"
        className="animate-in-up-on-view"
      >
        <div className="grid sm:grid-cols-[1fr_auto]">
          <div className="flex flex-col justify-between border-b border-border p-5 sm:border-b-0 sm:border-r sm:p-6">
            <div>
              <span className="text-5xl leading-none text-muted-foreground sm:text-6xl" aria-hidden="true">
                &ldquo;
              </span>
              <p className="mt-2 text-base font-medium leading-relaxed text-foreground/90 sm:text-lg">
                {quoteConfig.text}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {quoteConfig.supportingLine}
              </p>
            </div>
            <p className="mt-4 text-right font-mono text-xs text-muted-foreground sm:text-sm">
              — {quoteConfig.attribution}
            </p>
          </div>

          <div className="flex min-w-[200px] items-center justify-center p-5 text-center">
            {count !== null ? (
              <p className="text-sm text-muted-foreground sm:text-base">
                You are the{" "}
                <strong className="font-semibold text-foreground">
                  {count.toLocaleString()}
                </strong>
                <sup className="ml-0.5 text-xs">{getOrdinalSuffix(count)}</sup> visitor
              </p>
            ) : failed ? (
              <p className="text-sm text-muted-foreground">Thanks for visiting.</p>
            ) : (
              <p className="text-sm text-muted-foreground">Counting visitors...</p>
            )}
          </div>
        </div>
      </LiquidGlassCard>
    </Container>
  );
}
