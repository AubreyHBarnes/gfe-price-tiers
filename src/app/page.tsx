import Image from "next/image";
import Toggle from "./components/Toggle";

export default function Home() {
  return (
    <div className="max-w-[1200px] m-auto grid items-center gap-12 justify-items-center p-4 md:p-8 pb-20 sm:p-20 font-[family-name:var(--font-noto-sans)]">
      <section className="intro-copy-container flex flex-col items-center gap-4">
        <h1 className="intro-subhead text-indigo-700 text-center font-semibold">Pricing Tiers</h1>
        <h2 className="intro-heading text-center text-3xl md:text-5xl font-semibold">Fit for all your needs</h2>
        <p className="intro-copy text-center max-w-[52ch] text-neutral-600">Pick the plan that suits you today and step up as your demands grow
           - our flexible options have your journey mapped out.</p>
      </section>
      <section className="feature-grid-container flex flex-col items-center gap-8">
        <Toggle />
      </section>
    </div>
  );
}
