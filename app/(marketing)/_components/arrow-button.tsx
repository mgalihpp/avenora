import { ArrowRight } from "lucide-react";

export function ArrowButton() {
  return (
    <span className="flex size-10 items-center justify-center rounded-full bg-[#2739ff] text-xl leading-none text-white transition-transform duration-300 group-hover:translate-x-0.5">
      <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.8} />
    </span>
  );
}
