import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useFeaturesStore } from "./store";

interface Props {
  children: React.ReactNode;
  id: string;
}

export const FeatureTitle = ({ children, id }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewFeature = useFeaturesStore((state) => state.setInViewFeature);
  const inViewFeature = useFeaturesStore((state) => state.inViewFeature);

  useEffect(() => {
    const el = ref.current;
    const handleFocus = () => {
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    el?.addEventListener("focus", handleFocus);

    return () => el?.removeEventListener("focus", handleFocus);
  }, []);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      tabIndex={0}
      ref={ref}
      className={`py-10 text-5xl transition-colors ${isInView ? "text-gray-800" : "text-gray-300"} outline-0`}
    >
      {children}
    </p>
  );
};
