import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "./arrow-button";
import { TravoraIntroAnimation } from "./travora-intro-animation";

const images = {
  trail:
    "https://cdn.prod.website-files.com/6a13e532999601af0ed6354d/6a15cce6fe0bbe11248ab6b8_image%2021.webp",
  hiker:
    "https://cdn.prod.website-files.com/6a13e532999601af0ed6354d/6a15cce685e88a679cd5e083_image%2015%20(4).webp",
};

const stats = [
  { value: 189, suffix: "K+", label: "HAPPY CLIENTS SERVED" },
  { value: 16, suffix: "K+", label: "ACTIVE TRAVELLING PEOPLE", accent: true },
  { value: 120, suffix: "+", label: "AVAILABLE COUNTRIES" },
];

export function TravoraIntro() {
  return (
    <TravoraIntroAnimation>
      <section
        aria-labelledby="travora-intro-heading"
        className="mx-auto w-full max-w-[100rem] px-4 py-20 text-black sm:px-8 sm:py-28 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[90rem] items-start gap-10 lg:grid-cols-[minmax(16rem,22.5rem)_minmax(20rem,1fr)_minmax(15rem,18.75rem)] lg:gap-14 xl:gap-20">
          <div
            data-travora-anim
            className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] lg:mt-0"
          >
            <Image
              src={images.trail}
              alt="Backpacker walking across a snowy mountain trail"
              fill
              sizes="(max-width: 1023px) 100vw, 360px"
              className="object-cover"
            />
          </div>

          <div
            data-travora-anim
            className="flex max-w-[48rem] flex-col justify-center lg:pt-1"
          >
            <h2
              id="travora-intro-heading"
              className="font-display text-[clamp(2.25rem,4vw,3.75rem)] font-normal leading-[1.1] tracking-[-0.08em]"
            >
              Travora creates personalized travel experiences for clients who
              value thoughtful planning, handpicked stays, private experiences,
              and a journey designed around the way they actually want to
              travel.
            </h2>
            <Link
              href="#destinations"
              className="group mt-8 inline-flex w-fit items-center gap-6 rounded-full bg-white p-2 pl-8 font-display text-base font-semibold text-black shadow-sm transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2739ff]"
            >
              <span>View Destinations</span>
              <ArrowButton />
            </Link>
          </div>

          <div
            data-travora-anim
            className="relative aspect-[1.1] w-full overflow-hidden rounded-[1.5rem] lg:mt-40"
          >
            <Image
              src={images.hiker}
              alt="Hiker in a blue jacket trekking through the mountains"
              fill
              sizes="(max-width: 1023px) 100vw, 300px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[90rem] gap-5 sm:mt-24 lg:grid-cols-3 lg:gap-6">
          {stats.map((stat) => (
            <article
              key={stat.label}
              data-travora-anim
              className={`flex min-h-[20.5rem] flex-col justify-between rounded-[1.5rem] p-7 sm:min-h-[20rem] sm:p-8 lg:p-9 ${stat.accent ? "bg-[#2f3dff] text-white" : "bg-white text-black"}`}
            >
              <div className="flex justify-end">
                <span
                  aria-hidden="true"
                  className={`flex size-16 items-center justify-center rounded-full text-2xl ${stat.accent ? "bg-[#e8f5fb] text-black" : "bg-[#e8f5fb] text-black"}`}
                >
                  {stat.accent ? "$" : stat.value === 120 ? "✓" : "♥"}
                </span>
              </div>
              <div>
                <p className="font-display text-[clamp(4.5rem,8vw,6.25rem)] font-normal leading-none tracking-[-0.09em]">
                  <span data-stat-value data-stat-target={stat.value}>
                    {stat.value}
                  </span>
                  <span>{stat.suffix}</span>
                </p>
                <p className="mt-4 font-display text-xl font-normal leading-tight opacity-75">
                  {stat.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </TravoraIntroAnimation>
  );
}
