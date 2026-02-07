import React from "react";
import { MacbookScroll } from "@/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden ">
      <MacbookScroll
        src={`/linear.webp`}
        showGradient={false} />
    </div>
  );
}
