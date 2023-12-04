import TheBestDecisionSection from "@/components/templates/index/TheBestDecisionSection/TheBestDecisionSection";
import Estates from "@/components/templates/index/estates/estates";
import Features from "@/components/templates/index/features/features";
import Gallery from "@/components/templates/index/gallery/gallery";

function index({ data }) {
  return (
    <>
      {/* ویژگی ها */}
      <Features feature={data.feature} />
      {/* تعریف :) */}
      <TheBestDecisionSection />
      {/* املاک */}
      <Estates estate={data.estate} />
      {/* گالری */}
      <Gallery />
    </>
  );
}

export async function getStaticProps() {
  const featureResponse = await fetch("http://localhost:4001/Feature");
  const featureData = await featureResponse.json();

  const estateResponse = await fetch("http://localhost:4001/Estates");
  const estateData = await estateResponse.json();

  return {
    props: {
      data: {
        feature: featureData,
        estate: estateData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default index;
