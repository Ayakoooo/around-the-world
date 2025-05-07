import { Link, useParams } from "react-router";
import { Container } from "../shared/Container";
import { useQuery } from "@tanstack/react-query";
import { CountryType } from "./Home";
import { FormEvent, useDeferredValue, useRef, useState } from "react";
import search from "../assets/search.svg";
import home from "../assets/home.svg";
import { Card } from "../components/CountryCard";
import Fuse from "fuse.js";

export const Region = () => {
  const { region } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: () =>
      fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,population",
      ).then((res) => res.json()),
    staleTime: 5 * 60 * 1000,
  });
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDeferredValue(query);
  const regionMap = (data ?? []).filter((country: CountryType) => {
    return country.region.toLowerCase() === region?.toLowerCase();
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.blur();
  };
  const options = {
    includeScore: true,
    keys: ["name.common"],
    threshold: 0.4,
  };
  const fuse = new Fuse(regionMap, options);
  const results = fuse.search(debouncedQuery);
  const filteredCountries = query
    ? results.map((result) => result.item)
    : regionMap;

  document.title = `ATW | ${region!.charAt(0).toUpperCase() + region!.slice(1)}`;

  return (
    <Container>
      <div className="sticky top-2 z-10 mb-4 flex items-center justify-between gap-4 rounded-lg p-4 shadow backdrop-blur-3xl">
        <div className="inline-flex items-center gap-4">
          <Link to={"/"} className="md:border-r md:pr-4">
            <img src={home} alt="" width={28} />
          </Link>
          <h1 className="hidden text-xl font-bold sm:block md:text-3xl">
            {region!.charAt(0).toUpperCase() + region!.slice(1)}
          </h1>
        </div>

        <div className="ml-auto inline-flex max-w-fit flex-1 gap-2">
          <form
            onSubmit={onSubmit}
            className="flex w-full max-w-none items-center gap-2 rounded-sm bg-white/50 p-2 shadow sm:max-w-xs"
          >
            <img src={search} alt="Search icon" className="border-r pr-2" />
            <input
              ref={inputRef}
              type="search"
              name="q"
              autoComplete="off"
              placeholder="Search by country name..."
              aria-label="Search by country name"
              aria-describedby="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              enterKeyHint="search"
              className="flex-1 outline-0"
              disabled={isLoading}
            />
            {query && (
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setQuery("")}
              >
                <span className="visually-hidden">Clear search</span>
                <span aria-hidden="true">X</span>
              </button>
            )}
          </form>
        </div>
      </div>
      {isLoading ? (
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex space-x-2">
            <div className="h-3 w-3 animate-bounce rounded-full bg-gray-600 [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-gray-600 [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-gray-600"></div>
          </div>
        </div>
      ) : filteredCountries.length === 0 ? (
        <div className="mt-10 flex min-h-screen items-start justify-center">
          <p className="text-md text-center text-gray-500 md:text-xl">
            Query doesn't match any country name
          </p>
        </div>
      ) : (
        <ul className="grid min-h-screen grid-cols-[repeat(auto-fill,_minmax(min(100%,_250px),_1fr))] place-content-start gap-4 px-2">
          {filteredCountries.map((country: CountryType) => (
            <Card
              key={country.name.official}
              imgSrc={country.flags.png}
              nameCommon={country.name.common}
              nameOfficial={country.name.official}
              population={country.population}
              region={country.region}
            />
          ))}
        </ul>
      )}
    </Container>
  );
};
