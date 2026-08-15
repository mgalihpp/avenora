"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { type ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function TravoraIntroAnimation({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>("[data-travora-anim]");
    const values = root.querySelectorAll<HTMLElement>("[data-stat-value]");
    const text = root.querySelector<HTMLElement>("[data-travora-text]");
    const split = text ? new SplitText(text, { type: "words" }) : null;
    const setFinalValues = () => {
      values.forEach((element) => {
        element.textContent = element.dataset.statTarget ?? "0";
      });
    };

    if (window.matchMedia(REDUCED_MOTION).matches) {
      gsap.set(targets, { clearProps: "all" });
      setFinalValues();
      split?.revert();
      return;
    }

    const context = gsap.context(() => {
      gsap.set(targets, { autoAlpha: 0, y: 36 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      timeline.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
      });

      if (split) {
        gsap.set(split.words, { autoAlpha: 0.2 });
        gsap.to(split.words, {
          autoAlpha: 1,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: text,
            start: "top 82%",
            end: "bottom 42%",
            scrub: 1,
          },
        });
      }

      values.forEach((element) => {
        const counter = { value: 0 };
        const target = Number(element.dataset.statTarget ?? 0);
        gsap.to(counter, {
          value: target,
          duration: 1.2,
          delay: 0.2,
          ease: "power2.out",
          snap: { value: 1 },
          scrollTrigger: {
            trigger: root,
            start: "top 78%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = Math.round(counter.value).toString();
          },
        });
      });
    }, root);

    return () => {
      context.revert();
      split?.revert();
    };
  }, []);

  return (
    <div ref={rootRef} data-travora-intro className="bg-[#ecf2f6]">
      {children}
    </div>
  );
}
