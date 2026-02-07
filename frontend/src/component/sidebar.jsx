import React from "react";
import { FloatingDock } from "@/ui/floating-dock";
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconChartBar,
  IconDownload,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#products",
    },
    {
      title: "TechStack",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#techstack",
    },
    {
      title: "Analysis",
      icon: (
        <IconChartBar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#analysis",
    },
    {
      title: "About",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Download",
      icon: (
        <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#download",
    },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/SS-S3/ALLELE-LANDING",
    },
  ];
  return (
    <div className="fixed left-0 top-0 h-screen flex items-center z-50">
      <div className="flex flex-col gap-4 bg-gray-50 dark:bg-neutral-900 p-3 rounded-r-2xl shadow-lg">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center hover:scale-[1.2] transition-all duration-300 ease-in-out group relative"
            title={link.title}
          >
            <div className="h-5 w-5">{link.icon}</div>
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-100 dark:bg-neutral-800 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {link.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
