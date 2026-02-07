import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon} />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-cyan-500/10 dark:border-cyan-500/20 bg-black/10 dark:bg-black/20"></div>
);
const items = [
  {
    title: "Variant Impact Analysis 🧬",
    description: "Assess the functional impact of genetic variants on proteins, pathways, and disease mechanisms using curated genomic evidence.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pathogen & Disease Association 🦠",
    description: "Identify links between pathogens, host genetics, and disease outcomes to support infectious disease research.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Variant Prioritization & Risk Scoring 📊",
    description: "Rank disease-associated variants using computational scoring models to highlight clinically and biologically relevant signals.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Evidence & Knowledge Integration 🧪",
    description: "Integrate public genomic databases, literature evidence, and annotations to support transparent and reproducible analysis.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
