export default function Header() {
  return (
    <div className="grid grid-cols-4 grid-flow-col">
      <div className="col-span-4 md:col-span-3 bg-slate-200 leading-10 py-5">
        <div className="pr-24">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/495/230/original/real-estate-logo-1-free-png.png"
            alt="real-estate-logo"
            className="w-36 mx-auto"
          />
          <p className="font-extrabold text-3xl my-4">خانه خودتان:</p>
          <h1 className="font-extrabold text-3xl text-slate-700 my-2">
            با خرید خانه نهایت آزادی را احساس کنید
          </h1>
          <div className="after:content-['-------------------------------------------------------'] before:content-['-------------------------------------------------------']">
            دیده می شود در
          </div>
          <button class="rounded-none bg-indigo-950 text-white px-2 my-2 hover:bg-indigo-900">
            املاک ما را مشاهده کنید
          </button>
        </div>
        <div className="flex flex-row justify-center gap-24">
          <img
            src="https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_techcrunch_icon_157779.png"
            alt="techcrunch"
            className="w-24"
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/Forbes-logo.png"
            alt="forbes"
            className="w-24"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Business_Insider_Logo.svg/1280px-Business_Insider_Logo.svg.png"
            alt="Business_Insider"
            className="w-28"
          />
          <img
            src="https://logohistory.net/wp-content/uploads/2023/02/BBC-Logo.png"
            alt="bbc"
            className="w-28"
          />
        </div>
      </div>
      <div className="col-span-4 md:col-span-1 bg-slate-900 text-slate-100 flex flex-col justify-center items-center py-5">
        <p>سه مالک برتر</p>
        {/* 1 */}
        <div className="flex justify-center items-center gap-2 my-2">
          <img
            src="https://www.lense.fr/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
            alt="gentelmen"
            className="rounded-full max-h-16"
          />
          <div className="text-center">
            <p>مهدی ایلخانی نسب</p>
            <sub>869 فروش خانه</sub>
          </div>
        </div>
        {/* 1 */}
        <div className="flex justify-center items-center gap-2 my-2">
          <img
            src="https://www.lense.fr/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
            alt="gentelmen"
            className="rounded-full max-h-16"
          />
          <div className="text-center">
            <p>مهدی ایلخانی نسب</p>
            <sub>869 فروش خانه</sub>
          </div>
        </div>
        {/* 1 */}
        <div className="flex justify-center items-center gap-2 my-2">
          <img
            src="https://www.lense.fr/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
            alt="gentelmen"
            className="rounded-full max-h-16"
          />
          <div className="text-center">
            <p>مهدی ایلخانی نسب</p>
            <sub>869 فروش خانه</sub>
          </div>
        </div>
      </div>
    </div>
  );
}
