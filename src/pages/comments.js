import Comment from "@/components/modules/comment/comment";
import Title from "@/components/modules/title/Title";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function comments({ data }) {
  return (
    <div className="m-11">
      <Title text="با افتخار کامنت های سایت" />
      <p className="title md:ms-4 ms-2 m-5">نظرات خریداران ملک</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slider1 change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        {data.commentsData
          .filter((i) => i.type === "kharid")
          .map((i) => {
            return (
              <SwiperSlide key={i.id}>
                <Comment {...i} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <p className="title md:ms-4 ms-2 m-5">نظرات اجاره کنندگان ملک</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slider1 change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        {data.commentsData
          .filter((i) => i.type === "ejare")
          .map((i) => {
            return (
              <SwiperSlide key={i.id}>
                <Comment {...i} />
              </SwiperSlide>
            );
          })}
      </Swiper>
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
