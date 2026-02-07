import { EncryptedText } from "@/ui/encrypted-text";
import React from "react";

export function Header() {
  return (
    <p className="mx-auto max-w-lg py-10 text-3xl">
      <EncryptedText
        text="Welcome to the "
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-black"
        revealDelayMs={50} />
      <EncryptedText
        text="Allele 7.o"
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-black font-bold"
        revealDelayMs={50} />
      <EncryptedText
        text="!"
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-black"
        revealDelayMs={50} />
    </p>
  );
}
