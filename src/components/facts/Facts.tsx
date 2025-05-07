import Slider from "react-slick";
import countriesFacts from "../../data/facts.json";

export function Facts() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="my-30 text-center lg:my-40" id="facts">
        <h1 className="mb-20 bg-gradient-to-r from-purple-500 via-violet-400 to-orange-400 bg-clip-text font-semibold tracking-wide text-transparent md:mb-40">
          WORLDWIDE FACTS
        </h1>

        <Slider {...settings}>
          {countriesFacts.map((fact, index) => (
            <div key={index} className="px-6 py-10">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-5xl">
                {fact.name}
              </h2>
              <blockquote className="text-lg leading-relaxed text-gray-500 italic lg:text-xl">
                “{fact.fact}”
              </blockquote>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}
