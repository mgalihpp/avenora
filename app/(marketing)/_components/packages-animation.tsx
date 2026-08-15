"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function PackagesAnimation({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    document.documentElement.classList.add("packages-anim-ready");

    const targets = root.querySelectorAll<HTMLElement>("[data-packages-anim]");

    if (window.matchMedia(REDUCED_MOTION).matches) {
      gsap.set(targets, { clearProps: "all" });
      return;
    }

    const context = gsap.context(() => {
      targets.forEach((target) => {
        ScrollTrigger.create({
          trigger: target,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              target,
              { opacity: 0, y: 32 },
              {
                opacity: 1,
                y: 0,
                duration: 0.75,
                ease: "power2.out",
              },
            );
          },
        });
      });

      ScrollTrigger.refresh();
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      context.revert();
    };
  }, []);

  return (
    <div ref={rootRef} data-packages-root className="bg-[#020e26]">
      {children}
    </div>
  );
}
