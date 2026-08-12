import Image from "next/image";
import Link from "next/link";

const cardImage =
  "https://cdn.prod.website-files.com/6a13e532999601af0ed6354d/6a21bdc2fc5ba01d56bbcc8d_happy-and-excited-mountain-hiker-on-the-top-2025-12-17-03-32-39-utc_poster.0000000.jpg";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "Destination", href: "#destinations", active: false },
  { label: "Package", href: "#packages", active: false },
  { label: "Contact", href: "#contact", active: false },
];

function ArrowButton() {
  return (
    <span className="flex size-11 items-center justify-center rounded-full bg-[#2f39ff] text-xl leading-none text-white transition-transform duration-300 group-hover:translate-x-0.5">
      <span aria-hidden="true">-&gt;</span>
    </span>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[#081d3c] text-white">
      <Image
        src="/hero.webp"
        alt="Snowy mountain peaks above the clouds"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(115deg,rgba(33,55,213,0.9)_0%,rgba(58,149,225,0.58)_44%,rgba(72,205,216,0.62)_100%)] mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,44,151,0.1)_7%,rgba(11,48,101,0.08)_38%,rgba(3,18,50,0.88)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[5vw] top-[13vh] select-none whitespace-nowrap text-[clamp(9rem,27vw,31rem)] font-semibold leading-[0.7] tracking-[-0.09em] text-white/90"
      >
        Travelo
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[1500px] flex-col px-5 pb-8 pt-6 sm:px-10 sm:pt-8 lg:px-14 xl:px-16">
        <header className="flex items-center justify-between gap-5">
          <Link
            href="/"
            className="text-[1.4rem] font-semibold tracking-[-0.06em] text-white transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Avenora
          </Link>

          <nav
            aria-label="Main navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-white/10 p-1 backdrop-blur-md md:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${item.active ? "bg-white text-[#111827]" : "text-white hover:bg-white/15"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#destinations"
            className="group flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-[#101010] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:gap-5 sm:pl-8"
          >
            <span className="hidden sm:inline">Start Exploring</span>
            <span className="sm:hidden">Explore</span>
            <ArrowButton />
          </Link>
        </header>

        <div className="mt-8 flex items-center justify-center md:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex w-full max-w-sm items-center justify-between rounded-full bg-white/10 p-1 text-xs backdrop-blur-md"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-3 py-2 transition-colors ${item.active ? "bg-white text-[#111827]" : "text-white/90 hover:bg-white/15"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto grid items-end gap-10 pt-[23vh] lg:grid-cols-[minmax(0,1fr)_29rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_31rem]">
          <section className="max-w-[41rem]">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              <span className="size-2 rounded-full bg-[#5360ff]" />
              Travel, thoughtfully arranged
            </p>
            <h1 className="max-w-3xl text-[clamp(2.8rem,5.5vw,5.35rem)] font-medium leading-[0.98] tracking-[-0.075em] text-white">
              Tailored journeys for travelers who want more than a standard
              trip.
            </h1>
            <Link
              href="#destinations"
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-white py-2 pl-7 pr-2 text-base font-semibold text-[#101010] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span>Explore Destination</span>
              <ArrowButton />
            </Link>
          </section>

          <aside className="w-full rounded-[2rem] bg-white p-3 text-[#101010] shadow-2xl shadow-[#03122f]/35 sm:p-4 lg:mb-0">
            <div className="flex items-start gap-3 px-3 pb-5 pt-2 sm:px-4 sm:pt-3">
              <span className="mt-1 size-2.5 shrink-0 rounded-full bg-[#303bff]" />
              <div>
                <h2 className="text-lg font-medium tracking-[-0.04em]">
                  Plan your next vacation
                </h2>
                <p className="mt-1 max-w-sm text-sm leading-5 text-black/55 sm:text-base sm:leading-6">
                  Affordable tour packages, accommodations, and seamless booking
                  services
                </p>
              </div>
            </div>
            <div className="relative aspect-[1.56] overflow-hidden rounded-[1.35rem] bg-[#496d91]">
              <Image
                src={cardImage}
                alt="Traveler hiking through a mountain landscape"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover"
              />
              <button
                type="button"
                aria-label="Pause featured travel video"
                className="absolute bottom-4 right-4 flex size-14 items-center justify-center rounded-full bg-white text-lg font-bold text-black shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span aria-hidden="true">Ⅱ</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
