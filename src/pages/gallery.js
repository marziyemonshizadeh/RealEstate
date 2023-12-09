import Title from "@/components/modules/title/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function gallery({ data }) {
  return (
    <div className="m-5">
      <Title text="ویلاهای موجود" />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slider1 change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        {data.galleries
          .filter((i) => i.type === "villa")
          .map((i) => {
            return (
              <SwiperSlide key={i.id}>
                <img src={i.img} alt={i.type} />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <Title text="آپارتمان های موجود" />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        {data.galleries
          .filter((i) => i.type === "apartment")
          .map((i) => {
            return (
              <SwiperSlide key={i.id}>
                <img src={i.img} alt={i.type} />
              </SwiperSlide>
            );
          })}
      </Swiper>
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
