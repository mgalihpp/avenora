"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

const posterUrl =
  "https://cdn.prod.website-files.com/6a13e532999601af0ed6354d/6a21bdc2fc5ba01d56bbcc8d_happy-and-excited-mountain-hiker-on-the-top-2025-12-17-03-32-39-utc_poster.0000000.jpg";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  }

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={posterUrl}
        className="size-full object-cover"
      >
        <source
          src="https://cdn.prod.website-files.com/6a13e532999601af0ed6354d/6a21bdc2fc5ba01d56bbcc8d_happy-and-excited-mountain-hiker-on-the-top-2025-12-17-03-32-39-utc_mp4.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.prod.website-files.com/6a13e532999601af0ed6354d/6a21bdc2fc5ba01d56bbcc8d_happy-and-excited-mountain-hiker-on-the-top-2025-12-17-03-32-39-utc_webm.webm"
          type="video/webm"
        />
      </video>
      <button
        type="button"
        aria-label={
          isPaused
            ? "Play featured travel video"
            : "Pause featured travel video"
        }
        aria-pressed={isPaused}
        onClick={togglePlayback}
        className="absolute bottom-4 right-4 flex size-14 items-center justify-center rounded-full bg-white text-lg font-bold text-black shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {isPaused ? (
          <Play aria-hidden="true" className="size-5 fill-current" />
        ) : (
          <Pause aria-hidden="true" className="size-5 fill-current" />
        )}
      </button>
    </div>
  );
}
