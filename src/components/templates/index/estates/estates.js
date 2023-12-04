import Estate from "@/components/modules/estate/estate";

export default function Estates({ estate }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 place-items-center gap-y-8 my-16">
      {estate?.slice(0, 6).map((estate) => {
        return <Estate key={estate.id} {...estate} />;
      })}
    </div>
  );
}
