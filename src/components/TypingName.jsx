import { useEffect, useState } from "react";

export default function TypingName() {
  const text = "Ryan Rasalan";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting) {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // wait after typing
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1));
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <h1 className="typing-name">
      {displayText}
      <span className="cursor">|</span>
    </h1>
  );
}