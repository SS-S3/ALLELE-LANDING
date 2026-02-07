import { EncryptedText } from "@/ui/encrypted-text";
import React from "react";

export function Header() {
  return (
    <p className="mx-auto max-w-lg py-10 text-3xl">
      <EncryptedText
        text="Welcome to the AlleleRank!"
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-black"
        revealDelayMs={50} />
    </p>
  );
}
