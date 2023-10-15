import styles from './style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

export default function Index() {
  const phrases = [
    "Brasov is a beautiful and historic city",
    "Located in the Carpathian Mountains of Romania.",
    "It's known for its stunning natural scenery,",
    "Rich history, and a mix of architectural styles",
    "Influenced by its multicultural past."
  ];

  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const textRef = useRef(null); // Use a unique ref for each AnimatedText component

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
        // markers:true
      },
      left: "-200px",
      opacity: 0,
    });
  }, []);

  return <p ref={textRef}>{children}</p>;
}
