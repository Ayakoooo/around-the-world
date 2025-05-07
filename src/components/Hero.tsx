import facts from "../assets/facts.svg";
import hero from "../assets/hero-bg.png";

export const Hero = () => {
  return (
    <article className="mb-20 flex flex-col items-center justify-between gap-y-10 text-center md:flex-row md:text-left">
      <section className="grid gap-8">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Explore the World <br /> One Country at a Time
        </h1>
        <p className="max-w-[60ch] text-balance md:text-lg">
          Dive into detailed insights, stunning visuals, and rich data on every
          nation. Discover regions, learn histories, and plan your next global
          journey—all in one place.
        </p>
        <a
          href="#facts"
          className="mx-auto inline-flex max-w-fit items-center gap-2 rounded-sm bg-black p-2 text-white md:mx-0"
        >
          <img src={facts} alt="" />
          <span>Explore </span>
        </a>
      </section>
      <section>
        <img
          src={hero}
          alt=""
          className="rotate-animation pointer-events-none w-full max-w-96 grayscale-100 select-none"
        />
      </section>
    </article>
  );
};
