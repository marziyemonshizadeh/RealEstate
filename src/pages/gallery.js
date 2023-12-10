import AvailableApartment from "@/components/templates/gallery/AvailableApartment/AvailableApartment";
import AvailableVillas from "@/components/templates/gallery/AvailableVillas/AvailableVillas";

export default function gallery({ data }) {
  return (
    <div className="m-5 my-14">
      <AvailableVillas data={data.galleries} />
      <AvailableApartment data={data.galleries} />
    </div>
  );
}
export async function getStaticProps() {
  const galleryResponse = await fetch("http://localhost:4001/gallery");
  const galleryData = await galleryResponse.json();

  return {
    props: {
      data: {
        galleries: galleryData,
      },
    },
  };
}
