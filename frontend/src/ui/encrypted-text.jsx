import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const EncryptedText = ({
  text,
  encryptedClassName = "",
  revealedClassName = "",
  revealDelayMs = 50,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isEncrypted, setIsEncrypted] = useState(true);

  useEffect(() => {
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsEncrypted(false);
      }

      iteration += 1 / 3;
    }, revealDelayMs);

    return () => clearInterval(interval);
  }, [text, revealDelayMs]);

  return (
    <motion.span
      className={isEncrypted ? encryptedClassName : revealedClassName}
    >
      {displayText}
    </motion.span>
  );
};
