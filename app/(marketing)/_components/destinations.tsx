import { ArrowUpRight, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DestinationsAnimation } from "./destinations-animation";

const destinations = [
  {
    name: "Santorini Private Escape",
    location: "Santorini, Greece",
    alt: "Overwater villa in tropical lagoon",
    image:
      "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a1b311331fed60b9bc4490f_image%20129.webp",
  },
  {
    name: "Malibu Cliff Retreat",
    location: "Malibu, California",
    alt: "Luxury Maldives water villa resort",
    image:
      "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a1b31644f9f44f7acf8eac1_image%20131.webp",
  },
  {
    name: "Modern Desert Haven",
    location: "Dubai Desert, UAE",
    alt: "Historic mosque tower in Morocco",
    image:
      "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a1b31b24f9f44f7acf8f3fb_image%20145.webp",
  },
  {
    name: "Santorini Sunset Tour",
    location: "Santorini, Greece",
    alt: "Longtail boat on tropical island beach",
    image:
      "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a1b320c81b18d94597ffcd1_image%20146.webp",
  },
  {
    name: "Bali Island Escape",
    location: "Bali, Indonesia",
    alt: "Luxury Maldives water villa resort",
    image:
      "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a1b323911b6e405a1d0cf95_image%20147.webp",
  },
];

function DestinationCard({
  destination,
}: {
  destination: (typeof destinations)[number];
}) {
  return (
    <Link
      href="#destinations"
      className="group flex flex-col gap-7 rounded-[2rem] bg-white p-3 pb-4"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
        <Image
          src={destination.image}
          alt={destination.alt}
          fill
          sizes="(max-width: 1023px) 100vw, 480px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-end justify-between gap-4 pl-5">
        <div className="flex min-w-0 flex-col gap-2">
          <div className="flex items-center gap-2">
            <Star
              aria-hidden="true"
              className="size-4 fill-current text-[#030505]"
            />
            <span className="font-sans text-base font-normal leading-[1.4] text-black/60">
              4.5
            </span>
          </div>
          <div className="reference-card-title text-[1.75rem] font-normal leading-[1.2] tracking-[-0.05rem] text-[#030505]">
            {destination.name}
          </div>
          <div className="flex items-center gap-2 text-black">
            <MapPin aria-hidden="true" className="size-5" strokeWidth={1.8} />
            <span className="font-sans text-[1.125rem] font-medium leading-[1.4]">
              {destination.location}
            </span>
          </div>
        </div>
        <div className="flex size-[3.6rem] shrink-0 items-center justify-center rounded-full bg-[#e6f6ff] transition-colors duration-300 group-hover:bg-[#2739ff] group-hover:text-white">
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

export function Destinations() {
  return (
    <DestinationsAnimation>
      <section
        id="destinations"
        aria-labelledby="destinations-heading"
        className="pb-20 sm:pb-28"
      >
        <div className="mx-auto w-full max-w-[82rem] px-4">
          <div data-destinations-wrap className="h-[400vh]">
            <div className="sticky top-0 flex items-start justify-between gap-12">
              <div className="pt-[8rem]">
                <h2
                  id="destinations-heading"
                  className="reference-card-title max-w-[30rem] text-[3.75rem] font-normal leading-none tracking-[-0.17rem] text-[#030505]"
                >
                  Destinations For Unforgettable Journeys.
                </h2>
              </div>

              <div
                data-destinations-anim
                data-destinations-frame
                className="relative hidden max-h-[65.625rem] max-w-[27.9375rem] flex-col overflow-hidden min-[992px]:flex"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-[#ecf2f6] to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#ecf2f6] to-transparent"
                />
                <div data-destinations-list className="flex flex-col gap-6">
                  {destinations.map((destination) => (
                    <DestinationCard
                      key={destination.name}
                      destination={destination}
                    />
                  ))}
                </div>
              </div>

              <div
                data-destinations-anim
                className="sticky top-1/2 hidden max-w-[15rem] flex-col items-center gap-5 pb-[5.5rem] min-[992px]:flex"
              >
                {destinations.map((destination, index) => (
                  <div
                    key={destination.name}
                    data-destinations-item
                    className="relative flex w-full flex-col items-center justify-center gap-3 pb-5"
                  >
                    <div
                      data-destinations-number
                      className="absolute bottom-[-30%] left-[-11%] text-[1.5rem] font-normal leading-none text-[#2739ff]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div
                      data-destinations-name
                      className="reference-card-title text-base font-normal text-black opacity-20"
                    >
                      {destination.name}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px w-full bg-black/20">
                      <div
                        data-destinations-line
                        className="h-px bg-[#2739ff]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            data-destinations-anim
            className="flex flex-col gap-5 max-[991px]:flex min-[992px]:hidden"
          >
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>
    </DestinationsAnimation>
  );
}
