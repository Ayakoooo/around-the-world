import { Link } from "react-router";
import gallery from "../assets/gallery.svg";

interface Props {
  title: string;
}
export const CountryRegion = ({ title }: Props) => {
  return (
    <div className="sticky top-1 z-10 mb-4 inline-flex w-full items-center justify-between gap-4 rounded-lg px-4 py-4 shadow backdrop-blur-3xl">
      <h1 className="text-xl font-bold md:text-3xl">{title}</h1>
      <Link to={`regions/${title.toLowerCase()}`}>
        <img src={gallery} alt="Gallery view" />
      </Link>
    </div>
  );
};
