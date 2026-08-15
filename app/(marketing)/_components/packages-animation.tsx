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
      gsap.set(targets, { autoAlpha: 0, y: 36 });
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          once: true,
        },
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} data-packages-root className="bg-[#020e26]">
      {children}
    </div>
  );
}
