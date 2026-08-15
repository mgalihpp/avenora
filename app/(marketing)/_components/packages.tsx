import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "./arrow-button";
import { PackagesAnimation } from "./packages-animation";

const packages = [
  {
    title: "7-Day Bali Wellness Journey",
    alt: "Overwater villa in tropical lagoon",
    image:
      "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a15d93ab05e3a945d9090ce_image%20134.webp",
  },
  {
    title: "Maldives Honeymoon Stay",
    alt: "Overwater villa in tropical lagoon",
    image:
      "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a15d95620222119606874d6_image%20133.webp",
  },
  {
    title: "Morocco Desert Experience",
    alt: "Overwater villa in tropical lagoon",
    image:
      "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a15d97ee1e09d55a3aa2827_image%20135.webp",
  },
  {
    title: "Thailand Bali Wellness Journey",
    alt: "Overwater villa in tropical lagoon",
    image:
      "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a15d9a9d29bd61388cb6664_image%20137.webp",
  },
];

function PackageCard({ item }: { item: (typeof packages)[number] }) {
  return (
    <Link
      href="#packages"
      className="group flex min-w-0 flex-col items-stretch gap-4 rounded-[1.75rem] bg-[#101a2d] p-2 text-white min-[480px]:flex-row min-[480px]:gap-8 min-[480px]:pr-4"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] max-[479px]:max-h-[13rem] min-[480px]:aspect-[4/5] min-[480px]:max-w-[17.875rem]">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 479px) 100vw, (max-width: 991px) 50vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative flex w-full flex-col justify-between gap-6 py-2">
        <div className="flex flex-col gap-3">
          <div className="reference-card-title max-w-[12.1875rem] text-[1.5rem] font-normal leading-[1.2] tracking-[-0.05rem]">
            {item.title}
          </div>
          <p className="font-sans text-base font-normal leading-[1.4] text-white/60">
            A calm escape designed around private villas, spa rituals, slow
            mornings, and cultural discovery.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-sans text-base font-medium leading-[1.2] text-white underline">
            From $2,400
          </span>
          <span className="flex items-center gap-1 text-white">
            <Star aria-hidden="true" className="size-5 fill-current" />
            <span className="font-sans text-base font-medium leading-[1.2]">
              5.00 (589)
            </span>
          </span>
        </div>
        <div className="flex size-[2.487rem] items-center justify-center rounded-full bg-[#020e26] text-white max-[767px]:absolute max-[767px]:right-3 max-[767px]:top-3">
          <ArrowUpRight
            aria-hidden="true"
            className="size-5"
            strokeWidth={1.8}
          />
        </div>
      </div>
    </Link>
  );
}

export function Packages() {
  return (
    <PackagesAnimation>
      <section id="packages" className="py-32 text-white">
        <div className="mx-auto w-full max-w-[82rem] px-4">
          <div
            data-packages-anim
            className="flex flex-col items-center overflow-hidden text-center"
          >
            <div className="rounded-full bg-white/10 px-4 py-2">
              <span className="font-sans text-base font-normal leading-[1.4] text-white">
                Our Packages
              </span>
            </div>
            <h2 className="reference-card-title mt-5 max-w-[49.625rem] text-[clamp(2.25rem,4vw,3.75rem)] font-normal leading-none tracking-[-0.17rem] text-white">
              Curated Travel Packages With Room for Personal Details.
            </h2>
            <p className="mt-6 max-w-[37.1875rem] font-sans text-base font-normal leading-[1.4] text-white/60">
              Choose from carefully designed journey ideas, then customize the
              pace, destination, hotel style, activities, and special moments
              around your preferences.
            </p>
          </div>

          <div
            data-packages-anim
            className="mt-14 grid grid-cols-1 gap-5 min-[992px]:grid-cols-2"
          >
            {packages.map((item) => (
              <PackageCard key={item.title} item={item} />
            ))}
          </div>

          <div data-packages-anim className="mt-12 flex justify-center">
            <Link
              href="#packages"
              className="group inline-flex items-center gap-6 rounded-full bg-white p-2 pl-8 font-display text-base font-semibold text-black transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span>Explore Packages</span>
              <ArrowButton />
            </Link>
          </div>
        </div>
      </section>
    </PackagesAnimation>
  );
}
