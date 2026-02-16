import { Tooltip } from "@/ui/tooltip-card";
import React from "react";

export function TooltipCardDemo() {
  return (
    <div className="mx-auto max-w-2xl p-4 md:p-10">
      {/* Paragraph 1 */}
      <p className="text-base md:text-lg text-white text-justify">
        Modern genomic workflows often rely on cloud-based pipelines which can{" "}
        <Tooltip
          containerClassName="text-white"
          content="Cloud pipelines introduce privacy and latency concerns."
          maxWidth="w-[28rem]">
          <span className="font-bold cursor-pointer">limit data sovereignty and reproducibility</span>
        </Tooltip>
        . Network dependency and external infrastructure failures further complicate critical
        biomedical analysis.
      </p>

      <p className="mt-10 text-base md:text-lg text-white text-justify">
        To address these limitations,{" "}
        <Tooltip
          containerClassName="text-white"
          content="Local desktop platform ensuring data privacy and reproducibility.">
          <span className="cursor-pointer font-bold">AlleleRank</span>
        </Tooltip>{" "}
        was developed as a standalone desktop platform that executes all genomic
        computation locally, without relying on external services or constant
        internet access.
      </p>

      <p className="mt-10 text-base md:text-lg text-white text-justify">
        The system focuses on{" "}
        <Tooltip
          containerClassName="text-white"
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