import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function HomeDetails() {
  const router = useRouter();
  const { id: homeID } = router.query;
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4001/Estates/`)
      .then((res) => res.json())
      .then((homes) => setHomes(homes));
  }, []);
  console.log(homes);
  const mainHome = homes.find((home) => home.id === Number(homeID));
  console.log(mainHome);
  return (
    <div className="m-5">
      <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-1 grid-flow-cols">
        <img
          src={mainHome?.img}
          alt="111"
          className="xl:col-span-2 md:col-span-2 grid-cols-1"
        />
        <div className="xl:col-span-4 md:col-span-2 grid-cols-1 mx-2 leading-10">
          <div className="flex justify-between my-2">
            <p> فروشنده : {mainHome?.Seller} </p>
            <p>{mainHome?.price} تومان</p>
          </div>
          {/* badges */}
          <section className="inline-block bg-lime-400 px-2  ml-1 rounded">
            ویژه
          </section>
          <section className="inline-block bg-red-400 px-2  mr-1 rounded">
            برای اجاره
          </section>
          {/* address */}
          <p>
            <span className="font-bold  text-slate-500"> آدرس : </span>
            {mainHome?.address}
          </p>
          <p>
            <span className="font-bold  text-slate-500">شماره تماس : </span>
            {mainHome?.phoneNumber}
          </p>
          <div className="flex justify-between my-2 py-2 border-b-2 border-gray-300">
            <p>مرور کلی</p>
            <p>
              <span className="font-bold  text-slate-500"> کد ملک : </span>
              hz-HZ15
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="font-bold  text-slate-500">نوع ملک: </span>
              {mainHome?.title}
            </div>
            <div>
              <span className="font-bold  text-slate-500">اتاق : </span>
              {mainHome?.roomCount}
            </div>
            <div>
              <span className="font-bold  text-slate-500">متراژ : </span>
              {mainHome?.meterage}
            </div>
            <div>
              <span className="font-bold  text-slate-500">سال ساخت : </span>
              1402
            </div>
          </div>
        </div>
      </div>
      {/* description */}
      <h2 className="border-b-2 border-gray-300 p-2 font-bold  text-slate-500">
        توضیحات
      </h2>
      <p className="p-2 leading-7">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
        رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. مشاوران
        دوطرفه به خریدار و فروشنده مشاوره می‌دهند. یک مشاور املاک وظیفه دارد که
        با صداقت به هر دو طرف معامله مشاوره و راهنمایی درستی بدهد. مشاوران
        دوطرفه باید از هر دو طرف چه فروشنده و چه خریدار بخواهند که یک قرارداد
        نمایندگی دوطرفه را امضا کنند. قوانین و مقررات خاصی برای مشاوران دوطرفه
        وجود دارد، این دست از مشاوران نسبت به دو دسته قبل کارشان سخت‌تر و
        پیچیده‌تر است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
        ستون و سطرآنچنان که لازم است.
      </p>
    </div>
  );
}

export default HomeDetails;
