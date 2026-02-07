import { FocusCards } from "@/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Electron",
      src: "/assessts/electron-icon.webp",
    },
    {
      title: "SQLite",
      src: "/assessts/SQLite.png",
    },
    {
      title: "FastAPI",
      src: "/assessts/FastAPI.svg",
    },
    {
      title: "React",
      src: "/assessts/React.png",
    },
    {
      title: "Node.js",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop",
    },
    {
      title: "MongoDB",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
