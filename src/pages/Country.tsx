import { useParams } from "react-router";
import { Container } from "../shared/Container";
import { useQuery } from "@tanstack/react-query";
import { CountryType } from "./Home";
import info from "../assets/info.svg";
import notes from "../assets/notes.svg";
import { useEffect, useMemo, useState } from "react";
import { OverviewTab } from "../components/tabs/OverviewTab";
import { OtherTab } from "../components/tabs/OtherTab";

export interface ExtendedCountryType extends CountryType {
  capital: string[];
  subregion?: string;
  tld: string[];
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  borders: string[];
  cca3: string;
}

type Tab = "overview" | "other";

export const Country = () => {
  const { region, country } = useParams<string>();
  const { data, isLoading } = useQuery({
    queryKey: ["countries", country?.replace(/-/g, " ")],
    queryFn: () =>
      fetch(
        `https://restcountries.com/v3.1/name/${country?.replace(/-/g, " ")}?fields=name,flags,capital,region,subregion,population,tld,languages,currencies,borders`,
      ).then((res) => res.json()),
    staleTime: 10 * 60 * 1000,
  });
  const { data: allCountries } = useQuery({
    queryKey: ["allCountries"],
    queryFn: () =>
      fetch("https://restcountries.com/v3.1/all?fields=cca3,name").then((res) =>
        res.json(),
      ),
    staleTime: 10 * 60 * 1000,
  });
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const cca3NameMap = useMemo(() => {
    if (!allCountries) return {};
    return allCountries.reduce(
      (acc: Record<string, string>, country: ExtendedCountryType) => {
        acc[country.cca3] = country.name.common;
        return acc;
      },
      {},
    );
  }, [allCountries]);

  useEffect(() => {
    document.title = `ATW (${region!.charAt(0).toUpperCase() + region!.slice(1)}) | ${country!.charAt(0).toUpperCase() + country!.slice(1)}`;
  }, [country, region]);

  return (
    <Container>
      {isLoading ? (
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex space-x-2">
            <div className="h-3 w-3 animate-bounce rounded-full bg-gray-600 [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-gray-600 [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-gray-600"></div>
          </div>
        </div>
      ) : (
        <article className="min-h-screen">
          <section className="grid gap-20">
            {(data ?? []).map((country: ExtendedCountryType) => (
              <div key={country.name.common}>
                <div className="mx-auto mt-2 mb-4 flex max-w-2xl justify-between gap-4 rounded-xl bg-gray-100 p-1 text-sm font-medium text-gray-700 sm:mt-4 sm:mb-6 sm:text-base lg:mt-8 lg:mb-10">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`flex flex-1 place-content-center gap-2 rounded-lg px-4 py-2 transition-all duration-200 ${
                      activeTab === "overview"
                        ? "bg-white shadow-inner"
                        : "hover:bg-slate-200 hover:shadow-inner"
                    }`}
                  >
                    <img src={info} alt="" />
                    <span className="hidden sm:inline-block">Overview</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("other")}
                    className={`flex flex-1 place-content-center gap-2 rounded-lg px-4 py-2 transition-all duration-200 ${
                      activeTab === "other"
                        ? "bg-white shadow-inner"
                        : "hover:bg-slate-200 hover:shadow-inner"
                    }`}
                  >
                    <img src={notes} alt="" />
                    <span className="hidden sm:inline-block">Other</span>
                  </button>
                </div>

                {activeTab === "overview" && (
                  <>
                    <OverviewTab
                      key={country.name.common}
                      imgSrc={country.flags.png}
                      imgAlt={country.flags.alt}
                      officialName={country.name.common}
                      nativeName={country.name.official}
                      capital={country.capital}
                      population={country.population.toLocaleString()}
                    />
                  </>
                )}
                {activeTab === "other" && (
                  <>
                    <OtherTab
                      region={country.region}
                      subregion={country.subregion}
                      tld={country.tld.join(", ")}
                      languages={country.languages}
                      currencies={country.currencies}
                      borders={country.borders}
                      cca3NameMap={cca3NameMap}
                    />
                  </>
                )}
              </div>
            ))}
          </section>
        </article>
      )}
    </Container>
  );
};
