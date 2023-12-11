import Deatails from "@/components/templates/home/[id]/deatails/deatails";
import Description from "@/components/templates/home/[id]/description/description";

function HomeDetails({ data }) {
  return (
    <div className="m-5">
      <Deatails estate={data} />
      <Description />
    </div>
  );
}
//ssr
export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4001/Estates/${params.id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default HomeDetails;
