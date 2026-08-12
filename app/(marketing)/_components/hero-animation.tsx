"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function HeroAnimation() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("hero-anim-ready");

    if (window.matchMedia(REDUCED_MOTION).matches) return;

    const title = document.querySelector<HTMLElement>(
      '[data-hero-anim="title"]',
    );
    const heading = document.querySelector<HTMLElement>(
      '[data-hero-anim="heading"]',
    );
    const button = document.querySelector<HTMLElement>(
      '[data-hero-anim="button"]',
    );
    const card = document.querySelector<HTMLElement>('[data-hero-anim="card"]');
    if (!title || !heading || !button || !card) return;

    const split = new SplitText(heading, { type: "chars" });
    const chars = split.chars;
    const stagger = 0.7 / chars.length;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(
      title,
      { autoAlpha: 0, yPercent: 70 },
      { autoAlpha: 1, yPercent: 0, duration: 1 },
      0,
    )
      .fromTo(
        chars,
        { autoAlpha: 0, yPercent: 70 },
        { autoAlpha: 1, yPercent: 0, duration: 0.7, stagger },
        0.57,
      )
      .fromTo(
        card,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, duration: 1.22 },
        0.75,
      )
      .fromTo(
        button,
        { autoAlpha: 0, yPercent: 100 },
        { autoAlpha: 1, yPercent: 0, duration: 0.7, ease: "power1.out" },
        0.96,
      );

    return () => {
      tl.kill();
      split.revert();
      gsap.set([title, heading, button, card], { clearProps: "all" });
    };
  }, []);

  return null;
}
