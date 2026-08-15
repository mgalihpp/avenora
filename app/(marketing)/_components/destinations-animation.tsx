"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function DestinationsAnimation({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    document.documentElement.classList.add("destinations-anim-ready");

    const wrap = root.querySelector<HTMLElement>("[data-destinations-wrap]");
    const frame = root.querySelector<HTMLElement>("[data-destinations-frame]");
    const list = root.querySelector<HTMLElement>("[data-destinations-list]");
    const items = root.querySelectorAll<HTMLElement>(
      "[data-destinations-item]",
    );
    if (!wrap || !frame || !list || items.length === 0) return;

    if (window.matchMedia(REDUCED_MOTION).matches) {
      gsap.set(frame, { maxHeight: "none", overflow: "visible" });
      gsap.set(items, { clearProps: "all" });
      return;
    }

    const context = gsap.context(() => {
      const step = () => {
        const firstCard = list.children[0] as HTMLElement | undefined;
        return (firstCard?.offsetHeight ?? 0) + 24;
      };

      items.forEach((item, index) => {
        const name = item.querySelector<HTMLElement>(
          "[data-destinations-name]",
        );
        const number = item.querySelector<HTMLElement>(
          "[data-destinations-number]",
        );
        const line = item.querySelector<HTMLElement>(
          "[data-destinations-line]",
        );
        if (!name || !number || !line) return;

        gsap.set(name, { autoAlpha: index === 0 ? 1 : 0.2 });
        gsap.set(number, { scale: index === 0 ? 1 : 0 });
        gsap.set(line, { width: index === 0 ? "100%" : "0%" });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        defaults: { ease: "none" },
      });

      timeline.to(
        list,
        { y: () => -step() * (items.length - 1), duration: items.length },
        0,
      );

      items.forEach((item, index) => {
        const name = item.querySelector<HTMLElement>(
          "[data-destinations-name]",
        );
        const number = item.querySelector<HTMLElement>(
          "[data-destinations-number]",
        );
        const line = item.querySelector<HTMLElement>(
          "[data-destinations-line]",
        );
        if (!name || !number || !line) return;

        timeline
          .to(name, { autoAlpha: 1, duration: 1 }, index)
          .to(number, { scale: 1, duration: 1, ease: "back.out(2.5)" }, index)
          .to(line, { width: "100%", duration: 1 }, index);

        if (index < items.length - 1) {
          timeline
            .to(name, { autoAlpha: 0.2, duration: 1 }, index + 1)
            .to(number, { scale: 0, duration: 1 }, index + 1)
            .to(line, { width: "0%", duration: 1 }, index + 1);
        }
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} data-destinations-root className="bg-[#ecf2f6]">
      {children}
    </div>
  );
}
