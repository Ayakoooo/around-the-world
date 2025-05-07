import React from "react";
import { useFeaturesStore } from "./store";

interface FeatureCardProps {
  gradient: string;
  children: React.ReactNode;
  id: string;
}

interface CardProps {
  id: string;
}

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeaturesStore((state) => state.inViewFeature);
  return (
    <div
      className={`absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br p-6 shadow-md transition-opacity duration-500 ease-in-out ${gradient} ${
        inViewFeature === id ? "z-10 opacity-100" : "z-0 opacity-0"
      } pointer-events-none`}
    >
      {children}
    </div>
  );
};

export const FReact = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5f7fa] via-[#c3cfe2] to-[#e2ebf0]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <img
          src="../../src/assets/react.svg"
          alt=""
          className="aspect-square w-40"
        />
        <span className="block text-xl font-medium">
          Built with React for a modular and efficient component-based
          structure.
        </span>
      </div>
    </FeatureCard>
  );
};

export const FFramerMotion = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fdfbfb] via-[#ebedee] to-[#dfe9f3]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <img
          src="../src/assets/framer.svg"
          alt=""
          className="aspect-square w-40"
        />
        <span className="block text-xl font-medium">
          Framer Motion powers the smooth and elegant animations across the
          interface.
        </span>
      </div>
    </FeatureCard>
  );
};

export const FTailwindCSS = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#d0eafc] via-[#f7e8ff] to-[#ffe3e3]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <img
          src="../src/assets/tailwind.svg"
          alt=""
          className="aspect-square w-40"
        />
        <span className="block text-xl font-medium">
          Tailwind CSS enables rapid and consistent styling with utility-first
          classes.
        </span>
      </div>
    </FeatureCard>
  );
};

export const FChatGPT = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#e8f0fe] via-[#fbefff] to-[#fff9f0]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <img
          src="../../src/assets/chatgpt.svg"
          alt=""
          className="aspect-square w-40"
        />
        <span className="block text-xl font-medium">
          ChatGPT helped brainstorm ideas, refine content, and streamline code
          logic.
        </span>
      </div>
    </FeatureCard>
  );
};

export const FGitHub = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f1f2f6] via-[#d3d8e0] to-[#e4ebf5]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <img
          src="../src/assets/github.svg"
          alt=""
          className="aspect-square w-40"
        />
        <span className="block text-xl font-medium">
          Version control and collaboration are powered by GitHub’s robust
          tooling.
        </span>
        <a
          href="https://github.com/Ayakoooo"
          target="_blank"
          className="pulsing pointer-events-auto inline-flex items-center gap-2 rounded-sm bg-black px-4 py-2 text-lg font-semibold text-white transition-all duration-300 hover:text-slate-100"
        >
          <span>GitHub</span>
          <img src="../src/assets/open.svg" alt="" />
        </a>
      </div>
    </FeatureCard>
  );
};

export const FRESTAPI = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#cfd9df] via-[#e2ebf0] to-[#fefefe]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <img
          src="../../src/assets/api.svg"
          alt=""
          className="aspect-square w-40"
        />
        <span className="block text-xl font-medium">
          RESTful APIs fetch up-to-date country data and enable dynamic
          interactions.
        </span>
      </div>
    </FeatureCard>
  );
};

export const FFusejs = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fefefe] via-[#eaeaea] to-[#dcdcdc]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <img
          src="../src/assets/fusejs.png"
          alt=""
          className="aspect-square w-40"
        />
        <span className="block text-xl font-medium">
          Fuse.js delivers lightning-fast fuzzy search functionality for
          countries and regions.
        </span>
      </div>
    </FeatureCard>
  );
};
