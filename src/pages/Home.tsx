import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { CountryRegion } from "../components/CountryRegion";
import { Hero } from "../components/Hero";
import { Container } from "../shared/Container";
import { Card } from "../components/CountryCard";
import { Facts } from "../components/facts/Facts";
// import { People, peopleProps } from "../components/facts/People";
// import historicalPeople from "../data/historical-people.json";
import Slider, { LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface CountryType {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    alt: string;
  };
  region: string;
  population: number;
  cca3?: string;
}

interface ArrowProps {
  direction: string;
  onClick?: () => void;
}

const CustomArrow = ({ direction, onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 z-5 -translate-y-1/2 transform cursor-pointer rounded-full bg-black/60 p-2 backdrop-blur transition ${
      direction === "left" ? "-left-2 2xl:-left-10" : "-right-2 2xl:-right-10"
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="h-5 w-5"
    >
      {direction === "left" ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  </button>
);

export const Home = () => {
  useEffect(() => {
    document.title = "Around the World";
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: () =>
      fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,population",
      ).then((res) => res.json()),
    staleTime: 5 * 60 * 1000,
  });

  // Group countries by region dynamically
  const groupedByRegion = useMemo(() => {
    return (data ?? []).reduce(
      (acc: Record<string, CountryType[]>, country: CountryType) => {
        const { region } = country;
        if (!acc[region]) {
          acc[region] = [];
        }
        acc[region].push(country);
        return acc;
      },
      {} as Record<string, CountryType[]>,
    );
  }, [data]);

  return (
    <main>
      <Container>
        <Hero />
        <article>
          {isLoading ? (
            <div className="flex min-h-screen items-center justify-center">
              <div className="flex space-x-2">
                <div className="h-3 w-3 animate-bounce rounded-full bg-gray-600 [animation-delay:-0.3s]"></div>
                <div className="h-3 w-3 animate-bounce rounded-full bg-gray-600 [animation-delay:-0.15s]"></div>
                <div className="h-3 w-3 animate-bounce rounded-full bg-gray-600"></div>
              </div>
            </div>
          ) : (
            <>
              {Object.keys(groupedByRegion).map((region) => (
                <section className="relative" key={region}>
                  <CountryRegion title={region} />
                  <div className="slider-container">
                    <Slider {...settings}>
                      {groupedByRegion[region].map((country: CountryType) => (
                        <Card
                          key={country.name.common}
                          imgSrc={country.flags.png}
                          imgAlt={country.flags.alt}
                          nameCommon={country.name.common}
                          nameOfficial={country.name.official}
                          population={country.population}
                          region={country.region}
                        />
                      ))}
                    </Slider>
                  </div>
                </section>
              ))}
              <Facts />
            </>
          )}
        </article>
      </Container>
      {/* <section className="s bg-[#1d1d1f] py-30 text-gray-400 lg:py-40">
        <Container>
          <h1 className="mb-20 bg-gradient-to-br from-[#FFD700] via-[#FF8C00] to-[#FF4500] bg-clip-text text-center text-transparent uppercase md:mb-40">
            Historical Icons
          </h1>

          <div className="grid gap-10">
            {historicalPeople.map((person: peopleProps) => (
              <People
                key={person.name}
                imgSrc={person.imgSrc}
                imgAlt={person.imgAlt}
                name={person.name}
                brief={person.brief}
                order={person.order}
              />
            ))}
          </div>
        </Container>
      </section> */}
    </main>
  );
};
