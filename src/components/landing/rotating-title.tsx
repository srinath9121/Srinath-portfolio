"use client";

import { useEffect, useState } from "react";
import { rotatingTitles } from "@/config/quote";

export function RotatingTitle() {
  const title = rotatingTitles[0] || "Data Science Student";
  const [stage, setStage] = useState<"visible" | "exiting" | "entering">("visible");

  useEffect(() => {
    let enterTimeout: ReturnType<typeof setTimeout>;
    let visibleTimeout: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      // 1. Smoothly fade/slide out upwards
      setStage("exiting");

      // 2. Position silently beneath
      enterTimeout = setTimeout(() => {
        setStage("entering");

        // 3. Immediately transition back in from below
        visibleTimeout = setTimeout(() => {
          setStage("visible");
        }, 60);
      }, 700);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(enterTimeout);
      clearTimeout(visibleTimeout);
    };
  }, []);

  return (
    <div className="relative h-6 overflow-hidden">
      <p
        className={`absolute inset-0 text-sm font-medium tracking-wide text-secondary ease-in-out sm:text-base ${
          stage === "entering" ? "transition-none" : "transition-all duration-700"
        }`}
        style={{
          opacity: stage === "visible" ? 1 : 0,
          transform:
            stage === "visible"
              ? "translateY(0)"
              : stage === "exiting"
                ? "translateY(-12px)"
                : "translateY(14px)",
          filter: stage === "visible" ? "blur(0)" : "blur(6px)",
        }}
      >
        {title}
      </p>
    </div>
  );
}
