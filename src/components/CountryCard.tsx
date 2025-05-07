import { Link } from "react-router";
import { OtherTabProps } from "./tabs/OtherTab";

interface CardProps {
  imgSrc: string;
  imgAlt?: string;
  nameCommon: string;
  nameOfficial: string;
  population: number;
  region: string;
  languages?: OtherTabProps;
  currencies?: OtherTabProps;
  cca3?: string;
}

export const Card = ({
  imgSrc,
  imgAlt,
  nameCommon,
  nameOfficial,
  population,
  region,
  cca3,
}: CardProps) => {
  return (
    <div className="my-4 min-w-[250px] rounded-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-[length:200%_200%] bg-right p-4 font-light shadow-lg transition-all duration-300 group-hover:opacity-40 hover:scale-105 hover:from-blue-100 hover:via-purple-200 hover:to-pink-200 hover:bg-left">
      <div className="mb-4 flex w-full">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="aspect-video w-full rounded-md object-cover"
          width={320}
          height={320}
        />
      </div>
      <div>
        <Link
          to={`/regions/${region.toLowerCase()}/countries/${nameCommon.toLowerCase().replace(/\s+/g, "-")}`}
          className="mb-2 block"
          tabIndex={-1}
        >
          <h2 className="cursor-pointer truncate text-xl">{nameCommon}</h2>
        </Link>

        <p className="truncate text-sm font-semibold text-gray-900">
          Native Name:{" "}
          <span className="font-normal text-gray-600">{nameOfficial}</span>
        </p>
        <p className="text-sm font-semibold text-gray-900">
          Population:{" "}
          <span className="font-normal text-gray-600">
            {population.toLocaleString()}
          </span>
        </p>
        <p>{cca3}</p>
        <Link to={`/regions/${region.toLowerCase()}`} tabIndex={-1}>
          <p className="mt-4 inline-block rounded-sm bg-neutral-800/80 px-3 py-1 text-xs font-medium tracking-wide text-white uppercase shadow-md backdrop-blur-sm">
            {region}
          </p>
        </Link>
      </div>
    </div>
  );
};
