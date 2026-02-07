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
      src: "/assessts/react.png",
    },
    {
      title: "Hugging Face",
      src: "/assessts/huggingface.png",
    },
    {
      title: "SciKit Learn",
      src: "/assessts/scikit-learn.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
