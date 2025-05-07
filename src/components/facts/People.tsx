export interface peopleProps {
  imgSrc: string;
  imgAlt: string;
  name: string;
  brief: string;
  order: boolean;
}

export const People = ({ imgSrc, imgAlt, name, brief, order }: peopleProps) => {
  return (
    <div className="mx-auto flex max-w-fit flex-col gap-8 md:flex-row lg:gap-20">
      <div className={`flex max-w-md ${order ? "md:order-1" : ""}`}>
        <img
          src={imgSrc}
          alt={imgAlt}
          width={900}
          height={750}
          className="aspect-square w-full rounded-2xl object-cover shadow-[0_30px_80px_-10px_rgba(0,0,0,0.7)]"
        />
      </div>
      <div className="max-w-[46ch] space-y-4">
        <h1 className="text-3xl text-gray-100 md:text-5xl lg:text-7xl">
          {name}
        </h1>
        <p>{brief}</p>
      </div>
    </div>
  );
};
