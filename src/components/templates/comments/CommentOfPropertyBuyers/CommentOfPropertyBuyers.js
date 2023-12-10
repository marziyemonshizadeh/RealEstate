import Comment from "@/components/modules/comment/comment";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CommentOfPropertyBuyers({ data }) {
  return (
    <>
      <p className="title md:ms-4 ms-2 m-5">نظرات خریداران ملک</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slider1 change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        {data
          .filter((i) => i.type === "kharid")
          .map((i) => {
            return (
              <SwiperSlide key={i.id}>
                <Comment {...i} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
