import React from "react";
import { MacbookScroll } from "@/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden ">
      <MacbookScroll
        src={`/assessts/mac_image.png`}
        showGradient={false} />
    </div>
  );
}
