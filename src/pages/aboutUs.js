import Information from "@/components/information/information";

// import "@/styles/aboutUs.module.css";
export default function aboutUs() {
  return (
    <>
      <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1  grid-flow-cols p-5">
        <div className="xl:col-span-2 md:col-span-2 grid-cols-1  leading-10 py-5">
          <img
            src="https://cdn.nody.ir/files/2021/09/25/nody-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D8%A7-%D8%AF%D8%B1-%D8%A7%DB%8C%D9%86%D8%B3%D8%AA%D8%A7%DA%AF%D8%B1%D8%A7%D9%85-1632559112.png"
            alt="about me"
          />
        </div>
        <div className="xl:col-span-2 md:col-span-2 grid-cols-1  leading-10 py-5 flex items-center">
          ایدهٔٔ اولیه راه‌اندازی نرم‌افزار انتشار کتاب الکترونیکی در زمستان
          ۱۳۹۱ در شرکت «حصین‌همراه» مطرح شد. نام نسخه صفر طاقچه که در پاییز سال
          ۱۳۹۲ منتشر شد «کتاب من» بود. بهار ۱۳۹۳ در همایش ملی «کتاب الکترونیک»
          در دانشگاه تهران، این اپلیکیشن به صورت رسمی و با نام «طاقچه» رونمایی
          شد. در سال ۱۳۹۷ امکان کتابخانه همگانی با نام «طاقچه بی‌نهایت» توسعه
          پیدا کرد که به کاربران اجازه می‌دهد با خرید اشتراک در مدت محدود به
          تمام کتاب‌های این بخش دسترسی داشته باشند
        </div>
      </div>
      <div className="bg-indigo-950 text-slate-50 text-center p-12">
        <h2 className="font-bold text-2xl py-5">شبکه همکاری فروش املاک</h2>
        <p className="text-lg leading-10">
          یکی از بزرگترین چالش‌های بازار املاک در ایران، عدم وجود فضای قابل
          اطمینان برای همکاری بین دفاتر املاک هست. 2نبش تلاش می‌کنه تا این شبکه
          همکاری رو بین مشاورین ایجاد کنه. فقط مشاورین املاکی رو که از کیفیت و
          سابقه خوبی برخوردار هستند به شبکه اضافه می‌کنه و با استفاده از
          ابزارهایی که در اختیار داره، فضای مطمئنی رو برای همکاری ایجاد می‌کنه
        </p>
      </div>
      <div className="p-5 my-5">
        <p className="text-center font-bold text-2xl">خدمات ما</p>
        <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-2 place-items-center my-10">
          <div className="flex flex-col items-center">
            <div className="bg-slate-200 w-24 h-24 p-7 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <p className="text-slate-500 py-2">ساخت ویلا</p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-slate-500 bg-slate-200 w-24 h-24 p-8 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
              />
            </svg>

            <p className="text-slate-500 py-2">بازسازی خانه</p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-slate-500 bg-slate-200 w-24 h-24 p-8 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>

            <p className="text-slate-500 py-2">دکوراسیون داخلی</p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-slate-500 bg-slate-200 w-24 h-24 p-8 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>

            <p className="text-slate-500 py-2">محوطه سازی</p>
          </div>
        </div>
      </div>
      <Information />
    </>
  );
}
