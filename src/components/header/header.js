import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [topOwners, setTopOwners] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/TopOwners")
      .then((res) => res.json())
      .then((owners) => setTopOwners(owners));
  }, []);
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1  grid-flow-cols">
      <div className="xl:col-span-3 md:col-span-2 grid-cols-1  bg-slate-200 leading-10 py-5">
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
          <div
            className="after:content-['-------------------------------------------------------'] 
                       before:content-['-------------------------------------------------------']
                       xl:visible invisible"
          >
            دیده می شود در
          </div>

          <button className="btn">
            <Link href="/home">املاک ما را مشاهده کنید</Link>
          </button>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-24 md:pr-24 xl:visible invisible">
          <img
            src="https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_techcrunch_icon_157779.png"
            alt="techcrunch"
            className="w-24 my-1 sm:my-2"
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/Forbes-logo.png"
            alt="forbes"
            className="w-24 my-1 sm:my-2"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Business_Insider_Logo.svg/1280px-Business_Insider_Logo.svg.png"
            alt="Business_Insider"
            className="w-28 my-1 sm:my-2"
          />
          <img
            src="https://logohistory.net/wp-content/uploads/2023/02/BBC-Logo.png"
            alt="bbc"
            className="w-28 my-1 sm:my-2"
          />
        </div>
      </div>
      <div className=" xl:col-span-1 md:col-span-1 grid-cols-1 bg-slate-900 text-slate-100 flex flex-col justify-center items-center py-5">
        <p>سه مالک برتر</p>
        {topOwners.map((items) => {
          return (
            <div
              className="flex justify-center items-center gap-2 my-2"
              key={items.id}
            >
              <img
                src={items.img}
                alt={items.id}
                className="rounded-full max-h-16"
              />
              <div className="text-center">
                <p>{items.name}</p>
                <sub>{items.estate} فروش خانه</sub>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
