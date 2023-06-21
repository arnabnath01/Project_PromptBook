'use client';
import "@styles/text-animation.css";
import { useEffect, useRef } from 'react';

function TypingEffect() {
  const typedTextRef = useRef(null);
  const cursorRef = useRef(null);

  const textArray = ["create", "discover", "copy :)"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  let textArrayIndex = useRef(0);
  let charIndex = useRef(0);

  useEffect(() => {
    const typedTextSpan = typedTextRef.current;
    const cursorSpan = cursorRef.current;

    function type() {
      if (charIndex.current < textArray[textArrayIndex.current].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex.current].charAt(charIndex.current);
        charIndex.current++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex.current > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex.current].substring(
          0,
          charIndex.current - 1
        );
        charIndex.current--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex.current++;
        if (textArrayIndex.current >= textArray.length) textArrayIndex.current = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);
  }, []);

  return (
    <div className="container">
      <p>
        Do something great with prompts <span ref={typedTextRef} className="typed-text"></span>
        <span ref={cursorRef} className="cursor">&nbsp;</span>
      </p>
    </div>
  );
}

export default TypingEffect;
