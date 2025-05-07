import { create } from "zustand";

interface FeaturesStore {
  inViewFeature: string | null;
  setInViewFeature: (feature: string | null) => void;
}

export const useFeaturesStore = create<FeaturesStore>((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature) => set({ inViewFeature: feature }),
}));
