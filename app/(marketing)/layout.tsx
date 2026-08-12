import { SmoothScroll } from "./_components/smooth-scroll";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: inline script adds the JS marker class before paint, mirroring Webflow's w-mod-js gating
        dangerouslySetInnerHTML={{
          __html: "document.documentElement.classList.add('hero-js')",
        }}
      />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
}
