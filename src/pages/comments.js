import Title from "@/components/modules/title/Title";
import CommentOfPropertyBuyers from "@/components/templates/comments/CommentOfPropertyBuyers/CommentOfPropertyBuyers";
import CommentOfPropertyTenants from "@/components/templates/comments/CommentOfPropertyTenants/CommentOfPropertyTenants";
import "swiper/css";

export default function comments({ data }) {
  return (
    <div className="m-11">
      <Title text="با افتخار کامنت های سایت" />
      <CommentOfPropertyBuyers data={data.commentsData} />
      <CommentOfPropertyTenants data={data.commentsData} />
    </div>
  );
}
export async function getStaticProps() {
  const commentsResponse = await fetch("http://localhost:4001/comments");
  const commentsData = await commentsResponse.json();

  return {
    props: {
      data: {
        commentsData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
