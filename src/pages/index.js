import Estate from "@/components/modules/estate/estate";
import Feature from "@/components/modules/feature/feature";
import TheBestDecision from "@/components/templates/index/TheBestDecision/TheBestDecision";
import Gallery from "@/components/templates/index/gallery/gallery";
import { useEffect, useState } from "react";

function index() {
  const [estate, setEstate] = useState([]);
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/Estates")
      .then((res) => res.json())
      .then((estate) => setEstate(estate));
    fetch("http://localhost:4001/Feature")
      .then((res) => res.json())
      .then((feature) => setFeature(feature));
  }, []);
  return (
    <>
      {/* ویژگی ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-16 mx-4">
        {feature.map((feature) => {
          return (
            <Feature key={feature.id} {...feature}>
              {feature.description}
            </Feature>
          );
        })}
      </div>
      {/* تعریف :) */}
      <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1  grid-flow-cols">
        <div className="col-span-2 bg-indigo-950 h-96 flex justify-center items-center">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/623895203d240dfa0b8590a6/newly-built-luxury-home-in-the-san-fernando-valley-located-at-3369-Alana-Dr/960x0.jpg?format=jpg&width=960"
            alt="simplehouse"
            className="max-w-sm  rounded-lg"
          />
        </div>
        <TheBestDecision />
      </div>
      {/* املاک */}
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 place-items-center gap-y-8 my-16">
        {estate.slice(0, 6).map((estate) => {
          return <Estate key={estate.id} {...estate} />;
        })}
      </div>
      <Gallery />
    </>
  );
}

export default index;
