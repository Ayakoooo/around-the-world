import {
  FChatGPT,
  FFramerMotion,
  FFusejs,
  FGitHub,
  FReact,
  FRESTAPI,
  FTailwindCSS,
} from "../components/features/FeatureCard";
import { FeatureTitle } from "../components/features/FeatureTitle";
import { Container } from "../shared/Container";

document.title = "ATW | About";

const features = [
  {
    id: "react",
    title: "React",
    card: FReact,
  },
  {
    id: "tailwindcss",
    title: "TailwindCSS",
    card: FTailwindCSS,
  },
  {
    id: "github",
    title: "GitHub",
    card: FGitHub,
  },
  {
    id: "framer-motion",
    title: "Framer Motion",
    card: FFramerMotion,
  },

  {
    id: "chatgpt",
    title: "ChatGPT",
    card: FChatGPT,
  },

  {
    id: "restapi",
    title: "REST API",
    card: FRESTAPI,
  },
  {
    id: "fusejs",
    title: "Fuse.js",
    card: FFusejs,
  },
];

export const About = () => {
  return (
    <main className="bg-[#f5f5f7] font-sans text-[#1d1d1f]">
      <Container>
        <article className="mx-auto max-w-6xl py-12">
          <h1 className="mb-8 text-5xl font-semibold tracking-tight">About</h1>
          <p className="mb-8 text-lg leading-relaxed text-slate-600 sm:text-xl">
            This website offers an interactive and streamlined way to explore
            all 195 countries, allowing you to browse by region, search for
            specific countries, and dive into detailed information about each
            one. Whether you're a curious traveler, a geography enthusiast, or a
            student, Around The World provides an engaging interface to learn
            about different nations. From population and capital cities to
            regional placement and other essential facts, each country profile
            is designed to give you a clear and concise overview. The site also
            features dynamic search and filtering tools, so you can easily
            narrow down countries by continent or region — whether you’re
            looking to learn more about the nations of Africa, explore the
            diversity of Asia, or understand the countries that make up Europe
            and beyond. This project is open-source and built with care to
            combine usability with educational value. You can view, contribute
            to, or fork the code on{" "}
            <a
              href="https://github.com/Ayakoooo"
              target="_blank"
              className="inline-flex items-center gap-1 align-top text-slate-800 underline"
            >
              <img
                src="./assets/github.svg"
                alt=""
                className="aspect-square w-6"
              />
              <span>my GitHub account</span>
            </a>
            , where the entire project is maintained and regularly updated.
          </p>
          <p className="text-center text-base tracking-wide text-gray-500 uppercase">
            Website was built with:
          </p>
        </article>

        <article className="flex w-full items-start gap-20 px-4 lg:px-0">
          <section className="w-full sm:py-[50vh]">
            <ul className="space-y-16">
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                </li>
              ))}
            </ul>
          </section>

          <section className="sticky top-0 hidden h-screen w-full items-center sm:flex">
            <div className="relative aspect-square w-full rounded-3xl bg-[#e5e5ea] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              {features.map((feature) => (
                <feature.card id={feature.id} key={feature.id} />
              ))}
            </div>
          </section>
        </article>
        <p className="text-center sm:hidden">
          For a better animation experience, visit my website on a desktop!
        </p>
      </Container>
    </main>
  );
};
