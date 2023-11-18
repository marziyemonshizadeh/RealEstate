import TheBestDecision from "@/components/TheBestDecision/TheBestDecision";
import Estate from "@/components/estate/estate";
import Feature from "@/components/feature/feature";
import Gallery from "@/components/gallery/gallery";
function index() {
  return (
    <>
      {/* ویژگی ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-16 mx-4">
        <Feature title=" بهترین خانه های لوکس جهان" />
        <Feature title="همه خانه ها در مکان های برتر " />
        <Feature title="خانه جدید در یک هفته" />
        <Feature title="فقط بهترین خواص" />
        <Feature title="پرداخت های ایمن در بعدی" />
        <Feature title=" 1% مشاوران املاک برتر" />
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
        <Estate img="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Minimalist-modern-home-interior-design-with-a-patio.jpeg" />
        <Estate img="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Minimalist-modern-home-interior-design-with-a-patio.jpeg" />
        <Estate img="https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/1627923147715-B3RH11DQ5LOYJ4DMNDSS/Bundy+Drive+Brentwood+spacious+modern+open+plan+mansion+interior+design" />
        <Estate img="https://www.eligasht.com/Blog/wp-content/uploads/2022/08/Coastal-cities-world.jpg" />
        <Estate img="https://img.freepik.com/premium-photo/real-estate-dream-home_839035-11884.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699488000&semt=ais" />
        <Estate img="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Minimalist-modern-home-interior-design-with-a-patio.jpeg" />
      </div>
      <Gallery />
    </>
  );
}

export default index;
