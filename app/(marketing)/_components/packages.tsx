import { ArrowRight, Star } from "lucide-react";
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
      data-package-card
      className="package-card group relative flex min-w-0 flex-col items-stretch gap-4 rounded-[1.75rem] bg-[#101a2d] p-2 text-white min-[480px]:flex-row min-[480px]:gap-8 min-[480px]:pr-4"
    >
      <div
        data-packages-anim
        className="package-image-wrapper relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] max-[479px]:max-h-[13rem] min-[480px]:aspect-[4/5] min-[480px]:max-w-[17.875rem]"
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 479px) 100vw, (max-width: 991px) 50vw, 400px"
          className="package-image object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="package-content-wrapper relative flex w-full flex-col gap-6 py-2 min-[992px]:gap-[6rem] min-[992px]:py-2">
        <div
          data-packages-anim
          className="package-title-wrapper flex w-full flex-col gap-4"
        >
          <div className="max-w-[12.1875rem]">
            <div className="reference-card-title text-[1.5rem] font-normal leading-[1.2] tracking-[-0.05rem]">
              {item.title}
            </div>
          </div>
          <p className="font-display text-base font-normal leading-[1.4] text-white/60">
            A calm escape designed around private villas, spa rituals, slow
            mornings, and cultural discovery.
          </p>
        </div>
        <div
          data-packages-anim
          className="package-bottom flex items-center justify-between"
        >
          <span className="font-display text-base font-medium leading-[1.2] text-white underline">
            From $2,400
          </span>
          <span className="flex items-center gap-1 text-white">
            <Star aria-hidden="true" className="size-5 fill-current" />
            <span className="font-display text-base font-medium leading-[1.2]">
              5.00 (589)
            </span>
          </span>
        </div>
      </div>
      <div
        data-packages-anim
        className="package-icon-wrapper absolute right-4 top-4 flex size-[2.487rem] items-center justify-center rounded-full bg-[#020e26] text-white max-[767px]:right-[0.7rem] max-[767px]:top-[0.7rem]"
      >
        <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.8} />
      </div>
    </Link>
  );
}

export function Packages() {
  return (
    <PackagesAnimation>
      <section id="packages" className="py-32 text-white">
        <div className="mx-auto w-full max-w-[82rem] px-4">
          <div className="section-title-wrapper flex flex-col items-center overflow-hidden text-center">
            <div
              data-packages-anim
              className="rounded-full bg-white/10 bg-[url('https://cdn.prod.website-files.com/6a13e532999601af0ed6354d/6a1a88ea656dbb77c20fae67_Frame%202085667684.webp')] bg-cover bg-center px-4 py-2"
            >
              <span className="font-display text-base font-normal leading-[1.4] text-white">
                Our Packages
              </span>
            </div>
            <h2
              data-packages-anim
              className="reference-card-title mt-4 max-w-[49.625rem] text-[clamp(2.25rem,4vw,3.75rem)] font-normal leading-none tracking-[-0.17rem] text-white"
            >
              Curated Travel Packages With Room for Personal Details.
            </h2>
            <p
              data-packages-anim
              className="mt-6 max-w-[37.1875rem] font-display text-base font-normal leading-[1.4] text-white/60"
            >
              Choose from carefully designed journey ideas, then customize the
              pace, destination, hotel style, activities, and special moments
              around your preferences.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 min-[992px]:grid-cols-2">
            {packages.map((item) => (
              <PackageCard key={item.title} item={item} />
            ))}
          </div>

          <div data-packages-anim className="mt-14 flex justify-center">
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
