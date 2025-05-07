import { motion } from "framer-motion";

interface Props {
  imgSrc: string;
  imgAlt: string;
  officialName: string;
  nativeName: string;
  population: number | string;
  capital: string[];
}

export const OverviewTab = ({
  imgSrc,
  imgAlt,
  officialName,
  nativeName,
  capital,
  population,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto grid max-w-xl gap-6 rounded-3xl bg-gradient-to-r from-[#f0f0f5] via-[#ffffff] to-[#e1e1e6] p-10 text-black shadow-2xl backdrop-blur-xl"
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className="aspect-video w-full rounded-2xl object-cover shadow-lg"
      />
      <div className="max-w- space-y-4">
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          {officialName}
        </h2>
        <p className="text-gray-800">
          <span className="block font-semibold">Capital</span>
          <span className="text-gray-600">
            {capital && Array.isArray(capital) && capital.length > 1
              ? capital.join(", ")
              : capital?.[0] || "N/A"}
          </span>
        </p>
        <p className="text-gray-800">
          <span className="block font-semibold">Native Name</span>
          <span className="text-gray-600">{nativeName}</span>
        </p>
        <p className="text-gray-800">
          <span className="block font-semibold">Population</span>
          <span className="text-gray-600">{population}</span>
        </p>
      </div>
    </motion.div>
  );
};
