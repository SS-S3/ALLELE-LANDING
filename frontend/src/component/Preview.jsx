import React from "react";
import { LinkPreview } from "@/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Our variant prioritization strategy is informed by{" "}
        <LinkPreview
          url="https://sr-management.vercel.app/"
          className="font-bold"
        >
          ClinVar
        </LinkPreview>{" "}
        and population-scale evidence from{" "}
        <LinkPreview
          url="https://gnomad.broadinstitute.org/"
          className="font-bold"
        >
          gnomAD
        </LinkPreview>
        , enabling evidence-driven genomic variant ranking.
      </p>

      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Built as a{" "}
        <LinkPreview
          url="https://www.electronjs.org/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Standalone Electron Desktop Platform
        </LinkPreview>{" "}
        to support offline, reproducible genetic and pathogen variant analysis.
      </p>
    </div>
  );
}