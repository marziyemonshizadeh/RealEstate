import TheBestDecision from "@/components/TheBestDecision/TheBestDecision";
import Estate from "@/components/estate/estate";
import Feature from "@/components/feature/feature";
import Gallery from "@/components/gallery/gallery";
function index() {
  return (
    <>
      {/* ویژگی ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 m-10">
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
      <div className="m-8 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4">
        <Estate img="https://img6.arthub.ai/649a1aec-e125.webp" />
        <Estate img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f82a9e1-964e-4fcd-b2bf-ffbd3026d8f6/dfac9k3-deffad0f-7b0f-4213-8fad-dfaf942c0b96.png/v1/fill/w_1280,h_1049,q_80,strp/jungle_house_by_jeffzegom_dfac9k3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRmODJhOWUxLTk2NGUtNGZjZC1iMmJmLWZmYmQzMDI2ZDhmNlwvZGZhYzlrMy1kZWZmYWQwZi03YjBmLTQyMTMtOGZhZC1kZmFmOTQyYzBiOTYucG5nIiwiaGVpZ2h0IjoiPD0xMDQ5Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNGY4MmE5ZTEtOTY0ZS00ZmNkLWIyYmYtZmZiZDMwMjZkOGY2XC9qZWZmemVnb20tNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.rCSO10uyhRXPdOQDB89fa5vtZNZ5Vakwv5OMAXfquHI" />
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
