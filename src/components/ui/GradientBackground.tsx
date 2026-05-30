"use client";

import { useEffect, useRef } from "react";
import styles from "./GradientBackground.module.css";

export function GradientBackground() {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let hasMoved = false;
    let animationId: number;

    function move() {
      if (hasMoved) {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble!.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      animationId = requestAnimationFrame(move);
    }

    move();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className={styles.gradientBg} aria-hidden="true">
      <div className={styles.gradientsContainer}>
        <div className={styles.g2} />
        <div className={styles.g3} />

        <div ref={interactiveRef} className={styles.interactive} />
      </div>
    </div>
  );
}
