import { motion } from "framer-motion";

export interface OtherTabProps {
  tld: string;
  subregion?: string;
  region: string;
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  borders: string[];
  cca3NameMap: Record<string, string>;
}

export const OtherTab = ({
  tld,
  region,
  subregion,
  languages,
  currencies,
  borders,
  cca3NameMap,
}: OtherTabProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-gradient-to-r from-[#f0f0f5] via-[#ffffff] to-[#e1e1e6] p-10 shadow-2xl backdrop-blur-xl"
    >
      <h1 className="text-center text-xl font-medium tracking-wider text-black uppercase md:text-2xl lg:text-3xl">
        More about the country
      </h1>

      <div className="mt-10 space-y-6 text-sm md:text-base lg:text-lg">
        <p className="text-gray-800">
          <span className="block font-semibold">Top Level Domain</span>
          <span className="text-gray-600">{tld}</span>
        </p>
        <p className="text-gray-800">
          <span className="block font-semibold">Region</span>
          <span className="text-gray-600">{region}</span>
        </p>
        <p className="text-gray-800">
          <span className="block font-semibold">Subregion</span>
          <span className="text-gray-600">{subregion ? subregion : "N/A"}</span>
        </p>
        <p className="text-gray-800">
          <span className="block font-semibold">Languages</span>
          <span className="text-gray-600">
            {languages && Object.keys(languages).length > 0
              ? Object.values(languages).join(", ")
              : "N/A"}
          </span>
        </p>
        <p className="text-gray-800">
          <span className="block font-semibold">Currencies</span>
          <span className="text-gray-600">
            {currencies && Object.keys(currencies).length > 0
              ? Object.entries(currencies)
                  .map(([, value]) => `${value.name} (${value.symbol})`)
                  .join(", ")
              : "N/A"}
          </span>
        </p>
        {borders && borders.length > 0 && (
          <div className="text-gray-800">
            <span className="block font-semibold">Border Countries</span>
            <div className="mt-1 flex flex-wrap gap-2 text-gray-600">
              {borders.map((code) => (
                <a
                  key={code}
                  href={`/regions/${region.toLowerCase()}/countries/${cca3NameMap[code]?.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded bg-gray-200 px-2 py-1 text-xs hover:bg-gray-300"
                >
                  {cca3NameMap[code]}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
