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
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[25rem]">
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
const VariantImage = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img 
      src="/assessts/variant.png" 
      alt="Variant Analysis" 
      className="w-full h-full object-fill"
    />
  </div>
);
const EvidenceImage = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img 
      src="/assessts/Evidence.png" 
      alt="Evidence" 
      className="w-full h-full object-fill"
    />
  </div>
);
const PathogenImage = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img 
      src="/assessts/pathogens.png" 
      alt="Pathogens" 
      className="w-full h-full object-fill"
    />
  </div>
);
const PrioritizeImage = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img 
      src="/assessts/Prioritize.png" 
      alt="Prioritization" 
      className="w-full h-full object-fill"
    />
  </div>
);
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-cyan-500/10 dark:border-cyan-500/20 bg-black/10 dark:bg-black/20"></div>
);
const items = [
  {
    title: "Variant Impact Analysis 🧬",
    description: "Assess the functional impact of genetic variants on proteins, pathways, and disease mechanisms using curated genomic evidence.",
    header: <VariantImage />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pathogen & Disease Association 🦠",
    description: "Identify links between pathogens, host genetics, and disease outcomes to support infectious disease research.",
    header: <PathogenImage />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Variant Prioritization & Risk Scoring 📊",
    description: "Rank disease-associated variants using computational scoring models to highlight clinically and biologically relevant signals.",
    header: <PrioritizeImage />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Evidence & Knowledge Integration 🧪",
    description: "Integrate public genomic databases, literature evidence, and annotations to support transparent and reproducible analysis.",
    header: <EvidenceImage />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
