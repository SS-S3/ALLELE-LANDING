import { Tooltip } from "@/ui/tooltip-card";
import React from "react";

export function TooltipCardDemo() {
  return (
    <div className="mx-auto max-w-2xl p-4 md:p-10">
      {/* Paragraph 1 */}
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Modern genomic workflows often rely on{" "}
        <Tooltip
          containerClassName="text-neutral-600 dark:text-neutral-400 "
          content="Cloud pipelines introduce privacy and latency concerns."
          maxWidth="w-[28rem]">
          <span className="font-bold cursor-pointer">cloud-based pipelines</span>
        </Tooltip>{" "}
        which can limit data sovereignty and reproducibility. Network dependency
        and external infrastructure failures further complicate critical
        biomedical analysis.
      </p>

      <p className="mt-10 text-sm text-neutral-600 dark:text-neutral-400">
        To address these limitations,{" "}
        <Tooltip
          containerClassName="text-neutral-600 dark:text-neutral-400"
          content="Local desktop platform ensuring data privacy and reproducibility.">
          <span className="cursor-pointer font-bold">AlleleRank</span>
        </Tooltip>{" "}
        was developed as a standalone desktop platform that executes all genomic
        computation locally, without relying on external services or constant
        internet access.
      </p>

      <p className="mt-10 text-sm text-neutral-600 dark:text-neutral-400">
        The system focuses on{" "}
        <Tooltip
          containerClassName="text-neutral-600 dark:text-neutral-400"
          content="Prioritizes disease variants by functional impact and pathogenicity.">
          <span className="cursor-pointer font-bold">
            genetic variant ranking
          </span>
        </Tooltip>{" "}
        and pathogen analysis, enabling secure, reproducible, and privacy-first
        research workflows suitable for academic research, hackathons, and early
        clinical prototyping.
      </p>
    </div>
  );
}