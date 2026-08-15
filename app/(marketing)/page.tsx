import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "./_components/arrow-button";
import { HeroAnimation } from "./_components/hero-animation";
import { HeroVideo } from "./_components/hero-video";
import { MobileNav } from "./_components/mobile-nav";
import { TravoraIntro } from "./_components/travora-intro";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "Destination", href: "#destinations", active: false },
  { label: "Package", href: "#packages", active: false },
  { label: "Contact", href: "#contact", active: false },
];

export default function Home() {
  return (
    <>
      <main className="relative min-h-svh overflow-hidden bg-[#081d3c] text-white">
        <div className="absolute inset-0">
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
            className="absolute inset-x-0 top-0 h-[48%] bg-[linear-gradient(115deg,rgba(33,55,213,0.9)_0%,rgba(58,149,225,0.58)_44%,rgba(72,205,216,0.62)_100%)] [mask-image:linear-gradient(to_bottom,black_42%,transparent_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,44,151,0.1)_7%,rgba(11,48,101,0.08)_38%,rgba(3,18,50,0.88)_100%)]"
          />
        </div>

        <div
          data-hero-anim="title"
          aria-hidden="true"
          className="reference-hero-title absolute left-1/2 top-[15vh] z-[1] w-full -translate-x-1/2 select-none whitespace-nowrap bg-[linear-gradient(185deg,#fff_50.59%,#9990_90%)] bg-clip-text text-center text-transparent min-[992px]:top-[14vh]"
        >
          Travelo
        </div>

        <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[82rem] flex-col px-4 pb-8 pt-6 sm:px-4 sm:pt-8">
          <header className="relative flex items-center justify-between gap-5">
            <Link
              href="/"
              className="font-display text-2xl font-semibold leading-[1.2] text-white transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Avenora
            </Link>

            <nav
              aria-label="Main navigation"
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-white/10 p-1 backdrop-blur-md min-[992px]:flex"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`reference-navlink ${item.active ? "reference-navlink-active" : ""} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="#destinations"
              className="group hidden items-center gap-6 rounded-full bg-white p-2 pl-8 font-display text-base font-semibold text-black transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white min-[992px]:flex"
            >
              <span>Start Exploring</span>
              <ArrowButton />
            </Link>

            <MobileNav items={navItems} />
          </header>

          <div className="flex flex-col items-center gap-[1.5rem] pt-[22vh] min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:gap-7 min-[768px]:items-end min-[768px]:gap-10 min-[768px]:pt-[18vh] lg:gap-16 lg:pt-[42vh]">
            <section className="min-w-0 max-w-[37rem]">
              <h1
                data-hero-anim="heading"
                className="reference-hero-heading text-white"
              >
                Tailored journeys for travelers who want more than a standard
                trip.
              </h1>
              <Link
                data-hero-anim="button"
                href="#destinations"
                className="group mt-6 inline-flex items-center gap-6 rounded-full bg-white p-2 pl-8 font-display text-base font-semibold text-black transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white max-[479px]:mt-4"
              >
                <span>Explore Destination</span>
                <ArrowButton />
              </Link>
            </section>

            <aside
              data-hero-anim="card"
              className="flex w-full flex-col items-center gap-4 rounded-[1.6rem] bg-white px-3 pb-3 pt-7 font-display text-black shadow-2xl shadow-[#03122f]/35 min-[480px]:w-auto min-[480px]:max-w-64 min-[768px]:max-w-[22rem] min-[992px]:max-w-[25.5rem] max-[991px]:rounded-[1.5rem] max-[767px]:pt-[1.125rem]"
            >
              <div className="flex flex-col items-center gap-2 text-center max-[767px]:px-2">
                <div className="flex items-center gap-3">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#303bff]" />
                  <h2 className="text-xl font-medium leading-[1.2]">
                    Plan your next vacation
                  </h2>
                </div>
                <p className="max-w-[20rem] text-base font-normal leading-[1.4] text-black/60">
                  Affordable tour packages,accommodations, and seamless booking
                  services
                </p>
              </div>
              <div className="relative h-[18.9375rem] w-full max-w-[24.125rem] overflow-hidden rounded-[1.25rem] bg-[#496d91] max-[991px]:h-[17rem] max-[767px]:h-48 max-[479px]:h-[17rem] max-[479px]:max-w-none">
                <HeroVideo />
              </div>
            </aside>
          </div>
        </div>
        <HeroAnimation />
      </main>
      <TravoraIntro />
    </>
  );
}
